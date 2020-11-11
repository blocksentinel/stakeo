<template>
  <div>
    <section class="main-content columns">
      <div class="column is-10 is-offset-1">
        <nuxt />
      </div>
    </section>
    <footer class="footer has-text-centered">
      <p>
        Made by
        <a
          href="https://blocksentinel.dev/"
          target="_blank"
          rel="noopener noreferer"
          >Block Sentinel</a
        >
        for the Switcheo Community.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$store.dispatch('calculator/getSwitcheoStats')
    await this.$store.dispatch('calculator/getExchanges')
  },
}
</script>
