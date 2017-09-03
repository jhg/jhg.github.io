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
### [{{ post.title }}]({{ post.url | prepend: site.url }})
{{ post.excerpt }}
[Read more]({{ post.url | prepend: site.url }})

{% else %}
Without posts yet.
{% endfor %}
