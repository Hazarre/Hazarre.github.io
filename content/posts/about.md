---
title: "How this blog is built."
date: 2021-12-22T17:23:51+08:00
draft: false
tags: ["about", "project", "hugo", "static site", "JAMstack"]
---

Some features of this blogs includes: 
- Math typesetting with KaTeX.js.
- 3D animation with Three.js.
- Markdown. 
- Layout CSS with bootstrap.js.

See all features in action at [this example post]({{< ref "./testpost" >}}).

This is a static site build with [Hugo](https://gohugo.io/) and hosted on Github. Each page layout is structured under `layout/_default/`, with reusable componenents under `partials/`. Additionally, hugo support `shortcodes/` to add html content inside markdown posts.

Full source code can be found on the repo https://github.com/Hazarre/Hazarre.github.io. 
