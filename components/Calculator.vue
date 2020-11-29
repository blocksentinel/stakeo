<template>
  <div class="panel is-primary">
    <div class="panel-heading is-size-6">
      <span
        >Staking Calculator
        <b-tooltip
          label="Calculate your staking returns based on projected Switcheo TradeHub volume. Block subsidies are currently not included in the calculation."
          type="is-secondary"
          size="is-large"
          multilined
          ><font-awesome-icon
            icon="question-circle"
            size="sm"
            class="ml-1" /></b-tooltip
      ></span>
      <b-switch
        v-model="advanced"
        type="is-secondary"
        size="is-small"
        class="is-pulled-right mr-0"
        left-label
        >Moon Mode</b-switch
      >
    </div>
    <div class="panel-block is-flex-direction-column">
      <b-field
        label="TradeHub Volume (USD)"
        :message="volumeMessage"
        class="control"
      >
        <b-slider
          v-model="volume"
          :custom-formatter="formatVolume"
          :step="volumeStep"
          :min="volumeMin"
          :max="volumeMax"
          type="is-secondary"
          tooltip-type="is-primary"
        />
      </b-field>
      <div v-if="advanced" class="control">
        <div class="columns">
          <div class="column">
            <b-field label="Volume Cap" class="control">
              <b-numberinput
                v-model="volumeMax"
                size="is-small"
                type="is-light"
                :exponential="1"
                :min="volumeMin"
                :max="volumeUpperMax"
                controls-alignment="right"
                controls-position="compact"
              />
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <div class="panel-block">
      <b-field label="Trading Fees" :message="feeMessage" class="control">
        <b-slider
          v-model="fee"
          :custom-formatter="formatFee"
          :ticks="feeTicks"
          :min="75"
          :max="200"
          :step="feeStep"
          type="is-secondary"
          tooltip-type="is-primary"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-field label="Bonded" class="control" :message="bondedMessage">
        <b-numberinput
          v-model="bonded"
          type="is-secondary"
          :exponential="1"
          :min="1"
          :max="bondedMax"
          expanded
          controls-alignment="right"
          controls-position="compact"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-field label="Stake" class="control" :message="stakeMessage">
        <b-numberinput
          v-model="stake"
          type="is-secondary"
          :exponential="1"
          :step="1000"
          :min="1000"
          :max="stakeMax"
          expanded
          controls-alignment="right"
          controls-position="compact"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-button type="is-primary" class="is-fullwidth" @click="calculate">
        Calculate
        <img
          src="../assets/switcheo-arrow-icon-light.svg"
          width="20"
          height="20"
          class="ml-1 arrow"
        />
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      volume: 30,
      fee: 150,
      bonded: 1,
      bondedMax: 2160000000,
      stake: 100000,
      stakeMax: 2160000000,
      volumeStep: 1,
      volumeMin: 1,
      volumeMax: 500,
      volumeUpperMax: 500000,
      feeStep: 5,
      feeTicks: true,
      advanced: false,
    }
  },
  computed: {
    ...mapState('calculator', {
      switcheoStats: 'switcheoStats',
    }),
    stakeValue() {
      return this.stake * this.switcheoStats.price
    },
    bondValue() {
      return this.bonded * this.switcheoStats.price
    },
    volumeMessage() {
      return `Monthly volume of ${this.$n(this.volume * 1000000, 'volume')}`
    },
    feeMessage() {
      return `Average fee of ${this.formatFee(this.fee)}`
    },
    stakeMessage() {
      return `Your total Switcheo stake is ${this.$n(
        this.stake,
        'crypto'
      )} (${this.$n(this.stakeValue, 'currency')})`
    },
    bondedMessage() {
      return `Total bonded Switcheo is ${this.$n(
        this.bonded,
        'crypto'
      )} (${this.$n(this.bondValue, 'currency')})`
    },
  },
  watch: {
    advanced(newValue, oldValue) {
      if (newValue) {
        this.volumeStep = 1
        this.volumeMin = 500
        this.volumeMax = 5000
        this.feeStep = 1
        this.feeTicks = false
      } else {
        this.volumeStep = 1
        this.volumeMin = 1
        this.volumeMax = 500
        this.feeStep = 5
        this.feeTicks = true
      }
    },
  },
  mounted() {
    if (this.bonded <= 1) {
      this.bonded = Math.ceil(this.switcheoStats.bondedSupply)
    }
  },
  methods: {
    ...mapActions('calculator', {
      getFeeEstimate: 'getFeeEstimate',
    }),
    async calculate() {
      await this.getFeeEstimate({
        volume: this.volume,
        fee: this.fee,
        bonded: this.bonded,
        stake: this.stake,
      })
    },
    formatVolume(val) {
      if (val > 999) {
        return `${val / 1000} billion`
      }

      return `${val} million`
    },
    formatFee(val) {
      return `${val / 1000}%`
    },
  },
}
</script>

<style scoped>
.arrow {
  vertical-align: text-bottom;
}
</style>
