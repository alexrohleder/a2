<template>
  <section class="dashboard">
    <div class="navbar is-primary">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            Dashboard
          </div>
        </div>
        <div class="navbar-end">
          <a href="" class="navbar-item" @click.prevent="logout">
            Sign Out
          </a>
        </div>
      </div>
    </div>
    <p>
      Welcome
      {{isNewUser ? 'for the first time' : 'again'}}
      {{user.name}}!
    </p>
    <p v-if="isNewUser && !isLoggedInWithPassword">
      on your second authentication you will be redirected
      directly to this page.
    </p>
  </section>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import { Actions as AuthActions, Getters as AuthGetters } from '@/store/auth';

@Component
export default class Dashboard extends Vue {
  @Getter(AuthGetters.IS_NEW_USER)
  private readonly isNewUser;

  @Getter(AuthGetters.IS_LOGGED_IN_WITH_PASSWORD)
  private readonly isLoggedInWithPassword;

  @Getter(AuthGetters.USER)
  private readonly user;

  @Action(AuthActions.SIGN_OUT)
  private signOut;

  private logout() {
    this.signOut().then(() => {
      this.$router.push({
        name: 'auth.welcome',
      });
    });
  }
}
</script>

<style lang="sass" scoped>
p
  margin: $size-7
</style>
