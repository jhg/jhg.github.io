---
layout: default
ref: index
lang: en
---

## Welcome to JHG Page

Under construction.

## Posts

{% assign posts=site.posts | where:"lang", page.lang %}
{% for post in posts %}
### [{{ post.title }}]({{ post.url | prepend: site.baseurl }})
{% else %}
Without posts yet.
{% endfor %}

subscribe [via RSS]({{ "/feed.xml" | prepend: site.baseurl }})

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).
