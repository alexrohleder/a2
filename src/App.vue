<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import { Actions as AuthActions } from '@/store/auth';

@Component
export default class App extends Vue {
  @Action(AuthActions.LOAD_USER_PROFILE)
  private loadUserProfile;

  private created() {
    firebase.auth().onAuthStateChanged(async (authState) => {
      if (authState !== null) {
        await this.loadUserProfile(authState);
      }
    });
  }
}
</script>

<style lang="sass">
@import '~bulma/sass/utilities/controls'
@import '~bulma/sass/base/generic'
@import '~bulma/sass/base/minireset'
@import '~bulma/sass/base/helpers'
@import '~bulma/sass/elements/title'
@import '~bulma/sass/elements/button'
@import '~bulma/sass/components/navbar'
@import '~bulma/sass/elements/form'

html,
body,
#app
  height: 100%
</style>
