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
        <BaseButton
          variant="primary"
          @click="submit"
        >
          Submit
        </BaseButton>
        <p class="login__content__form__postfix">
          By continuing to register, you agree to the
          <span class="login__content__form__postfix--link">privacy policies</span> and
          <span class="login__content__form__postfix--link">terms of the service</span>.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import EmailIcon from '@/assets/icons/SignUp/EmailIcon.vue';
  import PasswordIcon from '@/assets/icons/SignUp/PasswordIcon.vue';
  import BaseButton from '@/components/common/Button/BaseButton.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import router from '@/router';

  const submit = () => {
    router.push({ name: 'Main' });
  };
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-light);
    height: calc(100vh - var(--header-height));

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
      }

      &__form {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: var(--space-xl);

        &__postfix {
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
        }
      }
    }
  }
</style>
@/pages/router
