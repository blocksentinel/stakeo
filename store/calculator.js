export const state = () => ({
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
  feeEstimate: null,
})

export const mutations = {
  setVolume(state, value) {
    state.volume = value
  },
  setFee(state, value) {
    state.fee = value
  },
  setBonded(state, value) {
    state.bonded = value
  },
  setBondedMax(state, value) {
    state.bondedMax = value
  },
  setStake(state, value) {
    state.stake = value
  },
  setStakeMax(state, value) {
    state.stakeMax = value
  },
  setVolumeStep(state, value) {
    state.volumeStep = value
  },
  setVolumeMin(state, value) {
    state.volumeMin = value
  },
  setVolumeMax(state, value) {
    state.volumeMax = value
  },
  setVolumeUpperMax(state, value) {
    state.volumeUpperMax = value
  },
  setFeeStep(state, value) {
    state.feeStep = value
  },
  setFeeTicks(state, value) {
    state.feeTicks = value
  },
  setAdvanced(state, value) {
    if (value) {
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

    state.advanced = value
  },
  setFeeEstimate(state, value) {
    state.feeEstimate = value
  },
}

export const actions = {
  async getFeeEstimate({ state, commit }) {
    await this.$axios
      .get('/api/calculator/stake/estimate', {
        params: {
          volume: state.volume,
          fee: state.fee,
          bonded: state.bonded,
          stake: state.stake,
        },
      })
      .then((response) => {
        commit('setFeeEstimate', response.data)
      })
      .catch((_) => {})
  },
}
