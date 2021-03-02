<template>
  <a :href="obj.link">
    <img
      class="global-banner"
      :src="obj.src"
      alt="图片"
    />
  </a>
</template>

<script>
export default {
  name: 'banner',
  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style>
.global-banner {
  width: 100%;
}
</style>