<template>
  <div class="control">
    <div class="mb-1 is-truncated">
      <img :src="logo" class="logo mr-1" width="20" height="20" :alt="name" />
      <span class="is-italic">{{ name }}</span>
    </div>
    <div class="is-truncated">{{ volume }}</div>
  </div>
</template>

<script>
export default {
  props: {
    exchange: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name() {
      return this.exchange.name
    },
    volume() {
      return this.$n(this.exchange.volume, 'volume')
    },
    logo() {
      if (this.exchange.imageUrl) {
        return this.exchange.imageUrl
      }

      return require('@/assets/logo-light.svg')
    },
  },
}
</script>

<style scoped>
.logo {
  vertical-align: text-bottom;
}
</style>
