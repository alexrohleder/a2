<template>
  <div class="field">
    <label class="label" for="password">
      Password
      <span class="password-toggle" @click="showPassword = !showPassword" v-if="showToggle">
        {{ showPassword ? 'Ocultar' : 'Mostrar' }}
      </span>
    </label>
    <div class="control">
      <input
        class="input"
        id="password"
        :type="showPassword ? 'text' : 'password'"
        :value="password"
        v-bind="$attrs"
        v-on="listeners">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';

@Component({
  inheritAttrs: true,
})
export default class PasswordField extends Vue {
  @Model('input')
  private password: string;

  private showPassword: boolean = false;

  private get showToggle() {
    return /Edge|MSIE|Trident/.test(navigator.userAgent) === false;
  }

  private get listeners() {
    return {
      ...this.$listeners,
      input: (event: { target: { value: string } }) =>
        this.$emit('input', event.target.value),
    };
  }
}
</script>

<style lang="sass">
.password-toggle
  float: right
  cursor: pointer
  text-transform: none
</style>
