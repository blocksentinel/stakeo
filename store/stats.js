export const state = () => ({
  networkStats: null,
})

export const mutations = {
  setNetworkStats(state, value) {
    state.networkStats = value
  },
}

export const actions = {
  async getNetworkStats({ commit }) {
    await this.$axios
      .get('/api/stats/network', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit('setNetworkStats', response.data)
      })
      .catch((_) => {})
  },
}
