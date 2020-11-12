<template>
  <div class="columns">
    <div class="column is-4">
      <ExchangePanel title="Decentralized" :exchanges="dexs" />
    </div>
    <div class="column is-4">
      <ExchangePanel title="Derivatives" :exchanges="ders" />
    </div>
    <div class="column is-4">
      <ExchangePanel title="Centralized" :exchanges="cexs" />
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
