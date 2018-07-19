<template>
  <section class="auth-layout">
    <router-view name="content" />
  </section>
</template>

<style lang="sass">
.auth-layout
  background: linear-gradient(225deg, $primary, $primary-lighter)
  height: 100%
  color: $primary-text
</style>
