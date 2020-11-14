<template>
  <div class="panel is-light">
    <div class="panel-heading is-size-6">
      <b-tooltip
        :label="tooltip"
        type="is-secondary"
        size="is-small"
        multilined
      >
        <span class="is-block is-truncated">{{ title }}</span>
      </b-tooltip>
    </div>
    <div v-for="exchange in exchanges" :key="exchange.id" class="panel-block">
      <ExchangeItem :exchange="exchange" />
    </div>
  </div>
</template>

<script>
import ExchangeItem from '@/components/ExchangeItem'

export default {
  components: { ExchangeItem },
  props: {
    title: {
      type: String,
      required: true,
    },
    tooltip: {
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
