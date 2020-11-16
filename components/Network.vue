<template>
  <div class="panel is-secondary">
    <div class="panel-heading is-size-6">
      <span class="is-block is-truncated">TradeHub Stats</span>
    </div>
    <div class="panel-block">
      <div class="columns has-text-centered control">
        <div class="column is-one-third">
          <strong class="is-block">SWTH Price</strong>
          <span class="is-block"
            >{{ price }}
            <span :class="changeClasses">{{ change24H }}</span></span
          >
        </div>
        <div class="column is-one-third">
          <strong class="is-block">Bonded</strong>
          <span class="is-block">{{ bondedSupply }}</span>
          <span class="is-block">of</span>
          <span class="is-block">{{ totalSupply }}</span>
        </div>
        <div class="column is-one-third">
          <strong class="is-block">24 Hour Volume</strong>
          <span class="is-block">{{ vol24H }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('calculator', {
      switcheoStats: 'switcheoStats',
    }),
    price() {
      return this.$n(this.switcheoStats.price, 'currencyToken')
    },
    bondedSupply() {
      return this.$n(this.switcheoStats.bondedSupply, 'crypto')
    },
    totalSupply() {
      return this.$n(this.switcheoStats.totalSupply, 'crypto')
    },
    bondedPercent() {
      return this.$n(this.switcheoStats.bondedPercent, 'percent')
    },
    change24H() {
      const change = this.switcheoStats.change24H
      if (change >= 0) {
        return `+${this.$n(this.switcheoStats.change24H, 'percent')}%`
      }

      return `-${this.$n(this.switcheoStats.change24H, 'percent')}%`
    },
    changeClasses() {
      const change = this.switcheoStats.change24H
      if (change >= 0) {
        return ['change', 'change-positive']
      }

      return ['change', 'change-negative']
    },
    vol24H() {
      return this.$n(this.switcheoStats.vol24H, 'volume')
    },
  },
}
</script>

<style scoped>
.change.change-positive {
  color: #338f2b;
}
.change.change-negative {
  color: #8e2a2c;
}
</style>
