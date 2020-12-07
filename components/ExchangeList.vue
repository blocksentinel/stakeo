<template>
  <div>
    <div class="panel is-light">
      <div class="panel-heading is-size-6">
        <span
          >{{ title }}
          <b-tooltip
            v-if="helpText"
            :label="helpText"
            type="is-primary"
            size="is-large"
            position="is-right"
            multilined
            ><font-awesome-icon
              icon="question-circle"
              size="sm"
              class="ml-1" /></b-tooltip
        ></span>
        <small class="is-pulled-right">
          {{ $t('exchange.volume30DayLabel') }}
        </small>
      </div>
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
    helpText: {
      type: String,
      default: '',
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
