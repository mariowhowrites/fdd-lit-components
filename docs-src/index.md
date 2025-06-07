---
layout: page.11ty.cjs
title: <psychopomp-dance> ⌲ Home
---

# &lt;psychopomp-dance>

`<psychopomp-dance>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<psychopomp-dance>` is just an HTML element. You can it anywhere you can use HTML!

```html
<psychopomp-dance></psychopomp-dance>
```

  </div>
  <div>

<psychopomp-dance></psychopomp-dance>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<psychopomp-dance>` can be configured with attributed in plain HTML.

```html
<psychopomp-dance name="HTML"></psychopomp-dance>
```

  </div>
  <div>

<psychopomp-dance name="HTML"></psychopomp-dance>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<psychopomp-dance>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;psychopomp-dance&gt;</h2>
    <psychopomp-dance .name=${name}></psychopomp-dance>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;psychopomp-dance&gt;</h2>
<psychopomp-dance name="lit-html"></psychopomp-dance>

  </div>
</section>
