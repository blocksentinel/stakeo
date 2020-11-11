<template>
  <div>
    <div class="box mb-3">
      <div class="content">
        <p>
          <strong>{{ name }}</strong>
          <br />
          {{ volume }}
        </p>
        <p class="mb-0 is-size-7 has-text-centered">
          <small>{{ type }}</small>
        </p>
      </div>
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
    type() {
      return this.exchange.type
    },
    volume() {
      return this.$n(this.exchange.volume, 'currency')
    },
  },
}
</script>
