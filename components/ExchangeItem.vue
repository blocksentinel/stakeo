<template>
  <div class="control">
    <p>
      <strong>{{ name }}</strong>
      <small class="is-size-7 is-italic">{{ type }}</small>
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
    type() {
      return this.exchange.type
    },
    volume() {
      return this.$n(this.exchange.volume, 'volume')
    },
  },
}
</script>
