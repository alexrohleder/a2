<template>
  <div class="auth-layout">
    <transition :name="transitionName">
      <router-view name="content" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  private transitionName: string = 'slide-back';
  private previousRoutes: string[] = [];

  @Watch('$route')
  private beforeRouteUpdate(to: any, from: any) {
    if (this.previousRoutes.indexOf(to.fullPath) > -1) {
      this.transitionName = 'slide-back';
      this.previousRoutes.splice(this.previousRoutes.indexOf(to.fullPath), 1);
    } else {
      this.transitionName = 'slide-foward';
      this.previousRoutes.push(from.fullPath);
    }
  }
}
</script>

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
  .slide-foward-enter-active,
  .slide-foward-leave-active,
  .slide-back-enter-active,
  .slide-back-leave-active
    transition: all .25s ease
    position: absolute
    width: 100%
  .slide-back-enter,
  .slide-foward-leave-to
    transform: translate3d(-100%, 0, 0)
  .slide-foward-enter,
  .slide-back-leave-to
    transform: translate3d(100%, 0, 0)
  .slide-back-enter,
  .slide-foward-enter
    opacity: 1
  .slide-back-leave-to,
  .slide-foward-leave-to
    opacity: 0
</style>
