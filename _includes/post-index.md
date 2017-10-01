# {{ include.header }}

{% assign posts=site.posts | where:"lang", page.lang %}
{% for post in posts %}
## {{ post.title }}

{{ post.date | date_to_string }}

*{{ post.categories | join:", " }}*

{% if post.miniature %}
  ![preview]({{ site.url }}{{ post.miniature }})
{% endif %}
{{ post.excerpt }}
[{{ include.text-more }}]({{ post.url | prepend: site.url }})

{% else %}
{{ include.text-else }}
{% endfor %}
