<template>
  <div>
    <ExchangeList
      title="Decentralized"
      help-text="A decentralized exchange (DEX) is a cryptocurrency exchange which operates in a decentralized way, i.e., without a central authority. Decentralized exchanges allow peer-to-peer trading of cryptocurrencies."
      :exchanges="dexs"
      class="mb-4"
    />
    <ExchangeList
      title="Derivatives"
      help-text="Derivatives are tradable securities or contracts that derive their value from an underlying asset. In the case of cryptocurrency derivatives, the underlying asset is, in most cases, Bitcoin (BTC), or other top cryptocurrencies."
      :exchanges="ders"
      class="mb-4"
    />
    <ExchangeList
      title="Centralized"
      help-text="A centralized exchange (CEX) is a cryptocurrency exchange which operates more like a traditional bank, acting as custodian of your funds. Centralized exchanges generally follow know your customer (KYC) and Anti-Money Laundering (AML) regulations."
      :exchanges="cexs"
    />
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
