<template>
  <div>
    <ExchangeList
      :title="$t('exchange.ecosystemHeading')"
      :exchanges="ecosystem"
      class="mb-4"
      featured
    />
    <LatestNews />
    <ExchangeList
      :title="$t('exchange.comparablesHeading')"
      :exchanges="comparables"
      class="mb-4"
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
      ecosystem: 'ecosystem',
      comparables: 'comparables',
    }),
  },
}
</script>
