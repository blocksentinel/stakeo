<template>
  <div :class="cardClasses">
    <header v-if="title" class="card-header">
      <p class="card-header-title is-justify-content-center pb-0">
        {{ title }}
      </p>
    </header>
    <div class="card-content p-0 pb-3">
      <div class="content has-text-weight-semibold is-size-6 has-text-centered">
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
    type: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    cardClasses() {
      const classes = ['card']
      if (this.type !== '') {
        classes.push(this.type)
      }

      return classes
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.card {
  color: rgba(0, 0, 0, 0.7);

  &.is-secondary {
    background-color: $secondary;
  }

  &.is-transparent {
    box-shadow: none;
  }

  .card-header-title {
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
}
</style>
