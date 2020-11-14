<template>
  <div class="columns">
    <div class="column is-4">
      <ExchangePanel
        title="Decentralized"
        tooltip="30 day volume for decentralized exchanges."
        :exchanges="dexs"
      />
    </div>
    <div class="column is-4">
      <ExchangePanel
        title="Derivatives"
        tooltip="30 day volume for derivatives exchanges."
        :exchanges="ders"
      />
    </div>
    <div class="column is-4">
      <ExchangePanel
        title="Centralized"
        tooltip="30 day volume for centralized exchanges."
        :exchanges="cexs"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ExchangePanel from '@/components/ExchangePanel'

export default {
  components: { ExchangePanel },
  computed: {
    ...mapState('exchange', {
      cexs: 'cexs',
      dexs: 'dexs',
      ders: 'ders',
    }),
  },
}
</script>
