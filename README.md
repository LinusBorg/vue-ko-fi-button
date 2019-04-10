# vue-ko-fi-button

> A Vue component to add the KoFi Button to your Vue apps.

## About

I'm not working for www.ko-fi.com or am in any other way affiliated with them except for using their service.

I created this component because I wanted to implement their [button widget](https://ko-fi.com/Manage/Widgets) into my Vue apps, but found it difficult to do so.

So I'm using their CSS with very little tweaks, and of course link to their images. I hope that's cool with them.

## Install

```bash
npm i -D vue-ko-fi-button
# or
yarn add -D vue-ko-fi-button
```

## ES5/ES6

* The package's main export is a .vue File containing ES5 code (IE-compatible).
* If you want to use the ES6-version directly, import from ''vue-ko-fi-button/es6/KoFiButton.vue'`

### In the browser

The package also comes with a UMD build if you really need to include it with a `<script>` element.

```html
<script src="https://unpkg.com/vue-ko-fi-button/umd/VueKoFiButton.umd.min.js"></script>
```

The component will be avaliable as `window.VueKoFiButton`.

## Usage

```html
<template>
  <KoFiButton 
    username="linusborg"
    color="#CCC"
    :title="Can I haz coffee plz?"
  />
</template>
<script>
import KoFiButton from 'vue-ko-fi-button'
export default {
  name: 'YourComponent',
  components: {
    KoFiButton
  }
}
```

## Development

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Boring details about this project's dev setup</summary>

### Setup

```bash
yarn install
```

### Compiles and hot-reloads for demo/development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Run unit tests

```bash
yarn test:unit
```

### Releae a new version

```bash

yarn relase
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

</details>

