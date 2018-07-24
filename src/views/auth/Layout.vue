<template>
  <section class="auth-layout">
    <router-view name="content" />
  </section>
</template>

<style lang="sass">
@import '~bulma/sass/components/navbar'

.auth-layout
  background: linear-gradient(225deg, $primary, $primary-lighter)
  color: $primary-text
  &,
  & > section
    width: 100%
    min-height: 100%
  .navbar
    @extend .is-transparent
    margin: 0 -$size-7
    margin-bottom: $size-7
    &,
    .navbar-menu
      background: transparent
    .navbar-item
      cursor: pointer
      text-decoration: none
      font-weight: 600
      &,
      &:hover
        color: inherit
        background-color: inherit
  header
    margin-bottom: $size-3
  img,
  button
    margin-bottom: $size-7
  footer
    font-size: $size-7
  section
    padding: $size-7
  .title,
  .subtitle
    color: inherit
  .title
    font-size: $size-4
  .subtitle
    font-size: $size-6
  .label
    color: inherit
    font-weight: $weight-medium
    text-transform: uppercase
    font-size: $size-7
  .input
    color: $primary-text
    background-color: transparent
    border: none
    box-shadow: none
    border-radius: 0
    border-bottom: 1px solid rgba(255, 255, 255, .75)
    padding-left: 0
    padding-right: 0
    &:focus
      outline: none
      box-shadow: none
</style>
