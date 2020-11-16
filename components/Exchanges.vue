<template>
  <div class="panel is-light">
    <div class="panel-heading is-size-6">
      <span class="is-block is-truncated">30 Day Volume (USD)</span>
    </div>
    <ExchangeList title="Decentralized" :exchanges="dexs" />
    <ExchangeList title="Derivatives" :exchanges="ders" />
    <ExchangeList title="Centralized" :exchanges="cexs" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ExchangeList from '@/components/ExchangeList'

export default {
  components: { ExchangeList },
  computed: {
    ...mapState('exchange', {
      cexs: 'cexs',
      dexs: 'dexs',
      ders: 'ders',
    }),
  },
}
</script>
