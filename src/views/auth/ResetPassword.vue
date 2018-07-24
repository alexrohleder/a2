<template>
  <section class="reset-password">
    <header>
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item" @click="$router.back()">
              <arrow-left />
            </div>
          </div>
        </div>
      </nav>
      <h1 class="title">Forgot your Password?</h1>
      <h2 class="subtitle">Insert your email to find your account.</h2>
    </header>
    <template v-if="!linkSent">
      <form @submit.prevent="reset">
        <div class="field">
          <label class="label" for="email">Email Address</label>
          <div class="control">
            <input class="input" id="email" type="email" v-model="email">
          </div>
        </div>
        <floated-submit-button :disabled="isSubmitDisabled" />
      </form>
    </template>
    <template v-else>
      <p>One confirmation email was sent to <b>{{email}}</b>.</p>
      <p>Follow the instructions described on the email.</p>
    </template>
  </section>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import isValidEmail from '@/utils/isValidEmail';
import ArrowLeft from '@/assets/arrow-left-solid.svg';
import { Actions as AuthActions } from '@/store/auth';
import { Actions as CoreActions } from '@/store/core';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';

@Component({
  components: {
    ArrowLeft,
    FloatedSubmitButton,
  },
})
export default class ResetPassword extends Vue {
  @Action(AuthActions.SEND_PASSWORD_RESET_EMAIL)
  private sendPasswordResetEmail;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private email: string = '';
  private linkSent: boolean = false;

  private get isSubmitDisabled() {
    return !isValidEmail(this.email);
  }

  private reset() {
    this.setLoading(true);

    this.sendPasswordResetEmail(this.$data).then(() => {
      this.linkSent = true;
      this.setLoading(false);
    });
  }
}
</script>
