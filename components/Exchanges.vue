<template>
  <div>
    <ExchangeList
      :title="$t('exchange.decentralizedHeading')"
      :help-text="$t('exchange.decentralizedHeadingTooltip')"
      :exchanges="dexs"
      class="mb-4"
    />
    <ExchangeList
      :title="$t('exchange.derivativesHeading')"
      :help-text="$t('exchange.derivativesHeadingTooltip')"
      :exchanges="ders"
      class="mb-4"
    />
    <ExchangeList
      :title="$t('exchange.centralizedHeading')"
      :help-text="$t('exchange.centralizedHeadingTooltip')"
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
