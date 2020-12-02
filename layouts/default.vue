<template>
  <div>
    <header>
      <b-navbar type="is-primary" wrapper-class="container">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="localePath({ path: '/' })">
            <img
              src="../assets/logo-light.svg"
              :alt="$t('stakeo')"
              width="32"
            />
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item
            href="https://switcheo.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ $t('vendor.switcheoTradescan') }}
          </b-navbar-item>
          <b-navbar-dropdown :label="$t('vendor.switcheoEcosystem')">
            <b-navbar-item
              href="https://switcheo.exchange/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ $t('vendor.switcheoExchange') }}
            </b-navbar-item>
            <b-navbar-item
              href="https://zilswap.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ $t('vendor.zilSwap') }}
            </b-navbar-item>
            <b-navbar-item
              href="https://dem.exchange/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ $t('vendor.demex') }}
            </b-navbar-item>
            <b-navbar-item
              href="https://switcheo.foundation/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {{ $t('vendor.switcheoFoundation') }}
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
        <i18n path="madeByStatement">
          <span slot="company">
            <a target="_blank" rel="noopener" href="https://blocksentinel.dev/">
              {{ $t('vendor.blockSentinel') }}
            </a>
          </span>
        </i18n>
      </p>
      <p>
        <small
          ><a
            href="https://www.coingecko.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span>{{ $t('priceStatement') }}</span></a
          >
          &middot;
          <a
            href="https://github.com/blocksentinel/stakeo/"
            target="_blank"
            rel="noopener noreferrer"
            ><span>{{ $t('vendor.gitHub') }}</span></a
          >
          &middot;
          <router-link :to="localePath({ name: 'disclaimer' })">
            {{ $t('disclaimer') }}
          </router-link></small
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
