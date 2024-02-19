<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left__logo">
        <MainLogoIcon />
      </div>
      <BaseDropdown @clickOutside="openMenu('')">
        <template #trigger>
          <BaseButton
            @click="openMenu('deposit')"
            :variant="openedMenu === 'deposit' ? 'primary' : 'outlined'"
          >
            Deposit
          </BaseButton>
        </template>
        <template #content>
          <DepositMenu />
        </template>
      </BaseDropdown>

      <BaseDropdown @clickOutside="openMenu('')">
        <template #trigger>
          <BaseButton
            @click="openMenu('withdraw')"
            :variant="openedMenu === 'withdraw' ? 'primary' : 'outlined'"
          >
            Withdraw</BaseButton
          >
        </template>
        <template #content>
          <WithdrawMenu />
        </template>
      </BaseDropdown>
    </div>
    <div
      v-if="!isAuthPages"
      class="header__center"
    >
      <RouterLink
        v-for="link in headerNavigationLinks"
        :key="link.id"
        class="header__center__link"
        exactActiveClass="header__center__link--active"
        :to="link.route"
      >
        <component :is="link.component"></component>
      </RouterLink>
    </div>
    <div
      v-if="!isAuthPages"
      class="header__right"
    >
      <ProfileMenu />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { headerNavigationLinks } from './consts';
  import MainLogoIcon from '@/assets/icons/Logo/MainLogoIcon.vue';
  import BaseButton from '../common/Button/BaseButton.vue';
  import BaseDropdown from '../common/Dropdown/BaseDropdown.vue';
  import DepositMenu from './Menus/DepositMenu.vue';
  import WithdrawMenu from './Menus/WithdrawMenu.vue';
  import ProfileMenu from './Menus/ProfileMenu.vue';
  import { computed, ref } from 'vue';
  import type { THeaderOpenedMenu } from './types';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const openedMenu = ref<THeaderOpenedMenu>('');

  const openMenu = (menu: THeaderOpenedMenu) => {
    openedMenu.value = menu;
  };

  const isAuthPages = computed(
    () =>
      route.name === 'Registration' ||
      route.name === 'Verification' ||
      route.name === 'Registration'
  );
</script>

<style scoped lang="scss">
  .header {
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-auto-rows: auto;
    place-items: center;
    place-content: center;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--color-black-main);
    height: var(--header-height);
    z-index: 9;
    padding: 25px 32px;

    &__left {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: var(--space-l);

      &__logo {
        margin-right: var(--space-l);
      }
    }

    &__center {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: var(--space-l);

      &__link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-s);
        border-radius: var(--space-2xs);
        transition: var(--transition-default);

        &:hover {
          background-color: var(--color-gray-hard);
        }

        &--active {
          background-color: var(--color-gray-hard);
        }
      }
    }
  }
</style>
