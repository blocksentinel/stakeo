<template>
  <footer class="footer has-text-centered">
    <p>
      <i18n path="madeByStatement">
        <span slot="company">
          <a target="_blank" rel="noopener" href="https://blocksentinel.dev/">
            {{ $t('vendor.blockSentinel') }}
          </a>
        </span>
      </i18n>
    </p>
    <p>
      <small
        ><a
          href="https://www.coingecko.com/"
          target="_blank"
          rel="noopener noreferrer"
          ><span>{{ $t('priceStatement') }}</span></a
        >
        &middot;
        <a
          href="https://github.com/blocksentinel/stakeo/"
          target="_blank"
          rel="noopener noreferrer"
          ><span>{{ $t('vendor.gitHub') }}</span></a
        >
        &middot;
        <router-link :to="localePath({ name: 'disclaimer' })">
          {{ $t('disclaimer') }}
        </router-link></small
      >
    </p>
  </footer>
</template>
