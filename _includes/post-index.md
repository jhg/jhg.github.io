## {{ include.header }}

{% assign posts=site.posts | where:"lang", page.lang %}
{% for post in posts %}
### [{{ post.title }}]({{ post.url | prepend: site.url }})
{{ post.excerpt }}
[{{ include.text-more }}]({{ post.url | prepend: site.url }})

{% else %}
{{ include.text-else }}
{% endfor %}
