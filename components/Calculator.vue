<template>
  <div class="panel is-primary">
    <div class="panel-heading is-size-6">
      <span
        >{{ $t('calculator.heading') }}
        <b-tooltip
          :label="$t('calculator.headingTooltip')"
          type="is-secondary"
          size="is-large"
          multilined
          ><font-awesome-icon
            :icon="['fad', 'question-circle']"
            size="sm"
            class="ml-1" /></b-tooltip
      ></span>
      <b-switch
        v-model="advanced"
        type="is-secondary"
        size="is-small"
        class="is-pulled-right mr-0"
        left-label
        >{{ $t('calculator.advancedMode') }}</b-switch
      >
    </div>
    <div class="panel-block is-flex-direction-column">
      <b-field
        :label="$t('calculator.volumeControlLabel')"
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
            <b-field label="Volume Tuner" class="control">
              <b-numberinput
                v-model="volume"
                size="is-small"
                type="is-light"
                :exponential="1"
                :max="volumeMax"
                controls-alignment="right"
                controls-position="compact"
              />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Min. Volume" class="control">
              <b-numberinput
                v-model="volumeMin"
                size="is-small"
                type="is-light"
                :exponential="1"
                :max="volumeMax"
                controls-alignment="right"
                controls-position="compact"
              />
            </b-field>
          </div>
          <div class="column">
            <b-field label="Max Volume" class="control">
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
      <b-field
        :label="$t('calculator.feeControlLabel')"
        :message="feeMessage"
        class="control"
      >
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
    <div class="panel-block is-flex-direction-column">
      <b-field
        :label="$t('calculator.bondControlLabel')"
        class="control"
        :message="bondedMessage"
      >
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
      <div v-if="bondedOutOfSync" class="control has-text-centered">
        <b-button size="is-small" @click="syncBonded">Sync Bonded</b-button>
      </div>
    </div>
    <div class="panel-block">
      <b-field
        :label="$t('calculator.stakeControlLabel')"
        class="control"
        :message="stakeMessage"
      >
        <b-numberinput
          v-model="stake"
          type="is-secondary"
          :exponential="1"
          :step="1"
          :min="1"
          :max="stakeMax"
          expanded
          controls-alignment="right"
          controls-position="compact"
        />
      </b-field>
    </div>
    <div class="panel-block">
      <b-button type="is-primary" class="is-fullwidth" @click="getFeeEstimate">
        {{ $t('calculator.button') }}
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
  computed: {
    ...mapState('stats', {
      networkStats: 'networkStats',
    }),
    volume: {
      get() {
        return this.$store.state.calculator.volume
      },
      set(value) {
        this.$store.commit('calculator/setVolume', value)
      },
    },
    fee: {
      get() {
        return this.$store.state.calculator.fee
      },
      set(value) {
        this.$store.commit('calculator/setFee', value)
      },
    },
    bonded: {
      get() {
        return this.$store.state.calculator.bonded
      },
      set(value) {
        this.$store.commit('calculator/setBonded', value)
      },
    },
    bondedMax: {
      get() {
        return this.$store.state.calculator.bondedMax
      },
      set(value) {
        this.$store.commit('calculator/setBondedMax', value)
      },
    },
    stake: {
      get() {
        return this.$store.state.calculator.stake
      },
      set(value) {
        this.$store.commit('calculator/setStake', value)
      },
    },
    stakeMax: {
      get() {
        return this.$store.state.calculator.stakeMax
      },
      set(value) {
        this.$store.commit('calculator/setStakeMax', value)
      },
    },
    volumeStep: {
      get() {
        return this.$store.state.calculator.volumeStep
      },
      set(value) {
        this.$store.commit('calculator/setVolumeStep', value)
      },
    },
    volumeMin: {
      get() {
        return this.$store.state.calculator.volumeMin
      },
      set(value) {
        this.$store.commit('calculator/setVolumeMin', value)
      },
    },
    volumeMax: {
      get() {
        return this.$store.state.calculator.volumeMax
      },
      set(value) {
        this.$store.commit('calculator/setVolumeMax', value)
      },
    },
    volumeUpperMax: {
      get() {
        return this.$store.state.calculator.volumeUpperMax
      },
      set(value) {
        this.$store.commit('calculator/setVolumeUpperMax', value)
      },
    },
    feeStep: {
      get() {
        return this.$store.state.calculator.feeStep
      },
      set(value) {
        this.$store.commit('calculator/setFeeStep', value)
      },
    },
    feeTicks: {
      get() {
        return this.$store.state.calculator.feeTicks
      },
      set(value) {
        this.$store.commit('calculator/setFeeTicks', value)
      },
    },
    advanced: {
      get() {
        return this.$store.state.calculator.advanced
      },
      set(value) {
        this.$store.commit('calculator/setAdvanced', value)
      },
    },
    stakeValue() {
      return this.stake * this.networkStats.token.price
    },
    bondedValue() {
      return this.bonded * this.networkStats.token.price
    },
    bondedOutOfSync() {
      return this.bonded !== Math.ceil(this.networkStats.bondedSupply)
    },
    volumeMessage() {
      return this.$t('calculator.volumeMessage', {
        amount: this.$n(this.volume, 'volume'),
      })
    },
    feeMessage() {
      return this.$t('calculator.feeMessage', {
        amount: this.formatFee(this.fee),
      })
    },
    stakeMessage() {
      return this.$t('calculator.stakeMessage', {
        amount: this.$n(this.stake, 'crypto'),
        value: this.$n(this.stakeValue, 'currency'),
      })
    },
    bondedMessage() {
      return this.$t('calculator.bondMessage', {
        amount: this.$n(this.bonded, 'crypto'),
        value: this.$n(this.bondedValue, 'currency'),
      })
    },
  },
  mounted() {
    if (this.bonded <= 1) {
      this.bonded = Math.ceil(this.networkStats.bondedSupply)
    }
  },
  methods: {
    ...mapActions('calculator', {
      getFeeEstimate: 'getFeeEstimate',
    }),
    formatVolume(val) {
      if (val > 999999999999) {
        return this.$t('calculator.volumeCompactTrillion', {
          value: (val / 1000000000000).toFixed(1),
        })
      } else if (val > 999999999) {
        return this.$t('calculator.volumeCompactBillion', {
          value: (val / 1000000000).toFixed(1),
        })
      } else {
        return this.$t('calculator.volumeCompactMillion', {
          value: (val / 1000000).toFixed(1),
        })
      }
    },
    formatFee(val) {
      return `${val / 1000}%`
    },
    syncBonded() {
      this.bonded = Math.ceil(this.networkStats.bondedSupply)
    },
  },
}
</script>

<style scoped>
.arrow {
  vertical-align: text-bottom;
}
</style>
