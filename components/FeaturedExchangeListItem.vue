<template>
  <div class="control">
    <div class="image-container mb-1">
      <b-image
        :src="logo"
        :alt="name"
        width="50"
        height="50"
        ratio="1by1"
        rounded
      />
    </div>
    <div class="has-text-centered is-truncated">
      <span class="has-text-weight-semibold">{{ name }}</span>
    </div>
    <div class="has-text-centered is-truncated">
      <span>{{ volume30D }}</span>
    </div>
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
    volume30D() {
      return this.$n(this.exchange.volume30D, 'volume')
    },
    volume24H() {
      return this.$n(this.exchange.volume24H, 'volume')
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

<style lang="scss" scoped>
.image-container {
  max-width: 3rem;
  margin: 0 auto;
}
</style>
