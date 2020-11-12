<template>
  <section class="section">
    <b-message
      aria-close-label="Close message"
      title="Notice"
      type="is-warning"
    >
      This tool is in beta, it may break unexpectedly and/or report incorrect
      numbers at times. No warranty, not financial advice.
    </b-message>
    <div class="columns">
      <div class="column is-6">
        <Calculator />
        <FeeEstimate />
      </div>
      <div class="column is-6">
        <Exchanges />
      </div>
    </div>
  </section>
</template>

<script>
import Calculator from '~/components/Calculator'
import FeeEstimate from '~/components/FeeEstimate'
import Exchanges from '~/components/Exchanges'

export default {
  name: 'HomePage',
  components: { Exchanges, FeeEstimate, Calculator },
}
</script>
