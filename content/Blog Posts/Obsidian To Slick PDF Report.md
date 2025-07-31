---
title: Obsidian To Slick PDF Report
date: 2022-06-01 02:06:14 -0400
tags:
  - obsidian
  - pkm
  - pandoc
modified: 2023-12-22
---

## Goals
I wanted to repeatably transform markdown into a stylish, custom pdf. I use markdown to take all of my note in thanks to my undying love for [Obsidian](https://obsidian.md). For my upcoming OSCP exam retake specifically, I wanted to be able to quickly and fluidly get my notes out of Obsidian and into a professional looking report that I could be proud of turning in.

My definition of done was this:
- Markdown input produced PDF output
- I could control enough of the style to make it my own
	- Code blocks should have syntax highlighting
	- I could use colors and assets from my ever unfinished [portfolio site](https://cam-barts.github.io)
	- **Nice to have**: Style is controlled *within* the markdown to affect the output PDF to make it easier to create a template
- I can reuse the style easily in other reports
- The process should be easily script-able

## Tools
- [pandoc](https://pandoc.org/)
- [panrun](https://github.com/mb21/panrun)
- [Eisvogel LaTeX template](https://github.com/Wandmalfarbe/pandoc-latex-template)
- [Gimp](https://www.gimp.org/) to make the background images for the title page and subsequent pages

## Style
I am by no means a designer, but I like to believe I am building a few brand assets with my [portfolio site](https://shadeking.cam). The colors on the site are inspired heavily from the [starship prompt](https://starship.rs/), especially the magenta, which I modified ever so slightly and use everywhere, and the fonts I stumbled upon in [fontjoy](https://fontjoy.com/).  I really like the techie look of the Overpass Mono headers, so I'd love to use those in my reports. 

My intention was to create a template that I intend to use more than once, and I wanted the reports that utilize the template to be aesthetic. With that and the fact that with the Eisvogel LaTex Template allows you to set variables for page background and title page background, I went about creating those backgrounds in Gimp, which are the backgrounds on the pages in the linked document, and linked in the following section as `titlepage-background: "TitlePageBackground.png"` and `page-background: "PageBackground.png"`. 

## Using Panrun and The Eisvogel Template
Panrun is a tool that allows you to set arguments for pandoc in the yaml frontmatter of the markdown document, so you don't have to remember all of the arguments you must pass. My front matter ended up looking like this:

```yaml
---
note_type: reference
writing_type: draft
title: Academy.htb
author: 5hade
titlepage: true
titlepage-rule-color: "ff0d8a"
titlepage-background: "TitlePageBackground.png"
titlepage-text-color: "eaecef"
page-background: "PageBackground.png"
colorlinks: "ff0d8a"
toc: true
toc-own-page: true
mainfont: DejaVuSerif
sansfont: Overpass Mono
linkcolor: magenta
urlcolor: magenta
listings-no-page-break: true
code-block-font-size: \scriptsize
output:
  pdf:
    pdf-engine: xelatex
    output: academy-htb.pdf
    from: markdown
    template: eisvogel
    listings: true
---
```

The top two yaml items are not for panrun, but are front matter I utilize in my Obsidian vault. The ones in the `output` block are used by pandoc, and all of the rest are used directly by the Eisvogel Template to style and format the PDF output. 

## Reusing The Template 
Now that I've done this once, I can create a template to use when I want to output another report. I use the [templater](https://silentvoid13.github.io/Templater/docs) and my template looks like this:

```yaml
---
note_type: null
writing_type: draft
title: <% tp.file.cursor(1) %>
author: <% tp.file.cursor(2) %>
titlepage: true
titlepage-rule-color: "ff0d8a"
titlepage-background: "/Pictures/pandoc/TitlePageBackground.png"
titlepage-text-color: "eaecef"
page-background: "/Pictures/pandoc/PageBackground.png"
colorlinks: "ff0d8a"
toc: true
toc-own-page: true
mainfont: DejaVuSerif
sansfont: Overpass Mono
linkcolor: magenta
urlcolor: magenta
listings-no-page-break: true
code-block-font-size: \scriptsize
output:
  pdf:
    pdf-engine: xelatex
    output: No One is Crazy Financially.pdf
    from: markdown
    template: eisvogel
    listings: true
---
```

