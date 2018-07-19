<template>
  <div id="app">
    <mobile-main-content>
      <component v-if="currentLayoutComponent" :is="currentLayoutComponent" />
      <router-view v-else />
    </mobile-main-content>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase/app';
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import { Actions as AuthActions } from '@/store/auth';
import MobileMainContent from '@/components/MobileMainContent.vue';

@Component({
  components: {
    MobileMainContent,
  },
})
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

  private get currentLayoutComponent(): any {
    const { matched } = this.$route;
    const route = matched[0];

    if (route && route.components && route.components.layout) {
      return route.components.layout;
    }
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
