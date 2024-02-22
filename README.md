# VueTxtAnime

It is a vue component, which contains many beautiful and free text effects

# Reference and Thanks

[TxtAnime.js](https://github.com/mohamedfrindi/TxtAnime.js)

# Installation

With NPM:

```bash
npm install vue-txt-anime
```

With PNPM:

```bash
pnpm install vue-txt-anime
```

With Yarn:

```bash
yarn add vue-txt-anime
```

# Usage

## Global installation

main.js

```js
import VueTxtAnime from 'vue-txt-anime'

createApp(App).use(VueTxtAnime).mount('#app')
```

## example

```vue
<script setup>
const options = {
  effect: 'txt-an-1',
}
</script>

<template>
  <VueTxtAnime :options="options" />
</template>
```

# Options

```ts
interface TxtAnimeOptions {
  /**
   * @default 'txt-an-1'
   */
  effect?: 'txt-an-1' | 'txt-an-2' | 'txt-an-3' | 'txt-an-4' | 'txt-an-5' | 'txt-an-6' | 'txt-an-7' | 'txt-an-8' | 'txt-an-9'
  /**
   * @default 0
   */
  delayStart?: number
  /**
   * @default 0.07
   */
  delay?: number
  /**
   * @default 0.7
   */
  duration?: number
  /**
   * @default true
   */
  repeat?: boolean
  /**
   * @default 2
   */
  repeatDelay?: number
  /**
   * @default false
   */
  out?: number | boolean
  text?: any[]
  overlayBackground?: string
}
```
