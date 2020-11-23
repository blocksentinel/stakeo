<template>
  <div>
    <ExchangeList title="Decentralized" :exchanges="dexs" class="mb-4" />
    <ExchangeList title="Derivatives" :exchanges="ders" class="mb-4" />
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
