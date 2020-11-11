<template>
  <div>
    <div v-if="feeEstimate" class="columns">
      <Card title="Daily">
        {{ daily }}
      </Card>
      <Card title="Weekly">
        {{ weekly }}
      </Card>
      <Card title="Monthly">
        {{ monthly }}
      </Card>
      <Card title="Yearly">
        {{ yearly }}
      </Card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '~/components/Card'

export default {
  components: { Card },
  computed: {
    ...mapState('calculator', {
      feeEstimate: 'feeEstimate',
    }),
    daily() {
      return this.$n(this.feeEstimate.daily, 'currency')
    },
    weekly() {
      return this.$n(this.feeEstimate.weekly, 'currency')
    },
    monthly() {
      return this.$n(this.feeEstimate.monthly, 'currency')
    },
    yearly() {
      return this.$n(this.feeEstimate.yearly, 'currency')
    },
  },
}
</script>
