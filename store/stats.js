export const state = () => ({
  networkStats: null,
})

export const mutations = {
  setNetworkStats(state, value) {
    state.networkStats = value
  },
}

export const actions = {
  async getNetworkStats({ commit }, payload) {
    await this.$axios
      .get('/api/stats/network', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit('setNetworkStats', response.data)
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
