<template>
  <section class="sign-up-third-step">
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
      <h1 class="title">What will be your password?</h1>
      <h2 class="subtitle">Your password needs to include at least one symbol and 8 characters.</h2>
    </header>
    <form @submit.prevent="signUp">
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
import isValidPassword from '@/utils/isValidPassword';
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
export default class SecondStep extends Vue {
  @Action(AuthActions.SIGN_UP_WITH_EMAIL_AND_PASSWORD)
  private signUpWithEmailAndPassword;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private name: string = '';
  private surname: string = '';
  private email: string = '';
  private wantsMarketing: boolean = false;
  private password: string = '';

  private created() {
    this.name = sessionStorage.getItem('auth.sign-up.name') as string;
    this.surname = sessionStorage.getItem('auth.sign-up.surname') as string;
    this.email = sessionStorage.getItem('auth.sign-up.email') as string;
    this.wantsMarketing = Boolean(sessionStorage.getItem('auth.sign-up.wantsMarketing') as string);
  }

  private get isSubmitDisabled() {
    return !this.name.length
      || !this.name.length
      || !isValidEmail(this.email)
      || !isValidPassword(this.password);
  }

  private signUp() {
    this.setLoading(true);

    this.signUpWithEmailAndPassword(this.$data).then(() => {
      this.setLoading(false);
      this.$router.push({ name: 'dashboard.home' });
    });
  }
}
</script>
