export const state = () => ({
  feeEstimate: null,
  switcheoStats: null,
  exchanges: [],
})

export const mutations = {
  setFeeEstimate(state, value) {
    state.feeEstimate = value
  },
  setSwitcheoStats(state, value) {
    state.switcheoStats = value
  },
  setExchanges(state, value) {
    state.exchanges = value
  },
}

export const actions = {
  async getFeeEstimate({ commit }, payload) {
    await this.$axios
      .get(`https://api.stakeo.com/api/fee/estimate`, {
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
      .get(`https://api.stakeo.com/api/stats/switcheo`, {
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
  async getExchanges({ commit }, payload) {
    await this.$axios
      .get(`https://api.stakeo.com/api/exchange/volume`, {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit('setExchanges', response.data.exchanges)
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
