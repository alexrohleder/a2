<template>
  <section class="confirm-profile">
    <header>
      <nav class="navbar" />
      <h1 class="title">What do you think?</h1>
      <h2 class="subtitle">Verify if your information is right before continue.</h2>
    </header>
    <form @submit.prevent="confirm">
      <div class="field">
        <label class="label" for="name">Name</label>
        <div class="control">
          <input class="input" id="name" type="text" v-model="name">
        </div>
      </div>
      <div class="field">
        <label class="label" for="surname">Surname</label>
        <div class="control">
          <input class="input" id="surname" type="text" v-model="surname">
        </div>
      </div>
      <div class="field">
        <label class="label" for="email">Email Address</label>
        <div class="control">
          <input class="input" id="email" type="email" v-model="email">
        </div>
      </div>
      <floated-submit-button :disabled="isSubmitDisabled" />
    </form>
  </section>
</template>

<script lang="ts">
import { Getter, Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';
import isValidEmail from '@/utils/isValidEmail';
import { Actions as CoreActions } from '@/store/core';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';
import { Actions as AuthActions, Getters as AuthGetters } from '@/store/auth';

@Component({
  components: {
    FloatedSubmitButton,
  },
})
export default class ConfirmProfile extends Vue {
  @Getter(AuthGetters.USER)
  private readonly user;

  @Action(AuthActions.UPDATE_USER_PROFILE)
  private updateUserProfile;

  @Action(CoreActions.SET_LOADING)
  private setLoading;

  private name: string = '';
  private surname: string = '';
  private email: string = '';

  private created() {
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.email = this.user.email;
  }

  private get isSubmitDisabled() {
    return !this.name.length
      || !this.surname.length
      || !isValidEmail(this.email);
  }

  private confirm() {
    this.setLoading(true);

    this.updateUserProfile({ uid: this.user.uid, ...this.$data }).then(() => {
      this.setLoading(false);
      this.$router.push({ name: 'dashboard.home' });
    });
  }
}
</script>
