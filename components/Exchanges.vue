<template>
  <div>
    <ExchangeItem
      v-for="exchange in exchanges"
      :key="exchange.id"
      :exchange="exchange"
    />
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
