---
title: "Initial Post with Tests on Code Block, LaTeX, Three.js"
date: 2021-12-22T17:23:51+08:00
draft: false
tags: ["math", "program"]
---
This is an example post to demonstrate the media formats that can be posted on this website.

## LaTeX math typesetting

Let's type some math inline $E = mc^2$, and then some math blocks with KaTeX:
$$
\ket{0}=\begin{pmatrix} 1 \\\\ 0 \end{pmatrix}
$$
For example, the famous Shrodinger's equation: 
$$
H(t)|\psi(t)\rangle=i \hbar \frac{\partial}{\partial t}|\psi(t)\rangle
$$


## Code Blocks with copy to clipboard
Now some code: 
```python 
print("hello world")
```

## Add a Three.js Canvas using Hugo short code
{{< three src="draw.js" width="600" height="600" >}}


## Add an image using Hugo short code
{{< image src="images/my-image.jpg" >}}


