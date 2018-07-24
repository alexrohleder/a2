<template>
  <section class="sign-in">
    <header>
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item" @click="$router.back()">
              <arrow-left />
            </div>
          </div>
          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'auth.reset-password' }">
              Forgot your Password?
            </router-link>
          </div>
        </div>
      </nav>
      <h1 class="title">Enter</h1>
      <h2 class="subtitle">Using your already created account</h2>
    </header>
    <form @submit.prevent="signIn">
      <div class="field">
        <label class="label" for="email">Email Address</label>
        <div class="control">
          <input class="input" id="email" type="email" v-model="email">
        </div>
      </div>
      <password-field v-model="password" />
      <floated-submit-button :disabled="isSubmitDisabled" />
    </form>
  </section>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import isValidEmail from '@/utils/isValidEmail';
import ArrowLeft from '@/assets/arrow-left-solid.svg';
import { Actions as AuthActions } from '@/store/auth';
import { Actions as CoreActions } from '@/store/core';
import PasswordField from '@/components/PasswordField.vue';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';

@Component({
  components: {
    ArrowLeft,
    PasswordField,
    FloatedSubmitButton,
  },
})
export default class SignIn extends Vue {
  @Action(AuthActions.SIGN_IN_WITH_EMAIL_AND_PASSWORD)
  private signInWithEmailAndPassword;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private email: string = '';
  private password: string = '';

  private get isSubmitDisabled() {
    return !isValidEmail(this.email) || !this.password.length;
  }

  private signIn() {
    this.setLoading(true);

    this.signInWithEmailAndPassword(this.$data).then(() => {
      this.setLoading(false);
      this.$router.push({ name: 'dashboard.home' });
    });
  }
}
</script>
