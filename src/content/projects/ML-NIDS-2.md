---
title: 'Machine Learning for Network Intrusion Detection — Part II: Machine Learning Training'
description: ''
pubDate: 'Dec 17 2023'
heroImage: 'src/assets/ml_nid/hero2.jpg'
tags: ['Machine Learning', 'Cybersecurity', 'Python', 'PyTorch', 'Scikit-learn']
---
_If you haven’t yet, check [part I](/src/assets/projects/ml-nids-1) of this project where we performed some data pre-processing, exploratory data analysis, and feature engineering (PCA) on the original dataset._

As a reminder, the dataset we’re using can be found [here](https://www.kaggle.com/datasets/sampadab17/network-intrusion-detection). We are also training the machine learning models on the 10 principal components produced by our feature engineering approach, except for the DNN which will be using the original features.

We will start by defining a helpful function to print the error metrics of the ML models we will train.

```python
def print_error_metrics(y_test, y_pred):  
    acc = metrics.accuracy_score(y_test, y_pred)  
    prc = metrics.precision_score(y_test, y_pred)  
    f1 = metrics.f1_score(y_test, y_pred)  
    print('Accuracy: {:.5f}'.format(acc))  
    print('Precision: {:.5f}'.format(prc))  
    print('F1 Score: {:.5f}'.format(f1))
```

## Logistic Regression Models

We will use an unregularized logistic regression model to fit on the training data.

```python
regressor = LogisticRegression(max_iter=100, penalty='none')  
regressor.fit(X_train_PCA, y_train)  
y_pred = regressor.predict(X_test_PCA)  
print_error_metrics(y_test, y_pred)
```

We obtain the following metrics on this model: Accuracy: 0.95773, Precision: 0.96615, and F1 Score: 0.95379. While promising, we regularize this version by using an elastic net regularization with an L1 ratio of 0.5. This will be helpful in avoiding overfitting which can make the model more generalizable to unseen data.

```python
regressor = LogisticRegression(max_iter=400, solver='saga', penalty='elasticnet', l1_ratio=0.5)  
regressor.fit(X_train_PCA, y_train)  
y_pred = regressor.predict(X_test_PCA)  
print_error_metrics(y_test, y_pred)
```

## Decision Trees

```python
dtree = DecisionTreeClassifier(max_depth=None)  
dtree.fit(X_train_PCA, y_train)  
print("Decision tree maximum depth:", dtree.tree_.max_depth)  
y_pred = dtree.predict(X_test_PCA)  
print_error_metrics(y_test, y_pred)
```

After training a decision tree classifier, we obtain the following metrics: Accuracy: 0.99147, Precision: 0.98974, and F1 Score: 0.99080.

While the results are promising, after looking into the decision tree produced, we realize that its maximum depth is 19. This implies that it might be overfitting on the training data: some decisions aren’t obtained until 19 separate splits are made on one of the 10 principal components. A zoomed out snapshot of the decision tree (as well as the code that produces it) is provided below. Note that the code changes the default color of the decision tree to paint the normal class in green and the anomalous class in red.

```python
from matplotlib.colors import to_rgb  
  
features = ['PCA_1', 'PCA_2', 'PCA_3', 'PCA_4', 'PCA_5', 'PCA_6', 'PCA_7', 'PCA_8', 'PCA_9', 'PCA_10']  
fig = plt.figure(figsize=(100,90))  
class_colors=['green', 'red']  
artists = plot_tree(dtree, feature_names=features, class_names=['Normal', 'Anomaly'], filled=True, rounded=True, fontsize=10)  
for artist, impurity, value in zip(artists, dtree.tree_.impurity, dtree.tree_.value):  
    r, g, b = to_rgb(class_colors[np.argmax(value)])  
    f = impurity * 2  
    artist.get_bbox_patch().set_facecolor((f + (1-f)*r, f + (1-f)*g, f + (1-f)*b))  
    artist.get_bbox_patch().set_edgecolor('black')  
fig.savefig('decision_tree_1.png')
```
![Original decision tree](/src/assets/ml_nid/decision_tree_1.png)
As you can see from the tree structure, this is an overly complex models considering it’s trained on 10 features. To regularize this model, we manually set the maximum depth of the tree to 5 in the _DecisionTreeClassifier_ class parameter. As a result, we obtain the following metrics: Accuracy: 0.97658, Precision: 0.98300, and F1 Score: 0.97450. The decision tree produced is found below.

![Decision tree model with maximum depth of 5](/src/assets/ml_nid/decision_tree_2.png)

Note that the red leaves indicate a majority of malicious samples (so it will be predicted as malicious) and the green leaves have a majority of benign samples (predicted as benign). The more transparent a leaf is, the higher its entropy (the model will predict the majority class label but will be unsure about it). Even though we significantly reduced the tree’s depth from 19 to 5, its accuracy and precision barely dropped. This makes us more confident in recommending this version of the regularized model as opposed to the overfit one.

## Deep Neural Network

We start by specifying the architecture of the model. The neural network passes the original 118 features to a hidden layer of 20 nodes which then passes them to another hidden layer of 10 nodes which finally sends them to an output node. Note that the ReLU activation function is used (to avoid the problem of vanishing gradients) except for the final layer which uses the sigmoid activation function to output probability values.

```python
class SimpleNN(torch.nn.Module):  
    def __init__(self):  
        super(SimpleNN, self).__init__()  
        self.fc1 = torch.nn.Linear(118, 20)  
        self.relu1 = torch.nn.ReLU()  
        self.fc2 = torch.nn.Linear(20, 10)  
        self.relu2 = torch.nn.ReLU()  
        self.fc3 = torch.nn.Linear(10, 1)  
        self.sigm = torch.nn.Sigmoid()  
  
    def forward(self, x):  
        x = self.fc1(x)  
        x = self.relu1(x)  
        x = self.fc2(x)  
        x = self.relu2(x)  
        x = self.fc3(x)  
        x = self.sigm(x)  
        return x
```

We will use the binary cross entropy loss function as well as the Adam optimizer to train this model on the training data.

```python
model = SimpleNN()  
criterion = torch.nn.BCELoss()  
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)  
dataset = TensorDataset(torch.from_numpy(X_train_norm).type(torch.float), torch.from_numpy(y_train.to_numpy()).type(torch.float))  
train_loader = DataLoader(dataset, batch_size=64, shuffle=True)  
X_test_DNN = torch.from_numpy(X_test_norm).type(torch.float)  
y_test_DNN = torch.from_numpy(y_test.to_numpy()).type(torch.float)  
  
epochs = 20  
loss_value = 0.0  
train_loss = []  
test_loss = []  
for epoch in range(epochs):  
    model.train()  
    i = 0  
    for _batch_idx, (features, labels) in enumerate(tqdm(train_loader)):  
        i += 1  
        optimizer.zero_grad()  
        outputs = model(features).squeeze()  
        loss = criterion(outputs, labels)  
        loss.backward()  
        optimizer.step()  
  
        loss_value += loss.item()  
    train_loss.append(loss_value/i)  
    # Testing  
    model.eval()  
    with torch.inference_mode():  
        test_pred = model(X_test_DNN).squeeze()  
        test_loss_val = criterion(test_pred, y_test_DNN).item()  
        test_loss.append(test_loss_val)  
        print(f'Epoch {epoch+1}/{epochs}, Training Loss: {loss_value/i:.10f}, Test Loss: {test_loss_val:.10f}')  
    loss_value = 0.0  
print(train_loss)
```

After 20 epochs, we obtain the following train and test loss curves:

![DNN training for 20 epochs](/src/assets/ml_nid/loss1.png)

Considering that the testing loss fluctuates and increases slightly beyond the fifth epoch while the training loss is decreasing, we decide to employ early stopping to stop training the model at epoch 5 (by changing our _epoch_ variable to 5 in the code above). This results in the following learning curve:

![DNN model training with 5 epochs](/src/assets/ml_nid/loss2.png)

To evaluate our model, we run the code below:

```python
model.eval()  
with torch.inference_mode():  
    test_pred = model(X_test_DNN).squeeze()  
    test_loss = criterion(test_pred, y_test_DNN)  
    y_pred = []  
    for pred in test_pred:  
        if pred>0.5: y_pred.append(1)  
        else: y_pred.append(0)  
    print_error_metrics(y_test_DNN, y_pred)
```

We obtain the following metrics: Accuracy: 0.99484, Precision: 0.99656, and F1 Score: 0.99442.

## Conclusion

In conclusion, it is clear how data pre-processing and feature engineering can be of incredible help in the ML workflow. As for the specific ML models, we recommend the use of decision trees (regularized with a maximum depth of 5) for network intrusion detection as captured by the dataset we used. This model provides high accuracy for intrusion detection while being regularized against overfitting and being explainable in nature as captured by its decision nodes (as opposed to the unexplainable nature of the deep neural network model we developed).