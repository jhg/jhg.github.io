---
lang: en
ref: first-post
---
# {{ page.title }}
{% assign posts=site.posts | where:"ref", page.ref | sort: 'lang' %}
{% for post in posts %}[{{ post.lang }}]({{ post.url }}) {% endfor %}

This is the first post with Jekyll.
