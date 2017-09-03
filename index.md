---
layout: default
ref: index
lang: en
---
## Welcome to JHG Page

Under construction.

## {{site.github.repository_name}}:~ \# Posts

{% assign posts=site.posts | where:"lang", page.lang %}
{% for post in posts %}
### [{{ post.title }}]({{ post.url | prepend: site.url }})
{{ post.excerpt }}

{% else %}
Without posts yet.
{% endfor %}


Subscribe [via RSS]({{ "/feed.xml" | prepend: site.url }}).
