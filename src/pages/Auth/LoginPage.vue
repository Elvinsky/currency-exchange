<template>
  <div class="login">
    <div class="login__content">
      <h2 class="login__content__header2">Log in</h2>
      <h3 class="login__content__header3">
        Don't have an account yet?
        <RouterLink
          class="login__content__header3--link"
          :to="{
            name: 'Registration',
          }"
        >
          Sign up
        </RouterLink>
      </h3>
      <form
        @submit.prevent
        class="login__content__form"
      >
        <BaseInput
          placeholder="Email"
          type="email"
        >
          <template #prepend-icon>
            <EmailIcon />
          </template>
        </BaseInput>
        <BaseInput
          placeholder="Password"
          type="password"
        >
          <template #prepend-icon>
            <PasswordIcon />
          </template>
        </BaseInput>
        <BaseCheckbox v-model="rememberMe">Remember me</BaseCheckbox>
        <h3 class="login__content__header3--mobile">
          Already have an account?
          <RouterLink
            class="login__content__header3--link"
            :to="{
              name: 'Registration',
            }"
          >
            Log in
          </RouterLink>
        </h3>
        <p class="login__content__form__postfix--mobile">
          Forgot your
          <span class="login__content__form__postfix--link">email</span> or
          <span class="login__content__form__postfix--link">password</span>.
        </p>
        <BaseButton
          variant="primary"
          @click="submit"
          class="button"
        >
          Submit
        </BaseButton>
        <p class="login__content__form__postfix">
          Forgot your
          <span class="login__content__form__postfix--link">email</span> or
          <span class="login__content__form__postfix--link">password</span>.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import EmailIcon from '@/assets/icons/SignUp/EmailIcon.vue';
  import PasswordIcon from '@/assets/icons/SignUp/PasswordIcon.vue';
  import BaseButton from '@/components/common/Button/BaseButton.vue';
  import BaseCheckbox from '@/components/common/Checkbox/BaseCheckbox.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import router from '@/router';
  import { ref } from 'vue';

  const submit = () => {
    router.push({ name: 'Main' });
  };

  const rememberMe = ref<boolean>(false);
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-light);
    height: calc(100vh - var(--header-height));

    @include w-max($sm) {
      background-color: white;
      height: 100vh;
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--color-white-main);
      padding: var(--space-4xl) var(--space-l);
      max-width: 540px;
      gap: var(--space-xl);

      &__header2 {
        font-family: var(--font-inter-semibold);
        font-size: var(--font-size-xl);
      }

      &__header3 {
        font-family: var(--font-inter-regular);
        font-size: var(--font-size-s);

        &--link {
          text-decoration: underline;
          color: var(--color-blue-primary);
        }

        &--mobile {
          display: none;

          @include w-max($sm) {
            display: block;
            font-family: var(--font-inter-regular);
            padding-top: 12px;
            font-size: var(--font-size-s);
          }
        }
      }

      @include w-max($sm) {
        padding: 0px 16px 0px 16px;
        max-width: 100vw;
        width: 100%;

        &__header2 {
          font-family: var(--font-inter-semibold);
          font-size: var(--font-size-l);
        }

        &__header3 {
          display: none;
        }
      }

      &__form {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: var(--space-xl);

        ::v-deep(.checkbox) {
          align-self: flex-start;
        }

        ::v-deep(.checkbox__label) {
          font-size: 14px;
          font-family: var(--font-inter-medium);
        }

        @include w-max($sm) {
          gap: 16px;
          ::v-deep(.input) {
            width: 100%;
          }
        }

        &__postfix {
          @include w-max($sm) {
            display: none;
          }
          width: 70%;
          margin: auto;
          text-align: center;
          font-family: var(--font-inter-medium);
          font-size: var(--font-size-s);
          color: var(--color-gray-secondary);

          &--link {
            text-decoration: underline;
            text-underline-offset: 2px;
          }

          &--mobile {
            display: none;

            @include w-max($sm) {
              display: block;
              width: 90%;
              margin: auto;
              text-align: center;
              font-family: var(--font-inter-medium);
              font-size: var(--font-size-s);
              color: var(--color-gray-secondary);

              padding-bottom: 20px;

              .login__content__form__postfix--link {
                text-decoration: underline;
                text-underline-offset: 2px;
              }
            }
          }
        }
      }
    }
  }

  .button {
    @include w-max($sm) {
      position: fixed;
      width: calc(100vw - 32px);
      left: 16px;
      bottom: 70px;
    }
  }
</style>
