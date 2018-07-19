<template functional>
  <main class="mobile-main-content">
    <div>
      <slot />
    </div>
  </main>
</template>

<style lang="sass">
@import '~bulma/sass/utilities/initial-variables'
@import '~bulma/sass/utilities/derived-variables'
@import '~bulma/sass/utilities/mixins'

.mobile-main-content
  flex: 1
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  background-color: rgba(0, 0, 0, 0.05)
  background-image: repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px)
  background-size: 8px 8px
  > div
    width: 100%
    height: 100%
    background: white
    overflow-y: auto
    overflow-x: hidden
    position: relative
  +desktop
    > div
      width: 375px
      max-width: 60%
      min-height: auto
      max-height: 667px
      border-radius: 8px
      border: 1px solid #e8e8e8
      height: calc(100vh - 44px)
      box-shadow: 0 5px 13px 1px rgba(0, 0, 0, 0.09)
</style>
