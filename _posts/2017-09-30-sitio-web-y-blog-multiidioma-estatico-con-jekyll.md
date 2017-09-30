---
layout: post
lang: es
ref: 0
miniature: /assets/posts/0/miniature.jpg
authors:
  - name: Jesús Hernández Gormaz
    avatar: jhg
title: Sitio web multi-idioma con Jekyll
---
**Los motivos para usar [Jekyll][jekyll] son** diversos pero se puede resumir
  en: **hace lo que necesito** en este momento y **el tiempo requerido es
  reducido**. Era necesario el **soporte a múltiples idiomas**, en mi anterior
  blog tenía visitas no solo de España, también tenía visitas de: Alemania,
  Estados Unidos, México, etc. Por eso, en este primer articulo **explicare por
  que he usado [Jekyll][jekyll] y [GitHub Pages][github-pages]** y como **hacer
  un sitio multi-idioma con [Jekyll][jekyll]**.

## ¿Por que Jekyll? ¿Por que una web estática?

Todavía **no necesito funcionalidad en el lado del servidor**, y lo que ahora
  necesito **lo resuelve perfectamente una web estática**. Sin duda que cuando
  necesite que la pagina sea generada dinamicamente, un API, etc;
  [Jekyll][jekyll] no sera suficiente, y tengo ya ideas en desarrollo para
  ese día.

### Markdown para escribir los artículos

Si en un futuro necesito importar los artículos, están en **formato markdown con
  front matter**, seria sencillo. Además, por ahora **me ahorro el hospedaje al
  usar [GitHub Pages][github-pages] gratis**.

### ¿Como funciona Jekyll?

**[Jekyll][jekyll] genera el sitio web y se sirve el resultado renderizado**.
  En el caso de **[GitHub Pages][github-pages] la construcción es automática**
  cuando hay **nuevos cambios en la rama *master*** del repositorio.

Obviare todo lo que esta en la **[documentación oficial de Jekyll][jekyll-doc]**.
  También puedes ver el código fuente en el
  [repositorio en GitHub de mi sitio web](https://github.com/jhg/jhg.github.io).

## Haciendo una web estática multi-idioma

Por ser estática, **cada versión de un post o pagina sera un documento HTML**.
  No tenemos nada en el lado del servidor para una misma URL responderla con
  el idioma adecuado pasado en el *query string* de la URL o en la cabecera.
  Necesitaremos utilizar la etiqueta `link` para indicar las alternativas al
  documento HTML e hiper-enlaces.

### Valores lang y ref

El truco es bastante sencillo. Aprovecharemos los valores en YAML del
  front matter para **cada post y pagina marcarlos con `lang` y `ref`**.

```
{%- raw -%}
---
layout: post
lang: es
ref: 0
miniature: /assets/posts/0/miniature.jpg
title: Sitio web multi-idioma con Jekyll
---
{% endraw %}
```

### Índices por lenguaje

De esa forma es fácil **hacer un índice de los artículos filtrando según el
  idioma**:

```
{%- raw -%}
## {{ include.header }}

{% assign posts=site.posts | where:"lang", page.lang %}
{% for post in posts %}
### [{{ post.title }}]({{ post.url | prepend: site.url }})
{%- if post.miniature -%}
  ![preview]({{ site.url }}{{ post.miniature }})
{% endif %}
{{ post.excerpt }}
[{{ include.text-more }}]({{ post.url | prepend: site.url }})

{% else %}
{{ include.text-else }}
{% endfor %}
{% endraw %}
```

Decidí hacer **el índice en un *include*** y de esa forma incluirlo en el índice
  en cada idioma. Con eso además quedaba personalizado el texto en caso de no
  existir ningún artículo. Para las paginas la idea es la misma.

### Versiones traducidas enlazadas

En el *layout* `default.html` indicamos las **versiones traducidas**
  generando las etiquetas *link* necesarias:

```
{%- raw -%}
<head>

  {% assign posts=site.posts | where:"ref", page.ref | where_exp: "post", "post.lang != page.lang" | sort: 'lang' %}
  {% for post in posts %}
    <link rel="alternate" hreflang="{{ post.lang }}" href="{{ post.url | prepend: site.url }}" />
  {% endfor %}

  {% assign pages=site.pages | where:"ref", page.ref | where_exp: "translated-page", "translated-page.lang != page.lang" | sort: 'lang' %}
  {% for translated-page in pages %}
    <link rel="alternate" hreflang="{{ translated-page.lang }}" href="{{ translated-page.url | prepend: site.url }}" />
  {% endfor %}

</head>
{% endraw %}
```

### Navegación entre versiones traducidas

Para que el usuario pueda **navegar entre idiomas con hiper-enlaces** en
  los *layouts* `page.html` y `post.html` podemos listar cada idioma:

```
{%- raw -%}
<aside class="other-languages">
  {% assign posts=site.posts | where:"ref", page.ref | where_exp:"post", "post.lang != page.lang" | sort: 'lang' %}
  {% for post in posts %}
  {% assign post-href=post.url | prepend: site.url %}
  {% include link-lang.html href=post-href text=post.lang lang=post.lang %}
  {% endfor %}
</aside>
{% endraw %}
```

La misma lógica podemos aplicarla para cualquier parte del sitio web.

### ¿Un blog sin comentarios?

No podemos dejar el blog sin comentarios, parece que necesitamos funcionalidad
  del lado del servidor. Pero podemos **usar [Disqus][disqus]** y no
  necesitaremos comentarios propios ni funcionalidad en el lado del servidor.

En el *layout* `post.html` incluiremos el código JavaScript universal de
  [Disqus][disqus], con un *if* para **evitar crear hilos de comentarios si
  ejecutamos el servidor de desarrollo** en local:

```
{%- raw -%}
<article lang="page.lang" itemprop="blogPost" itemscope="itemscope" itemtype="http://schema.org/BlogPosting">
  <header>
    <h1 itemprop="name headline">
      {{ page.title }}
    </h1>
  </header>
  <div itemprop="description postBody">
    <img src="{{ page.miniature }}" />
    {{ content }}
  </div>
</article>

{% if site.disqus and jekyll.environment == "production" %}
<div id="disqus_thread">
</div>
<script>
var disqus_config = function () {
  this.page.url = "{{ page.url | prepend: site.url }}";
  this.page.identifier = "{{ page.ref }}";
  this.page.title = "{{ page.title }}";
};
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://{{ site.disqus.shortname }}.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
</script>
<noscript>
  Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
</noscript>
{% endif %}
{% endraw %}
```

## Conclusión

Cuando no necesitamos nada más que un sitio web estático [Jekyll][jekyll] es
  de gran ayuda para no tener código duplicado en muchos documentos HTML.
  También acerca el uso de plantillas y markdown al desarrollo de webs
  estáticas. Y, con lo visto en este articulo, sera fácil además que el sitio
  web sea multi-idioma.

**Podremos escribir en múltiples idiomas sin necesidad de gemas**, estamos
  limitados a las [gemas que ofrece GitHub Pages][github-pages-gems] si no
  queremos usar nuestro propio servidor.

Espero que este articulo sea útil para ti. Si te ha gustado, compártelo en tus
  redes sociales, podría ser útil para alguien más.


  [github-pages]: https://pages.github.com/
  [github-pages-gems]: https://pages.github.com/versions/
  [jekyll]: https://jekyllrb.com/
  [jekyll-doc]: https://jekyllrb.com/docs/home/
  [disqus]: https://disqus.com/
