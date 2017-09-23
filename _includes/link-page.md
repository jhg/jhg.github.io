{%- assign linked-page=site.pages | where:"lang", page.lang | where:"ref", include.ref | first -%}
{%- if linked-page -%}
[{{ linked-page.title }}]({{ linked-page.url | prepend: site.url }})
{%- else -%}
*{{ include.text-else | default:"broken link" }}*
{%- endif -%}
