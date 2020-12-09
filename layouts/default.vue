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
      getSwitcheoStatsTask: null,
      getExchangesTask: null,
    }
  },
  async fetch() {
    await this.$store.dispatch('calculator/getSwitcheoStats')
    await this.$store.dispatch('exchange/getExchanges')
  },
  head() {
    return {
      meta: [
        {
          hid: 'generator',
          name: 'generator',
          content: `${this.$config.appName} ${this.$config.appVersion}`,
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
