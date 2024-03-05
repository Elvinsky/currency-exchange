<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__left">
        <div class="header__left__logo">
          <MainLogoIcon />
        </div>
        <BaseDropdown
          v-if="!isAuthPages"
          @clickOutside="openMenu('')"
          class="header__left__dropdown"
        >
          <template #trigger>
            <BaseButton
              @click="openMenu('deposit')"
              :variant="openedMenu === 'deposit' ? 'primary' : 'outlined'"
            >
              <div class="pc">Deposit</div>
              <div class="mobile"><AdaptiveDepositIcon /></div>
            </BaseButton>
          </template>
          <template #content>
            <DepositMenu />
          </template>
        </BaseDropdown>

        <BaseDropdown
          v-if="!isAuthPages"
          @clickOutside="openMenu('')"
          class="header__left__dropdown"
        >
          <template #trigger>
            <BaseButton
              @click="openMenu('withdraw')"
              :variant="openedMenu === 'withdraw' ? 'primary' : 'outlined'"
            >
              <div class="pc">Withdraw</div>
              <div class="mobile"><AdaptiveWithdrawIcon /></div>
            </BaseButton>
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
    <div class="page-slider">
      <BaseSlideSelect
        itemBackgroundColor="#2E67FF"
        backgroundColor="white"
        :bordered="false"
        v-model="pageSliderModel"
        :options="[
          { id: '1', label: 'Charts' },
          { id: '2', label: 'Trade' },
        ]"
      />
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
  import AdaptiveDepositIcon from '@/assets/icons/Adaptive/AdaptiveDepositIcon.vue';
  import AdaptiveWithdrawIcon from '@/assets/icons/Adaptive/AdaptiveWithdrawIcon.vue';
  import BaseSlideSelect from '../common/SlideSelect/BaseSlideSelect.vue';
  import type { ISlideSelectModelValue } from '../common/SlideSelect/types';

  const route = useRoute();

  const openedMenu = ref<THeaderOpenedMenu>('');

  const pageSliderModel = ref<ISlideSelectModelValue>({ id: '1', label: 'Charts' });

  const openMenu = (menu: THeaderOpenedMenu) => {
    if (openedMenu.value == menu) {
      openedMenu.value = '';
    } else {
      openedMenu.value = menu;
    }
  };

  const isAuthPages = computed(
    () => route.name === 'Registration' || route.name === 'Verification' || route.name === 'Login'
  );

  const gridTemplateColumns = computed(() => {
    if (isAuthPages.value) {
      return '0.1fr 1fr 1fr';
    }
    return '1fr 5fr 1fr';
  });
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: var(--color-black-main);
    padding: 4px 10px;

    .header {
      display: grid;
      grid-template-columns: v-bind(gridTemplateColumns);
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

      @include w-max($md) {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
      }

      &__left {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-l);

        @include w-max($md) {
          gap: var(--space-s);
        }

        &__logo {
          margin-right: var(--space-l);

          @include w-max($md) {
            display: none;
          }
        }
      }

      &__center {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-l);

        @include w-max($md) {
          display: none;
        }

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

    .mobile {
      @include w-min(361px) {
        display: none;
      }
      @include w-max($md) {
        display: block;
      }
    }

    .pc {
      @include w-max($md) {
        display: none;
      }
    }
  }
</style>
