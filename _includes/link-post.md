{%- assign post=site.posts | where:"lang", page.lang | where:"ref", include.ref | first -%}
{%- if post -%}
[{{ post.title }}]({{ post.url | prepend: site.url }})
{%- else -%}
*{{ include.text-else | default:"broken link" }}*
{%- endif -%}
