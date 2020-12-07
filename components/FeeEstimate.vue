<template>
  <div>
    <div v-if="feeEstimate">
      <div class="columns is-multiline is-mobile">
        <div
          class="column is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <Card :title="$t('estimate.daily')" type="is-secondary">
            {{ daily }}
          </Card>
        </div>
        <div
          class="column is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <Card :title="$t('estimate.weekly')" type="is-secondary">
            {{ weekly }}
          </Card>
        </div>
        <div
          class="column is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <Card :title="$t('estimate.monthly')" type="is-secondary">
            {{ monthly }}
          </Card>
        </div>
        <div
          class="column is-half-mobile is-half-tablet is-one-quarter-desktop"
        >
          <Card :title="$t('estimate.yearly')" type="is-secondary">
            {{ yearly }}
          </Card>
        </div>
      </div>
      <hr />
      <h4 class="has-text-weight-semibold mb-2">
        {{ $t('estimate.potentialPriceHeading') }}
        <b-tooltip
          :label="$t('estimate.potentialPriceHeadingTooltip')"
          type="is-primary"
          size="is-large"
          multilined
          ><font-awesome-icon icon="question-circle" size="sm" class="ml-1"
        /></b-tooltip>
      </h4>
      <div class="columns is-multiline is-mobile mb-0">
        <div
          v-for="item in tokenPrices"
          :key="item.percent"
          class="column is-one-third-mobile has-text-centered"
        >
          <Card :title="`${item.percent}%`" type="is-transparent">
            {{ $n(item.price, 'currencyToken') }}
          </Card>
        </div>
      </div>
      <div class="has-text-centered is-muted">
        <small class="is-size-7"
          >{{ $t('estimate.rateMessage') }}
          <router-link :to="localePath({ name: 'disclaimer' })">
            {{ $t('disclaimer') }}
          </router-link></small
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '~/components/Card'

export default {
  components: { Card },
  computed: {
    ...mapState('calculator', {
      feeEstimate: 'feeEstimate',
    }),
    daily() {
      return this.$n(this.feeEstimate.daily, 'currency')
    },
    weekly() {
      return this.$n(this.feeEstimate.weekly, 'currency')
    },
    monthly() {
      return this.$n(this.feeEstimate.monthly, 'currency')
    },
    yearly() {
      return this.$n(this.feeEstimate.yearly, 'currency')
    },
    tokenPrices() {
      return this.feeEstimate.tokenPrices
    },
  },
}
</script>
