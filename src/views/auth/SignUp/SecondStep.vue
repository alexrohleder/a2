<template>
  <section class="sign-up-second-step">
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
      <h1 class="title">And your Email?</h1>
    </header>
    <form @submit.prevent="next">
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
import { Component, Vue } from 'vue-property-decorator';
import isValidEmail from '@/utils/isValidEmail';
import ArrowLeft from '@/assets/arrow-left-solid.svg';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';

@Component({
  components: {
    ArrowLeft,
    FloatedSubmitButton,
  },
})
export default class SecondStep extends Vue {
  private email: string = '';
  private wantsMarketing: boolean = false;

  private get isSubmitDisabled() {
    return !isValidEmail(this.email);
  }

  private next() {
    sessionStorage.setItem('auth.sign-up.email', this.email);
    sessionStorage.setItem('auth.sign-up.wantsMarketing', this.wantsMarketing ? '1' : '0');
    this.$router.replace({ name: 'auth.sign-up.3' });
  }
}
</script>
