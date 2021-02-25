import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'stakeo',
    paths: ['calculator'],
    storage: {
      getItem: (key) =>
        process.client
          ? Cookies.getJSON(key)
          : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: !isDev }),
      removeItem: (key) => Cookies.remove(key),
    },
    reducer: (state) => {
      return {
        calculator: {
          volume: state.calculator.volume,
          fee: state.calculator.fee,
          bonded: state.calculator.bonded,
          stake: state.calculator.stake,
          volumeMax: state.calculator.volumeMax,
          advanced: state.calculator.advanced,
        },
      }
    },
  })(store)
}
