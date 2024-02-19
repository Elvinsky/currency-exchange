<template>
  <HeaderComponent />
  <div class="verification">
    <div class="verification__content">
      <h2 class="verification__content__h2">Almost done, one step left</h2>
      <p class="verification__content__caption">
        You are registered, the next step is KYC verification, for this prepare one of the following
        documents:
      </p>
      <div class="verification__content__verif-wrap">
        <div class="verification__content__verif-type">
          <PassportIcon />
          <p>Resident's passport</p>
        </div>
        <p class="verification__content__or">or</p>
        <div class="verification__content__verif-type">
          <LicenseIcon />
          <p>Driver's license</p>
        </div>
      </div>

      <p class="verification__content__postfix">
        Verification will be completed using the
        <span class="verification__content__postfix--link">Silt</span>
        service
      </p>
      <BaseButton
        @click="submit"
        variant="primary"
        >Start KYC</BaseButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  import LicenseIcon from '@/assets/icons/KYC/LicenseIcon.vue';
  import PassportIcon from '@/assets/icons/KYC/PassportIcon.vue';
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
  import BaseButton from '@/components/common/Button/BaseButton.vue';
  import router from '@/router';

  const submit = () => {
    router.push({ name: 'Main' });
  };
</script>

<style scoped lang="scss">
  .verification {
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
      width: 540px;
      gap: var(--space-xl);
      text-align: center;

      &__h2 {
        font-family: var(--font-inter-semibold);
        font-size: var(--font-size-xl);
        color: var(--color-black-main);
      }

      &__caption {
        font-family: var(--font-inter-medium);
        font-size: var(--font-size-m);
        color: var(--color-black-main);
      }

      &__or {
        font-family: var(--font-inter-medium);
        font-size: var(--font-size-m);
        color: var(--color-gray-main);
      }

      &__verif-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-xs);
      }

      &__verif-type {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-2xs);

        p {
          font-family: var(--font-inter-medium);
          font-size: var(--font-size-m);
          color: var(--color-black-main);
        }
      }

      &__postfix {
        font-family: var(--font-inter-medium);
        font-size: var(--font-size-s);
        color: var(--color-gray-main);

        &--link {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }
  }
</style>
