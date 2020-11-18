<template>
  <section class="section">
    <div class="columns">
      <div class="column is-half-desktop">
        <Calculator />
        <FeeEstimate />
      </div>
      <div class="column is-half-desktop is-hidden-mobile">
        <Network />
        <Exchanges />
      </div>
    </div>
  </section>
</template>

<script>
import Network from '@/components/Network'
import Calculator from '~/components/Calculator'
import FeeEstimate from '~/components/FeeEstimate'
import Exchanges from '~/components/Exchanges'

export default {
  name: 'HomePage',
  components: { Network, Exchanges, FeeEstimate, Calculator },
}
</script>
