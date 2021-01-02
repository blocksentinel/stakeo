export const state = () => ({
  cexs: [],
  dexs: [],
  ders: [],
})

export const mutations = {
  setCex(state, value) {
    state.cexs = value
  },
  setDex(state, value) {
    state.dexs = value
  },
  setDer(state, value) {
    state.ders = value
  },
}

export const actions = {
  async getExchanges({ commit }, payload) {
    await this.$axios
      .get('/api/exchange/volume', {
        params: {
          currency: 'usd',
        },
      })
      .then((response) => {
        commit(
          'setCex',
          response.data.exchanges.filter(
            (exchange) => exchange.type === 'Centralized'
          )
        )
        commit(
          'setDex',
          response.data.exchanges.filter(
            (exchange) => exchange.type === 'Decentralized'
          )
        )
        commit(
          'setDer',
          response.data.exchanges.filter(
            (exchange) => exchange.type === 'Derivatives'
          )
        )
      })
      .catch((_) => {})
  },
}
