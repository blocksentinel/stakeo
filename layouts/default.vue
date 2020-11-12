<template>
  <div>
    <header>
      <b-navbar type="is-primary" wrapper-class="container">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="localePath({ path: '/' })">
            <img src="../assets/logo-light.svg" alt="Stakeo" width="32" />
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item
            href="https://switcheo.exchange/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Switcheo
          </b-navbar-item>
          <b-navbar-item
            href="https://dem.exchange/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Demex
          </b-navbar-item>
        </template>
      </b-navbar>
    </header>
    <div class="container">
      <nuxt />
    </div>
    <footer class="footer has-text-centered">
      <p>
        Made for the Switcheo Community by
        <a
          href="https://blocksentinel.dev/"
          target="_blank"
          rel="noopener noreferer"
          >Block Sentinel</a
        >.<br />
        <small
          ><a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span>Price data provided by CoinGecko</span></a
          ></small
        >
      </p>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('calculator/getSwitcheoStats')
    await this.$store.dispatch('exchange/getExchanges')
  },
  data() {
    return {
      getSwitcheoStatsTask: null,
      getExchangesTask: null,
    }
  },
  mounted() {
    this.getSwitcheoStatsTask = setInterval(() => {
      this.getSwitcheoStats()
    }, 30000)
    this.getExchangesTask = setInterval(() => {
      this.getExchanges()
    }, 60000)
  },
  beforeDestroy() {
    if (this.getSwitcheoStatsTask !== null) {
      clearInterval(this.getSwitcheoStatsTask)
    }
    if (this.getExchangesTask !== null) {
      clearInterval(this.getExchangesTask)
    }
  },
  methods: {
    ...mapActions('calculator', {
      getSwitcheoStats: 'getSwitcheoStats',
    }),
    ...mapActions('exchange', {
      getExchanges: 'getExchanges',
    }),
  },
}
</script>
