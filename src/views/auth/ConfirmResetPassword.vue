<template>
  <article class="confirm-reset-password">
    <header>
      <h1 class="title">Change your Password</h1>
      <h2 class="subtitle">Your password must have at least one symbol and 8 characters.</h2>
    </header>
    <form @submit.prevent="reset">
      <password-field v-model="password" />
      <floated-submit-button :disabled="isSubmitDisabled" />
    </form>
  </article>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import isValidPassword from '@/utils/isValidPassword';
import { Actions as AuthActions } from '@/store/auth';
import { Actions as CoreActions } from '@/store/core';
import PasswordField from '@/components/PasswordField.vue';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';

@Component({
  components: {
    PasswordField,
  },
})
export default class ConfirmResetPassword extends Vue {
  @Action(AuthActions.CONFIRM_PASSWORD_RESET)
  private confirmPasswordReset;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private password: string;

  private get isSubmitDisabled() {
    return !isValidPassword(this.password);
  }

  private reset() {
    const payload = {
      password: this.password,
      oobCode: this.$route.query.oobCode,
    };

    this.setLoading(true);

    this.confirmPasswordReset(payload).then(() => {
      this.setLoading(false);
      this.$router.push({ name: 'auth.sign-in' });
    });
  }
}
</script>
