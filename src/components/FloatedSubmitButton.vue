<template>
  <button class="button is-rounded is-white is-submit" type="submit">
    <chevron-right />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChevronRight from '@/assets/chevron-right-solid.svg';

@Component({
  components: {
    ChevronRight,
  },
})
export default class SubmitButton extends Vue {}
</script>

<style lang="sass">
.button.is-submit
  position: absolute
  bottom: $size-7
  right: $size-7
  height: auto
  padding: $size-7 $size-6
  color: $primary
  svg
    position: initial
    height: $size-7
</style>
