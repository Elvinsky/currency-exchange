<template>
  <div class="footer">
    <div class="footer__buttons">
      <BaseButton variant="primary">Buy</BaseButton>
      <BaseButton variant="secondary">Sell</BaseButton>
    </div>
    <div class="footer__nav">
      <RouterLink
        v-for="link in footerNavigationLinks"
        :key="link.id"
        class="header__center__link"
        exactActiveClass="header__center__link--active"
        :to="link.route"
      >
        <component :is="link.component"></component>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseButton from '../common/Button/BaseButton.vue';
  import { footerNavigationLinks } from './consts';

  // Your script code here
</script>

<style scoped lang="scss">
  .footer {
    display: none;

    @include w-max($md) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: black;
      width: 100%;
      gap: 16px;
      position: fixed;
      bottom: 0;
    }

    &__buttons {
      display: flex;
      flex-direction: row;
      gap: 8px;
      width: 100%;
      padding: 8px 16px;
    }

    &__nav {
      padding: 8px 16px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
