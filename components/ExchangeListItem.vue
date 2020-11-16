<template>
  <div class="control">
    <span class="is-block is-truncated is-italic">{{ name }}</span>
    <span class="is-block is-truncated">{{ volume }}</span>
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
  },
}
</script>
