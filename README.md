# Henry's Peronsal website 
Visit https://hazarre.github.io/ to see this page in production.

# Dev
Install hugo and run `hugo server` to start the hugo website locally. 

## About 
This is my personal site. Built with Hugo 
Supports LaTeX with katex.js and 3D animation with Three.js. 

## Directory Structure 
Follows Hugo directory structure. 
- ```content/``` contains the markdown files 
- ```layout/```  
- ```static/js``` custom js
- ```static/css``` custom css
- ```static/lib``` dependencies that can be extracted with ```npm install```

### Content 
- Home 
    - Intro 
    - Portofolio
    - Social Links
- Projects & Experiments (TBD) 
- Writings & Blogs (TBD)


## Action Items 
- Build Home Page
- Add KaTex.js support for markdown content 
- Add Tufte.js support for Blogs
- Add p5.js / d2.js sections 
- See [Congo Theme](https://github.com/jpanther/congo) for more features to add
- use npm package manager and perhaps serve the js lib myself
- Gallery (TBD)


### Documentation
#### Add rounded codeblock 
- [Hugo doc highlight](https://gohugo.io/getting-started/configuration-markup#highlight) and [hugo doc markup](https://gohugo.io/getting-started/configuration-markup/)
- set ```border-radius: ``` for ```/* PreWrapper */``` in ```syntax.css```, which is for. 

### Acknowledgement 
Hugo, Bootstrap, Fontawesome, three.js, d3.jds, p5.js. 