<template>
  <div class="login">
    <div class="login__content">
      <h2 class="login__content__header2">Sign up</h2>
      <h3 class="login__content__header3">
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
      <form
        @submit.prevent
        class="login__content__form"
      >
        <BaseInput placeholder="Full Name">
          <template #prepend-icon>
            <NameIcon />
          </template>
          <template #append-icon>
            <RequiredIcon />
          </template>
        </BaseInput>
        <BaseInput
          placeholder="Email"
          type="email"
        >
          <template #prepend-icon>
            <EmailIcon />
          </template>
          <template #append-icon>
            <RequiredIcon />
          </template>
        </BaseInput>

        <BaseInput
          placeholder="Phone number"
          type="tel"
        >
          <template #prepend-icon>
            <PhoneIcon />
          </template>
        </BaseInput>
        <BaseSelect
          closeOnClick
          v-model="userSelect"
          :options="selectOptions"
        >
          <BaseInput
            readonly
            placeholder="Country"
            :modelValue="userSelect"
          >
            <template #prepend-icon>
              <CountryIcon />
            </template>
            <template #append-icon>
              <RequiredIcon />
            </template>
          </BaseInput>
        </BaseSelect>
        <BaseInput
          placeholder="Password"
          type="password"
        >
          <template #prepend-icon>
            <PasswordIcon />
          </template>
          <template #append-icon>
            <RequiredIcon />
          </template>
        </BaseInput>
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
          By continuing to register, you agree to the
          <span class="login__content__form__postfix--link">privacy policies</span> and
          <span class="login__content__form__postfix--link">terms of the service</span>.
        </p>
        <BaseButton
          variant="primary"
          @click="submit"
          class="button"
        >
          Sign Up
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
  import CountryIcon from '@/assets/icons/SignUp/CountryIcon.vue';
  import EmailIcon from '@/assets/icons/SignUp/EmailIcon.vue';
  import NameIcon from '@/assets/icons/SignUp/NameIcon.vue';
  import PasswordIcon from '@/assets/icons/SignUp/PasswordIcon.vue';
  import PhoneIcon from '@/assets/icons/SignUp/PhoneIcon.vue';
  import RequiredIcon from '@/assets/icons/SignUp/RequiredIcon.vue';
  import BaseButton from '@/components/common/Button/BaseButton.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import router from '@/router';
  import { ref } from 'vue';

  const selectOptions = ['test1', 'test2', 'test3', 'test4'];
  const userSelect = ref<string>('');

  const submit = () => {
    router.push({ name: 'Verification' });
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
