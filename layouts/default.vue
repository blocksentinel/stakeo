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
            href="https://switcheo.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Switcheo Tradescan
          </b-navbar-item>
          <b-navbar-dropdown label="Switcheo Ecosystem">
            <b-navbar-item
              href="https://switcheo.exchange/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Switcheo Exchange
            </b-navbar-item>
            <b-navbar-item
              href="https://zilswap.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              ZilSwap
            </b-navbar-item>
            <b-navbar-item
              href="https://dem.exchange/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Demex
            </b-navbar-item>
            <b-navbar-item
              href="https://switcheo.foundation/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Switcheo Foundation
            </b-navbar-item>
          </b-navbar-dropdown>
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
        >
      </p>
      <p>
        <small
          ><a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span>Price data provided by CoinGecko</span></a
          >
          &middot;
          <router-link :to="localePath({ name: 'disclaimer' })"
            >Disclaimer</router-link
          >
          &middot;
          <span class="is-muted is-size-7">v{{ version }}</span></small
        >
      </p>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      getSwitcheoStatsTask: null,
      getExchangesTask: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('calculator/getSwitcheoStats')
    await this.$store.dispatch('exchange/getExchanges')
  },
  computed: {
    version() {
      return this.$config.version
    },
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
