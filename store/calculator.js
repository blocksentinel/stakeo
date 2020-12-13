export const state = () => ({
  feeEstimate: null,
})

export const mutations = {
  setFeeEstimate(state, value) {
    state.feeEstimate = value
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
}
