<template>
  <section class="main-content columns">
    <div class="column is-8 is-offset-2">
      <nuxt />
    </div>
  </section>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('calculator/getSwitcheoStats')
    await this.$store.dispatch('calculator/getExchanges')
  },
}
</script>
