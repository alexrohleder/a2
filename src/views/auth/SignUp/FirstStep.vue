<template>
  <section class="sign-up-first-step">
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
      <h1 class="title">What's your Name?</h1>
    </header>
    <form @submit.prevent="next">
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
      <floated-submit-button :disabled="isSubmitDisabled" />
    </form>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArrowLeft from '@/assets/arrow-left-solid.svg';
import FloatedSubmitButton from '@/components/FloatedSubmitButton.vue';

@Component({
  components: {
    ArrowLeft,
    FloatedSubmitButton,
  },
})
export default class FirstStep extends Vue {
  private name: string = '';
  private surname: string = '';

  private get isSubmitDisabled() {
    return !this.name.length || !this.surname.length;
  }

  private next() {
    sessionStorage.setItem('auth.sign-up.name', this.name);
    sessionStorage.setItem('auth.sign-up.surname', this.surname);
    this.$router.replace({ name: 'auth.sign-up.2' });
  }
}
</script>
