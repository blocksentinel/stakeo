<template>
  <div class="panel is-secondary">
    <div class="panel-heading">30 Day Volume</div>
    <div v-for="exchange in exchanges" :key="exchange.id" class="panel-block">
      <ExchangeItem :exchange="exchange" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ExchangeItem from '~/components/ExchangeItem'

export default {
  components: { ExchangeItem },
  computed: {
    ...mapState('calculator', {
      exchanges: 'exchanges',
    }),
  },
}
</script>
