<template>
  <div id="app">
    <CocoBanner :obj="config" />
  </div>
</template>

<script>
import { Component as CocoBanner } from '../packages/coco-global-banner';

export default {
  name: 'App',
  data() {
    return {
      component: 'div',
      config: {
        src: require('./banner.jpg'),
      },
    }
  },
  components: {
    CocoBanner,
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;

}
ul, ol {
  list-style: none;
}
</style>
