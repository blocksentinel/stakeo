<template>
  <div>
    <app-header />
    <div class="container">
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  components: { AppFooter, AppHeader },
  data() {
    return {
      getNetworkStatsTask: null,
      getExchangesTask: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('stats/getNetworkStats')
    await this.$store.dispatch('exchange/getExchanges')
  },
  head() {
    const skipAnalytics = !this.$config.analytics.scriptSrc

    return {
      meta: [
        {
          hid: 'generator',
          name: 'generator',
          content: `${this.$config.appName} ${this.$config.appVersion}`,
        },
      ],
      script: [
        {
          src: this.$config.analytics.scriptSrc,
          'data-site': this.$config.analytics.siteId,
          'data-included-domains': this.$config.analytics.includedDomains,
          'data-spa': 'auto',
          once: true,
          skip: skipAnalytics,
          defer: true,
        },
      ],
    }
  },
  computed: {
    version() {
      return this.$config.version
    },
  },
  mounted() {
    this.getNetworkStatsTask = setInterval(() => {
      this.getNetworkStats()
    }, 30000)
    this.getExchangesTask = setInterval(() => {
      this.getExchanges()
    }, 60000)
  },
  beforeDestroy() {
    if (this.getNetworkStatsTask !== null) {
      clearInterval(this.getNetworkStatsTask)
    }
    if (this.getExchangesTask !== null) {
      clearInterval(this.getExchangesTask)
    }
  },
  methods: {
    ...mapActions('stats', {
      getNetworkStats: 'getNetworkStats',
    }),
    ...mapActions('exchange', {
      getExchanges: 'getExchanges',
    }),
  },
}
</script>
