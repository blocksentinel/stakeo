<template>
  <header>
    <b-navbar type="is-primary" wrapper-class="container">
      <template slot="brand">
        <b-navbar-item
          tag="router-link"
          :to="localePath({ name: 'staking-calculator' })"
        >
          <img src="../assets/logo-light.svg" :alt="$t('stakeo')" width="32" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item
          tag="router-link"
          :to="localePath({ name: 'staking-calculator' })"
          >{{ $t('nav.stakingCalculator') }}</b-navbar-item
        >
        <b-navbar-item
          href="https://dem.exchange/"
          target="_blank"
          rel="noopener"
        >
          {{ $t('vendor.demex') }}
        </b-navbar-item>
        <b-navbar-item
          href="https://zilswap.io/"
          target="_blank"
          rel="noopener"
        >
          {{ $t('vendor.zilSwap') }}
        </b-navbar-item>
        <b-navbar-dropdown :label="$t('nav.resources')">
          <b-navbar-item
            href="https://switcheo.org/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoTradescan') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://switcheo.network/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoLabs') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://switcheo.foundation/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoFoundation') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://nomics.com/exchanges/demex/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.nomics') }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>
