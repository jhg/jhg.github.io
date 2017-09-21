{% assign page=site.pages | where:"lang", page.lang | where:"ref", include.ref | first %}
{% if page %}[{{ page.title }}]({{ page.url | prepend: site.url }}){% else %}{{ include.text-else | default:"*broken link*" }}{% endif %}
