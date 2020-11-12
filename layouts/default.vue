<template>
  <div>
    <section class="main-content columns">
      <div class="column is-8 is-offset-2">
        <nuxt />
      </div>
    </section>
    <footer class="footer has-text-centered">
      <p>
        Made by
        <a
          href="https://blocksentinel.dev/"
          target="_blank"
          rel="noopener noreferer"
          >Block Sentinel</a
        >
        for the Switcheo Community.<br />
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
    await this.$store.dispatch('calculator/getExchanges')
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
      getExchanges: 'getExchanges',
    }),
  },
}
</script>
