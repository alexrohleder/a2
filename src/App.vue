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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
