<template>
  <div class="control">
    <p>
      <strong>{{ name }}</strong>
      <br />
      {{ volume }}
    </p>
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
