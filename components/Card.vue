<template>
  <div class="card">
    <header v-if="title" class="card-header">
      <p class="card-header-title is-justify-content-center pb-0">
        {{ title }}
      </p>
    </header>
    <div class="card-content p-0 pb-3">
      <div class="content is-size-6 has-text-centered">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.card {
  color: rgba(0, 0, 0, 0.7);
  background-color: $secondary;

  .card-header-title {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
}
</style>
