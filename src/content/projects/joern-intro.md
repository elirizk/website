---
title: 'Discovering vulnerabilities using static code analysis with Joern'
description: 'In this post we will learn the basics of static code analysis and how to use joern for analyzing an application’s source code.'
pubDate: 'Feb 9 2024'
heroImage: 'src/assets/joern/hero.png'
tags: ['Static Code Analysis', 'Cybersecurity', 'Algorithms', 'Scala', 'C/C++']
---

## Motivation

Static code analysis tools have come a long way in the past decade. Multiple tools have been developed to run on top of application’s code to detect bugs, vulnerabilities, or general inefficiencies. For example, Spotbugs has tremendously increased in popularity due to its wide support of bug discovery for Java code. In contrast, Joern provides a general static code analysis tool that supports multiple languages, including C++, Java, and PHP.

## Code Property Graphs


In order to extract the multiple properties of source code (e.g., variable names, data dependencies, function calls and definitions, etc…), we will have to obtain an Intermediate Representation (IR) of the code. IR is vastly used by compilers to transform high-level code to low-level machine instructions and perform different types of enhancements on the code before turning it into an executable. IR includes different types of graphs, mainly: Abstract Syntax Trees (AST), Control Flow Graph (CFG) and Data/Program Dependence Graph (DDG or PDG). Let’s talk about the details of each below.

We will use the following C++ example to illustrate the differences of each graph type:

```cpp
void foo()  
{  
  int x = source();  
  if (x < MAX)  
  {   
    int y = 2 \* x;  
    sink(y);  
  }  
}
```

You can think of the source function as a way to obtain user input and the sink function as a sensitive function that needs to be safeguarded against malicious input (e.g., database query, printing a value on a webpage, etc…)

Parsing this code, we can obtain the AST, CFG, or PDG graphs. The AST will use the language semantics to fill the graph nodes while preserving a true representation of the original code semantics; it also maintains the order in which statements were originally written in the code. The CFG showcases how the execution of the code can move between statements (which aren’t necessarily next to each other in the original code). It is mainly useful for representing if-else statements, for and while loops, break statements, etc… For example, the execution of the C++ code above can jump from evaluating the if condition to exiting the program if the condition evaluates to False, this possible execution will be displayed in the CFG. The PDG will highlight any dependencies on the data between different variables, function calls, conditions, etc… For example, the variable definition _x_ in the third line is used in the if condition and to define _y_, so data dependency edges will be added to display the flow of data from one statement to another. The AST, CFG, and PDG graphs are shown below.

![AST, CFG, PDG of the C++ code](/src/assets/joern/graphs.png)

While each code representation has its advantages, it is also limiting. For instance, ASTs provide a true representation of the code but it’s hard to find data dependencies between different statements. To resolve these conflicting issues, Code Property Graphs (CPG) were invented to merge these three different graphs which will greatly simplify traversing the code and accessing multiple properties we might seek for discovering bugs, vulnerabilities, or inefficiencies. The CPG graph of the C++ code is presented below.

![CPG of the C++ code](/src/assets/joern/cpg.png)

## Joern

Joern parses the application code to obtain a Code Property Graph and allows developers to customize their needs as graph traversal algorithms on top of this graph.

To install joern, you can execute the following code on a Linux / Ubuntu system:

```bash
mkdir joern && cd joern # optional  
curl -L "https://github.com/joernio/joern/releases/latest/download/joern-install.sh" -o joern-install.sh  
chmod u+x joern-install.sh  
./joern-install.sh --interactive
```

By default, joern will be installed at _~/bin/joern_, Once installed, you can run joern in a command prompt as follows:

```bash
cd <path\_to\_joern>/joern/joern-cli  
./joern
```

Once the joern terminal is open, it will provide you with an interactive way to parse source code and traverse its graph. Joern is written in Scala (a variant of Java that supports object-oriented and functional programming), so the code that will be written in the joern terminal will be Scala code. While knowing Scala will allow you to write more complicated traversals within the joern terminal, you don’t need full fluency in Scala to be able to pass some useful traversal commands. You also have the option to export the graph as a neo4j graph (among other graph extensions) and write Python code on top of the graph to traverse it. For now, we will directly work inside the joern terminal which will greatly simplify graph traversals as it provides an extensive list of useful commands.

For example if the C++ code above was saved as _foo.c_, we can provide its path to the _importCode_ function in joern to parse the code and obtain its CPG as follows.

```bash
joern> importCode("foo.c")
```

Once done, we can obtain the nodes of interest. For example if we want all reference to the identifier _y_, we can run:

```bash
cpg.identifier("y").toList
```

This will output the following list of Identifier nodes. Notice how we have two nodes representing the identifier _y_, once when it was defined in line 6 and another when it is passed to the _sink_ function in line 7.

![List of identifier nodes named y](/src/assets/joern/code1.png)

To obtain a Call node, we can use the _call_ function in the same manner.

![The call node in the code](/src/assets/joern/code2.webp)

In order to find if the source function ever reaches a sink function (and potentially patch or sanitize the input to prevent any vulnerabilities), we can use the _reachableByFlows_ function which performs backward traversal from the sink function to the source.

![Vulnerability path](/src/assets/joern/code3.webp)

As shown, we obtain a detailed data flow from the source function to the sink, which provides useful information for programmers if they need to prevent any malicious input to reach a sensitive function. As such, they might sanitize the input before it reaches the sensitive function.

## Conclusion


In this post, we saw how code property graphs are used to store different properties of the source code. This allows modeling bugs, vulnerabilities, and inefficiencies as graph traversal algorithms which greatly simplifies the development of static code analysis tools. We also used the joern tool to parse application source code to its CPG representation and performed some interesting traversals provided by the tool. In the next post, we will look at developing more complicated graph traversal algorithms to model the complexities of correctly detecting different types of vulnerabilities.

## References

[Paper that introduced Code Property Graphs for static code analysis.](https://fabianyamaguchi.com/files/2014-ieeesp.pdf)

[Joern installation guide](https://docs.joern.io/installation/)

[Joern traversal basic commands](https://docs.joern.io/traversal-basics/)