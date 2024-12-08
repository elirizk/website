---
title: 'Machine Learning for Network Intrusion Detection — Part I: Feature Engineering'
description: 'In this project, we will explore the area of developing a machine learning model for network intrusion detection. This is a two-part project. The first part focuses on data pre-processing and feature engineering. The second part trains and evaluates different machine learning models.'
pubDate: 'Dec 17 2023'
heroImage: 'src/assets/ml_nid/network.jpg'
tags: ['Data Analysis', 'Data Visualization', 'Feature Engineering', 'Python', 'Scikit-learn', 'Matplotlib']
---

Traditional intrusion detection systems have used the notion of allow or block lists to only permit harmless operations or to detect known malicious activities, respectively. This requires a regularly updated configuration file listing the user operations to allow or block, e.g. known malicious IP addresses, outside worktime logins, etc. While this type of network intrusion detection system requires constant modification and a considerable initial investment to produce the original configuration, a novel approach to intrusion detection has emerged: the use of machine learning models to automate the task of detecting potential intruders. As such, in this post, we will develop a machine learning model to recognize hidden patterns in anomalous network activity. To this end, we will perform some data pre-processing on the dataset we obtain, explore various machine learning models, and recommend the best model according to their performance and other metrics. The dataset used for the rest of our implementation can be found [here](https://www.kaggle.com/datasets/sampadab17/network-intrusion-detection).

## Import libraries and set display configuration

Before processing our dataset, we will have to import the necessary libraries to use their helpful commands.

```python
import torch  
from torch.utils.data import DataLoader, TensorDataset  
from torchviz import make_dot  
import pandas as pd  
import numpy as np  
import matplotlib  
import matplotlib.pyplot as plt  
from mpl_toolkits.mplot3d import Axes3D  
from sklearn.model_selection import train_test_split  
from sklearn import metrics, preprocessing  
from sklearn.decomposition import PCA  
from sklearn.linear_model import LogisticRegression  
from sklearn.tree import DecisionTreeClassifier, plot_tree  
from sklearn.ensemble import RandomForestClassifier  
from tqdm import tqdm  
import seaborn as sns
```

I also like setting the display configuration of the pandas module to render all columns, rows, or sequences (as opposed to setting a threshold on its maximum value). This can be done with the following code:

```python
pd.set_option('display.max_columns', None)  
pd.set_option('display.max_rows', None)  
pd.set_option('display.max_seq_item', None)
```

## Exploratory Data Analysis

We will start by examining the columns available in the dataset.

```python
df.columns  
df = pd.read_csv('Train_data.csv')  
df.columns
```

We obtain the following list of features and class labels (note that the column _class_ contains the label of the entry: Normal or Anomaly). We also note that the columns: _protocol_type_, _service_ and _flag_ are categorical while the rest are numerical. The total number of columns for this dataset is 43 columns.

```python
['duration', 'protocol_type', 'service', 'flag', 'src_bytes',  
'dst_bytes', 'land', 'wrong_fragment', 'urgent', 'hot',  
'num_failed_logins', 'logged_in', 'num_compromised', 'root_shell',  
'su_attempted', 'num_root', 'num_file_creations', 'num_shells',  
'num_access_files', 'num_outbound_cmds', 'is_host_login',  
'is_guest_login', 'count', 'srv_count', 'serror_rate',  
'srv_serror_rate', 'rerror_rate', 'srv_rerror_rate', 'same_srv_rate',  
'diff_srv_rate', 'srv_diff_host_rate', 'dst_host_count',  
'dst_host_srv_count', 'dst_host_same_srv_rate',  
'dst_host_diff_srv_rate', 'dst_host_same_src_port_rate',  
'dst_host_srv_diff_host_rate', 'dst_host_serror_rate',  
'dst_host_srv_serror_rate', 'dst_host_rerror_rate',  
'dst_host_srv_rerror_rate', 'class']
```

To check for class imbalances, we plot the number of entries that are labelled as suspicious versus normal. This can safeguard against potential biases in the model being trained (adjusting for class imbalances).

```python
sns.countplot(x=df['class'], palette=['green', 'red'], hue=df['class'])
```
!['Class Count](/src/assets/ml_nid/class_count.png)
As we can see both classes are almost equally represented in the dataset. Hence, we don’t need to remove any instances of the majority class (undersampling).

## Data Correlation

We now go ahead with transforming the class label column to a binary value (0 for normal and 1 for anomaly) and providing the Pearson correlation matrix of the dataset (excluding the categorical feature columns).

```python
categorical_columns = ['protocol_type', 'service', 'flag']  
df['class'] = df['class'].apply(lambda x: 0 if x=="normal" else 1)  
plt.figure(figsize=(40,30))  
sns.heatmap(df.drop(categorical_columns, axis=1).corr(), annot=True)
``` 
![Correlation matrix with the 39 numerical features and the class label (last column/row)](/src/assets/ml_nid/corr_heatmap.png)

As can be seen, most features aren’t highly correlated together (colored in light purple for a value close to 0) while some feature pairs have either high positive (close to 1) or negative (close to -1) correlation (colored in white or dark purple respectively). For the class label column (last column and last index), only 9 of the 42 numerical features are highly correlated (with an absolute value greater than 0.5). However, this doesn’t mean that we can easily disregard the features with correlation close to 0. This is because the Pearson correlation value assumes a linear relationship between the two variable, which is an overly simplistic assumption in our case (it might be the case that the interplay of different features is highly correlated with the class label or that the feature is highly correlated in a nonlinear fashion). For example, we decided to plot the variation of the same server rate variable against the destination host name server rate, producing the following scatter plot. Note that for the rest of this post, entries labeled as normal are visualized in green while those labeled anomalous are labeled in red.

```python
labels = df['class']  
colors = ['green','red']  
y = df['dst_host_same_srv_rate']  
x = df['same_srv_rate']  
plt.scatter(x,y, c=labels, cmap=matplotlib.colors.ListedColormap(colors), alpha=0.5, s=40)  
plt.xlabel("Same Server Rate")  
plt.ylabel("Destination Host Name Server Rate")
```
![Scatter plot of the same server rate versus the destination host name server rate](/src/assets/ml_nid/same_srv_rate_vs_dst_host_same_srv_rate.png)

As can be seen, while some distinction can be drawn between suspicious and benign inputs, there is no clear-cut separation that can yield a highly accurate model.

Before processing the data further, we perform one-hot encoding on the categorical features as well as split the dataset into training and testing data (80% split).

```python
df = df.join(pd.get_dummies(df.loc[:, categorical_columns]))  
df = df.drop(categorical_columns, axis=1)  
X_train, X_test, y_train, y_test = train_test_split(df.drop(['class'], axis=1), df['class'], test_size=0.2, random_state=42)
```

The shape of the training data becomes 20153 x 118. One-hot encoding significantly increased the number of features we were concerned with: we now have 118 features to train a model on. Considering that most features weren’t highly correlated to begin with, we decide to perform feature engineering on our dataset before training any model on it.

## Feature Engineering (PCA)

We first begin by scaling our data to the standard normal distribution (Gaussian with mean 0 and standard deviation 1). Note that we fit the distribution on the training data and scale the test data accordingly, to prevent data leakage from the training to the testing set.

```python
scaler = preprocessing.StandardScaler()  
scaler.fit(X_train)  
X_train_norm = scaler.transform(X_train)  
X_test_norm = scaler.transform(X_test)
```

After doing so, we perform Principal Component Analysis (PCA) which reduces the dimensionality of our data. It is a form of unsupervised algorithm that produces a small set of uncorrelated variables called principal components. Its benefit is manifold including (1) reducing the complexity of our models, (2) helping alleviate the “curse of dimensionality”, and (3) increasing the interpretability of the data. We decide to perform PCA to obtain 10 resulting components, i.e., new feature columns to use for our models.

```python
pca = PCA(n_components = 10)  
  
X_train_PCA = pca.fit_transform(X_train_norm)  
X_test_PCA = pca.transform(X_test_norm)  
  
explained_variance = pca.explained_variance_ratio_  
explained_variance
```

The explained variance ratio of those 10 components are:

```python
[0.0834838 , 0.05251576, 0.03534561, 0.03201952, 0.02585129,
 0.02270666, 0.01908112, 0.01513291, 0.01363081, 0.01235519]
```

Note that the components are sorted by this score. After plotting the Pearson correlation matrix for these new features as well as the class label, we obtain this new heat map:

```python
df_PCA = pd.DataFrame(X_train_PCA).corr()  
df_PCA['class'] = y_train  
sns.heatmap(df_PCA.corr(), annot=True)
```
![Correlation heatmap of the 10 principal components with the class label](/src/assets/ml_nid/pca_heatmap.png)

It is interesting to see that the correlation of the features among each other is -0.11 (which is close to -1/9) since PCA produces uncorrelated features with equal correlation score. Concerning their correlation with the class label (last column or last index), we can note that most of these components are more strongly correlated with the label that their original 42 features. In fact, only one of them has a value of 0.071 while the others have values greater than or equal to 0.35 in absolute value. Compare that with the previous heatmap we calculated on the original features where most of them had a score close to 0.01 in absolute value.

In order to appreciate the power of PCA, we also perform a scatter plot using the first two PCA components as well as a 3D scatter plot using the first three components. This results in the following two figures:

```python
x = list(map(lambda x: x[0], X_train_PCA))  
y = list(map(lambda x: x[1], X_train_PCA))  
z = list(map(lambda x: x[2], X_train_PCA))  
labels = y_train  
colors = matplotlib.colors.ListedColormap(['green','red'])  
plt.scatter(x,y, c=labels, cmap=colors, alpha=0.2, s=40)  
plt.xlabel("First PCA Component")  
plt.ylabel("Second PCA Component")
```
![Scatter plot of the 1st and 2nd principal components](/src/assets/ml_nid/pca_2d.png)
```python
fig = plt.figure(figsize=(14,14))  
ax = plt.axes(projection='3d')  
labels = y_train  
  
# Creating plot  
scatter = ax.scatter3D(x, y, z, c=labels, cmap=colors)  
ax.set_zlim(-4,2)  
ax.set_xlim(-4,3)  
ax.set_xlabel("First PCA Component")  
ax.set_ylabel("Second PCA Component")  
ax.set_zlabel("Third PCA Component")  
legend1 = ax.legend(*scatter.legend_elements(),  
                    loc="upper right", title="Classes")  
ax.add_artist(legend1)  
plt.show()
```
![3D Scatter plot of the 1st, 2nd, and 3rd principal components](/src/assets/ml_nid/pca_3d.png)
## Conclusion

The power of feature dimensionality reduction through PCA allowed us to easily separate the class labels across the first two or three principal components. Surprisingly, the PCA algorithm was able to do that without looking at the class labels! The algorithm works only on the input dataset of features, not the labels. Feature engineering was able to significantly simplify the problem of anomaly detection by using the newly produced 10 principal components instead of the original 118 features.