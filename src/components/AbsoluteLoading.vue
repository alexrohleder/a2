<template functional>
  <transition>
    <div class="absolute-loading" v-if="props.display">
      <slot>
        loading
      </slot>
    </div>
  </transition>
</template>

<style lang="sass">
.absolute-loading
  width: 100%
  height: 100%
  z-index: 999
  display: flex
  position: absolute
  align-items: center
  justify-content: center
  background: white
  & > *
    animation-duration: 1s
    animation-fill-mode: both
    animation-iteration-count: infinite
    animation-name: pulse

@keyframes pulse
  from
    transform: scale3d(1, 1, 1)
  50%
    transform: scale3d(1.1, 1.1, 1.1)
  to
    transform: scale3d(1, 1, 1)
</style>

<style lang="sass" scoped>
.v-enter-active,
.v-leave-active
  transition: opacity 0.5s
.v-enter,
.v-leave-to
  opacity: 0
</style>
