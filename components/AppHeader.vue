<template>
  <header>
    <b-navbar type="is-primary" wrapper-class="container">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="localePath({ path: '/' })">
          <img src="../assets/logo-light.svg" :alt="$t('stakeo')" width="32" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-dropdown :label="$t('nav.resources')">
          <b-navbar-item
            href="https://switcheo.org/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoTradescan') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://switcheo.exchange/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoExchange') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://zilswap.io/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.zilSwap') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://dem.exchange/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.demex') }}
          </b-navbar-item>
          <b-navbar-item
            href="https://switcheo.foundation/"
            target="_blank"
            rel="noopener"
          >
            {{ $t('vendor.switcheoFoundation') }}
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>
    </b-navbar>
  </header>
</template>
