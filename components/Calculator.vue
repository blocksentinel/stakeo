<template>
  <div class="panel is-primary">
    <p class="panel-heading is-size-6">
      Staking Calculator
      <b-switch
        v-model="advanced"
        type="is-secondary"
        size="is-small"
        class="is-pulled-right mr-0"
        >{{ advanced ? 'Advanced' : 'Basic' }}</b-switch
      >
    </p>
    <div class="panel-block">
      <b-field
        label="TradeHub Volume (USD)"
        :message="volumeMessage"
        class="control"
      >
        <b-slider
          v-model="volume"
          :custom-formatter="formatVolume"
          :min="1"
          :max="volumeMax"
        />
      </b-field>
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
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-field label="Bonded" class="control" :message="bondedMessage">
        <b-numberinput
          v-model="bonded"
          :exponential="1"
          :min="1"
          :max="bondedMax"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-field label="Stake" class="control" :message="stakeMessage">
        <b-numberinput
          v-model="stake"
          :exponential="1"
          :step="1000"
          :min="1000"
          :max="stakeMax"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-button type="is-primary" class="is-fullwidth" @click="calculate"
        >Calculate</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      volume: 5,
      fee: 150,
      bonded: 1,
      bondedMax: 2160000000,
      stake: 100000,
      stakeMax: 2160000000,
      volumeMax: 100,
      feeStep: 5,
      feeTicks: true,
      advanced: false,
    }
  },
  computed: {
    ...mapState('calculator', {
      switcheoStats: 'switcheoStats',
    }),
    volumeMessage() {
      return `Monthly volume of ${this.$n(this.volume * 1000000, 'volume')}`
    },
    feeMessage() {
      return `Average fee of ${this.formatFee(this.fee)}`
    },
    stakeMessage() {
      return `Your total Switcheo stake is ${this.$n(this.stake, 'crypto')}`
    },
    bondedMessage() {
      return `Total bonded Switcheo is ${this.$n(this.bonded, 'crypto')}`
    },
  },
  watch: {
    advanced(newValue, oldValue) {
      if (newValue) {
        this.volumeMax = 500000
        this.feeStep = 1
        this.feeTicks = false
      } else {
        this.volumeMax = 100
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
