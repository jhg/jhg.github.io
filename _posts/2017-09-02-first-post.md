---
lang: en
ref: first-post
---
# {{ page.title }}
{% assign posts=site.posts | where:"ref", page.ref | sort: 'lang' %}
{% for post in posts %}
{% include link-with-lang.html href=post.url text=post.lang lang=post.lang %}
{% endfor %}

This is the first post with Jekyll.
