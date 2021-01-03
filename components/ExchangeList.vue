<template>
  <div>
    <div :class="panelClasses">
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
              :icon="['fad', 'question-circle']"
              size="sm"
              class="ml-1" /></b-tooltip
        ></span>
        <small class="is-pulled-right">
          {{ $t('exchange.volume30DayLabel') }}
        </small>
      </div>
      <div class="panel-block p-0">
        <div class="columns is-marginless is-multiline is-flex-grow-1">
          <div
            v-for="exchange in exchanges"
            :key="exchange.slug"
            class="column is-one-third-desktop is-half-tablet py-2"
          >
            <div v-if="featured">
              <FeaturedExchangeListItem :exchange="exchange" />
            </div>
            <div v-else>
              <ExchangeListItem :exchange="exchange" />
            </div>
          </div>
        </div>
      </div>
      <div v-if="featured" class="panel-footer has-text-centered is-size-7">
        <span
          >Total Ecosystem Volume: <span>{{ totalVolume }}</span></span
        >
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
    featured: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    panelClasses() {
      return [
        'panel',
        { 'is-light': !this.featured },
        { 'is-secondary': this.featured },
      ]
    },
    totalVolume() {
      let volume = 0
      for (let i = 0; this.exchanges.length > i; i++) {
        volume += this.exchanges[i].volume
      }

      return this.$n(volume, 'volume')
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

.panel-footer {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.25;
  padding: 0.75em 1em;
}
</style>
