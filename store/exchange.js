export const state = () => ({
  ecosystem: [],
  comparables: [],
})

export const mutations = {
  setEcosystem(state, value) {
    state.ecosystem = value
  },
  setComparables(state, value) {
    state.comparables = value
  },
}

export const actions = {
  async getExchanges({ commit }) {
    await this.$axios
      .get('/api/exchange/volume', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit(
          'setEcosystem',
          response.data.exchanges.filter(
            (exchange) => exchange.featured === true
          )
        )
        commit(
          'setComparables',
          response.data.exchanges.filter(
            (exchange) => exchange.featured !== true
          )
        )
      })
      .catch((_) => {})
  },
}
