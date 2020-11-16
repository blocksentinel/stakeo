<template>
  <div class="panel-block is-flex-direction-column">
    <div class="control mb-2">
      <strong class="is-size-7">{{ title }}</strong>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="exchange in exchanges"
        :key="exchange.id"
        class="column is-one-third-desktop is-half-tablet py-2"
      >
        <ExchangeListItem :exchange="exchange" />
      </div>
    </div>
  </div>
</template>

<script>
import ExchangeListItem from '@/components/ExchangeListItem'

export default {
  components: { ExchangeListItem },
  props: {
    title: {
      type: String,
      required: true,
    },
    exchanges: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.panel-block {
  border-bottom: none !important;
}
</style>
