<template>
  <div class="level is-mobile">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ $t('network.priceHeading') }}</p>
        <p class="title is-size-6 is-size-5-tablet">
          {{ price }}
          <small :class="changeClasses"
            >{{ change24H }}
            <span v-if="showRocket"
              ><font-awesome-icon
                :icon="['fad', 'rocket-launch']"
                size="sm" /></span
          ></small>
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered is-hidden-mobile">
      <div>
        <p class="heading">{{ $t('network.bondHeading') }}</p>
        <p class="title is-size-6 is-size-5-tablet">
          {{ supply }}
        </p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ $t('network.volume24Hour') }}</p>
        <p class="title is-size-6 is-size-5-tablet">
          {{ vol24H }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('stats', {
      networkStats: 'networkStats',
    }),
    price() {
      return this.$n(this.networkStats.price, 'currencyToken')
    },
    supply() {
      return (
        this.$n(this.networkStats.bondedSupply, 'compact') +
        ' / ' +
        this.$n(this.networkStats.totalSupply, 'compact')
      )
    },
    change24H() {
      const change = this.networkStats.change24H
      if (change >= 0) {
        return `+${this.$n(this.networkStats.change24H, 'percent')}%`
      }

      return `${this.$n(this.networkStats.change24H, 'percent')}%`
    },
    changeClasses() {
      const change = this.networkStats.change24H
      if (change >= 0) {
        return ['change', 'change-positive']
      }

      return ['change', 'change-negative']
    },
    showRocket() {
      return this.networkStats.change24H >= 10
    },
    vol24H() {
      return this.$n(this.networkStats.vol24H, 'volume')
    },
    activeProposalCount() {
      return this.networkStats.activeProposalCount
    },
    proposalMessage() {
      return this.$t('network.proposalMessage', {
        vote: `<a href="https://switcheo.org/governance?net=main" target="_blank" rel="noopener">${this.$t(
          'network.vote'
        )}</a>`,
      })
    },
  },
  watch: {
    activeProposalCount: {
      handler(value) {
        if (!process.client) {
          return
        }

        if (value < 1) {
          return
        }

        this.$buefy.toast.open({
          duration: 5000,
          message: this.proposalMessage,
          type: 'is-secondary',
          position: 'is-bottom',
        })
      },
      immediate: true,
    },
  },
}
</script>

<style>
.change.change-positive {
  color: #338f2b;
}

.change.change-negative {
  color: #8e2a2c;
}

.notices .toast {
  border-radius: 0;
}
</style>
