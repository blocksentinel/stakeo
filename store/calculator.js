export const state = () => ({
  feeEstimate: null,
  switcheoStats: null,
})

export const mutations = {
  setFeeEstimate(state, value) {
    state.feeEstimate = value
  },
  setSwitcheoStats(state, value) {
    state.switcheoStats = value
  },
}

export const actions = {
  async getFeeEstimate({ commit }, payload) {
    await this.$axios
      .get('/api/fee/estimate', {
        params: {
          ...payload,
        },
      })
      .then((response) => {
        commit('setFeeEstimate', response.data)
      })
      .catch((error) => {
        // let errors = null
        // if (
        //   error.response.status === 400 &&
        //   error.response.data.errors !== undefined
        // ) {
        //   errors = error.response.data.errors
        // }
        // commit(SET_CUSTOMER_UPDATE_STATUS, {
        //   status: false,
        //   id: null,
        //   errors,
        // })
        console.log(error)
      })
  },
  async getSwitcheoStats({ commit }, payload) {
    await this.$axios
      .get('/api/stats/switcheo', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit('setSwitcheoStats', response.data)
      })
      .catch((error) => {
        // let errors = null
        // if (
        //   error.response.status === 400 &&
        //   error.response.data.errors !== undefined
        // ) {
        //   errors = error.response.data.errors
        // }
        // commit(SET_CUSTOMER_UPDATE_STATUS, {
        //   status: false,
        //   id: null,
        //   errors,
        // })
        console.log(error)
      })
  },
}
