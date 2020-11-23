<template>
  <div>
    <div class="panel is-light">
      <p class="panel-heading is-size-6">
        {{ title }} <small class="is-pulled-right">30 Day Volume (USD)</small>
      </p>
      <div class="panel-block p-0">
        <div class="columns is-marginless is-multiline">
          <div
            v-for="exchange in exchanges"
            :key="exchange.id"
            class="column is-one-third-desktop is-half-tablet py-2"
          >
            <ExchangeListItem :exchange="exchange" />
          </div>
        </div>
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

<style lang="scss" scoped>
@import 'assets/scss/variables';

.panel-block {
  border-bottom: none !important;
}

.panel-heading > small {
  font-weight: $weight-light;
}
</style>
