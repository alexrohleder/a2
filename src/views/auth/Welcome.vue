<template>
  <section class="welcome">
    <header>
      <nav class="navbar">
        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'auth.sign-in' }">
              Sign In
            </router-link>
          </div>
        </div>
      </nav>
      <logo />
      <h1 class="title">Welcome to a Company.</h1>
    </header>
    <main>
      <button class="button is-white is-rounded is-brand" @click="signInWithFacebook">
        <facebook />
        Continue with Facebook
      </button>
      <button class="button is-white is-rounded is-brand" @click="signInWithGoogle" v-if="showMoreOptions">
        <google />
        Continue with Google
      </button>
      <button class="button is-white is-rounded is-outlined" @click="goToSignUp">
        Create a new Account
      </button>
      <button class="button is-text" @click="showMoreOptions = !showMoreOptions">
        {{showMoreOptions ? 'Less' : 'More'}} Options
      </button>
    </main>
    <footer>
      <p>
        Pressing Continue or create a new Account, I accept
        the <a href="">Terms of Service</a>,
        the <a href="">Terms of Service Payment</a>,
        the <a href="">Privacy Policy</a> and
        the <a href="">Policy of no discrimination</a> of a Company.
      </p>
    </footer>
  </section>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Logo.vue';
import Google from '@/assets/google-brands.svg';
import { Actions as CoreActions } from '@/store/core';
import Facebook from '@/assets/facebook-f-brands.svg';
import { Actions as AuthActions, Getters as AuthGetters } from '@/store/auth';

@Component({
  components: {
    Logo,
    Google,
    Facebook,
  },
})
export default class Welcome extends Vue {
  @Getter(AuthGetters.IS_NEW_USER)
  private readonly isNewUser;

  @Action(AuthActions.SIGN_IN_WITH_FACEBOOK)
  private signInWithFacebookProvider;

  @Action(AuthActions.SIGN_IN_WITH_GOOGLE)
  private signInWithGoogleProvider;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private showMoreOptions: boolean = false;

  private signInWithFacebook() {
    this.signInWithProvider(
      this.signInWithFacebookProvider(),
    );
  }

  private signInWithGoogle() {
    this.signInWithProvider(
      this.signInWithGoogleProvider(),
    );
  }

  private signInWithProvider(action: Promise<any>) {
    this.setLoading(true);

    action.then(() => {
      this.setLoading(false);

      const name = this.isNewUser
        ? 'auth.confirm-profile'
        : (this.$route.query.redirectTo || 'dashboard.home');

      this.$router.push({
        name,
      });
    });
  }

  private goToSignUp() {
    this.$router.push({
      name: 'auth.sign-up',
    });
  }
}
</script>

<style lang="sass">
.welcome
  .logo
    margin-bottom: $size-7
  .title
    font-weight: $weight-normal
  .button
    width: 100%
    &.is-text
      color: $white
      text-decoration: none
      padding-left: 0
      justify-content: left
      &:hover,
      &:focus,
      &:active
        outline: none
        box-shadow: none
        background-color: transparent
    &.is-brand
      font-weight: $weight-medium
      color: $primary
</style>
