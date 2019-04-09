# vue-ko-fi-button

> A Vue component to add the KoFi Button to your Vue apps.

## About

I'm not working for www.ko-fi.com or am in any other way affiliated with them except for using their service.

I created this component because I wanted to implement their [button widget](https://ko-fi.com/Manage/Widgets) into my Vue apps, but found it difficult to do so.

So I'm using their CSS with very little tweaks, and of course link to their images. I hope that's cool with them.

## Install

```bash
npm i -D @linusborg/vue-ko-fi-button
# or
yarn add -D @linusborg/vue-ko-fi-button
```

### USage in the browser

```html
<script src="https://unpkg.com/@linusborg/vue-ko-fi-button/umd/VueKoFiButton.umd.min.js"></script>
```

The component will be avaliable as `window.VueKoFiButon`.

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
import KoFiButton from '@linusborg/vue-ko-fi-button'
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

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn run serve
```

### Compiles and minifies for production

```bash
yarn run build
```

### Run your tests

```bash
yarn run test
```

### Lints and fixes files

```bash
yarn run lint
```

### Run your unit tests

```bash
yarn run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

</details>

