<template>
  <div
    class="wrapper"
    v-if="!(isMobile && isAuthPages)"
  >
    <div class="header">
      <div class="header__left">
        <div class="header__left__logo">
          <MainLogoIcon />
        </div>
        <BaseDropdown
          v-if="!isAuthPages"
          @clickOutside="openMenu('')"
          class="header__left__dropdown pc"
        >
          <template #trigger>
            <BaseButton
              @click="openMenu('deposit')"
              :variant="openedMenu === 'deposit' ? 'primary' : 'outlined'"
            >
              <div class="pc">Deposit</div>
            </BaseButton>
          </template>
          <template #content>
            <DepositMenu />
          </template>
        </BaseDropdown>
        <BaseButton
          @click="togglePhoneMenu('deposit')"
          :variant="openedMenu === 'deposit' ? 'primary' : 'outlined'"
          class="header__left__mobile-button"
          :hidden="isPc"
        >
          <div class="mobile"><AdaptiveDepositIcon /></div>
        </BaseButton>

        <BaseDropdown
          v-if="!isAuthPages"
          @clickOutside="openMenu('')"
          class="header__left__dropdown pc"
        >
          <template #trigger>
            <BaseButton
              @click="openMenu('withdraw')"
              :variant="openedMenu === 'withdraw' ? 'primary' : 'outlined'"
            >
              <div class="pc">Withdraw</div>
            </BaseButton>
          </template>
          <template #content>
            <WithdrawMenu />
          </template>
        </BaseDropdown>
        <BaseButton
          @click="togglePhoneMenu('withdraw')"
          :variant="openedMenu === 'withdraw' ? 'primary' : 'outlined'"
          class="header__left__mobile-button"
          :hidden="isPc"
        >
          <div class="mobile"><AdaptiveWithdrawIcon /></div>
        </BaseButton>
      </div>
      <div
        v-if="!isAuthPages && !isTablet"
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
        v-if="!isAuthPages && isTablet"
        class="header__center"
      >
        <RouterLink
          v-for="link in headerTabletNavigationLinks"
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
    <div class="page-slider mobile">
      <BaseSlideSelect
        v-if="!isAuthPages"
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

  <div
    class="phone-menu-deposit"
    v-if="openedPhoneMenu === 'deposit'"
  >
    <div class="phone-menu-deposit__options">
      <BackIcon @click="togglePhoneMenu('')" />
    </div>
    <div class="phone-menu-deposit__content">
      <div class="phone-menu-deposit__content__header">
        <h3>Deposit USDC</h3>
        <div
          class="phone-menu-deposit__content__header__next"
          @click="togglePhoneMenu('withdraw')"
        >
          <p>Withdraw</p>
          <NextIcon />
        </div>
      </div>
      <BaseSelect
        closeOnClick
        v-model="userChoise"
        :options="['Etherium', 'Bitcoin', 'BNB Smart Chain']"
      >
        <BaseInput
          readonly
          type="text"
          class="phone-menu-deposit__content__input"
          :modelValue="userChoise"
          label="SELECT CHAIN"
          backGroundColor="white"
        >
          <template #prepend-icon>{{ prependInput }}</template>
          <template #append-icon><ArrowDownIcon /></template>
        </BaseInput>

        <template #Etherium-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>ERC</p>
              <p>Etherium</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~5 min</span></p>
              <p>FEE <span>0.005 USDT</span></p>
            </div>
          </div>
        </template>
        <template #Bitcoin-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>BTC</p>
              <p>Bitcoin</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~3 min</span></p>
              <p>FEE <span>0.01 USDT</span></p>
            </div>
          </div>
        </template>
        <template #BNBSmartChain-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>BSC</p>
              <p>BND Smart Chain</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~1 min</span></p>
              <p>FEE <span>0.0001 USDT</span></p>
            </div>
          </div>
        </template>
      </BaseSelect>
      <BaseInput
        readonly
        backGroundColor="white"
        v-model="inputValue"
        label="ADDRESS"
        @click="copy()"
      >
        <template #prepend-icon><img src="/qr-code 1.png" /> </template>
        <template #append-icon><CopyIcon /> </template>
      </BaseInput>
      <p class="phone-menu-deposit__content__postfix">
        Disclaimer: All deposits in USDC will be converted to SFT
      </p>
    </div>
    <div class="internal-footer">
      <div class="internal-footer__buttons">
        <BaseButton
          variant="white"
          class="internal-footer__buttons__item"
        >
          Save Image
        </BaseButton>
        <BaseButton
          variant="primary"
          class="internal-footer__buttons__item"
        >
          Copy Address
        </BaseButton>
      </div>
      <div class="internal-footer__nav">
        <RouterLink
          v-for="link in footerNavigationLinks"
          :key="link.id"
          :to="link.route"
        >
          <component :is="link.component"></component>
        </RouterLink>
      </div>
    </div>
  </div>
  <div
    class="phone-menu-withdraw"
    v-if="openedPhoneMenu === 'withdraw'"
  >
    <div class="phone-menu-withdraw__options">
      <BackIcon @click="togglePhoneMenu('')" />
    </div>
    <div class="phone-menu-withdraw__content">
      <div class="phone-menu-withdraw__content__header">
        <h3>Withdraw USDC</h3>
        <div
          class="phone-menu-withdraw__content__header__next"
          @click="togglePhoneMenu('deposit')"
        >
          <p>Deposit</p>
          <NextIcon />
        </div>
      </div>
      <BaseSelect
        closeOnClick
        v-model="userChoise"
        :options="['Etherium', 'Bitcoin', 'BNB Smart Chain']"
      >
        <BaseInput
          readonly
          type="text"
          class="phone-menu-withdraw__content__input"
          :modelValue="userChoise"
          label="SELECT CHAIN"
          backGroundColor="white"
        >
          <template #prepend-icon>{{ prependInput }}</template>
          <template #append-icon><ArrowDownIcon /></template>
        </BaseInput>

        <template #Etherium-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>ERC</p>
              <p>Etherium</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~5 min</span></p>
              <p>FEE <span>0.005 USDT</span></p>
            </div>
          </div>
        </template>
        <template #Bitcoin-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>BTC</p>
              <p>Bitcoin</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~3 min</span></p>
              <p>FEE <span>0.01 USDT</span></p>
            </div>
          </div>
        </template>
        <template #BNBSmartChain-option>
          <div class="select-option">
            <div class="select-option__left">
              <p>BSC</p>
              <p>BND Smart Chain</p>
            </div>
            <div class="select-option__right">
              <p>ENROLLMENT TIME <span>~1 min</span></p>
              <p>FEE <span>0.0001 USDT</span></p>
            </div>
          </div>
        </template>
      </BaseSelect>
      <BaseInput
        type="text"
        class="phone-menu-withdraw__content__input"
        v-model="userAdress"
        label="ADRESS"
        backGroundColor="white"
      />
      <BaseInput
        type="number"
        class="phone-menu-withdraw__content__input"
        v-model="userAmount"
        label="AMOUNT   (549,328.34 USDT)"
        backGroundColor="white"
      />
      <p class="phone-menu-withdraw__content__postfix">
        Disclaimer: All withdraws in USDC will be converted to SFT
      </p>
    </div>

    <div class="internal-footer">
      <div class="internal-footer__prefix">
        <div class="internal-footer__prefix__text">
          <div class="internal-footer__prefix__text__line">
            <p>TRANSACTION FEE</p>
            <p>~0.19 USDT</p>
          </div>
          <div class="internal-footer__prefix__text__line">
            <p>RECEIVED</p>
            <p>15,499.81</p>
          </div>
        </div>
        <div class="internal-footer__buttons">
          <BaseButton
            variant="primary"
            class="internal-footer__buttons__item"
          >
            Withdraw
          </BaseButton>
        </div>
      </div>

      <div class="internal-footer__nav">
        <RouterLink
          v-for="link in footerNavigationLinks"
          :key="link.id"
          :to="link.route"
        >
          <component :is="link.component"></component>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    footerNavigationLinks,
    headerNavigationLinks,
    headerTabletNavigationLinks,
  } from './consts';
  import MainLogoIcon from '@/assets/icons/Logo/MainLogoIcon.vue';
  import BaseButton from '../common/Button/BaseButton.vue';
  import BaseDropdown from '../common/Dropdown/BaseDropdown.vue';
  import DepositMenu from './Menus/DepositMenu.vue';
  import WithdrawMenu from './Menus/WithdrawMenu.vue';
  import ProfileMenu from './Menus/ProfileMenu.vue';
  import { computed, ref, watch } from 'vue';
  import type { THeaderOpenedMenu } from './types';
  import { useRoute } from 'vue-router';
  import AdaptiveDepositIcon from '@/assets/icons/Adaptive/AdaptiveDepositIcon.vue';
  import AdaptiveWithdrawIcon from '@/assets/icons/Adaptive/AdaptiveWithdrawIcon.vue';
  import BaseSlideSelect from '../common/SlideSelect/BaseSlideSelect.vue';
  import type { ISlideSelectModelValue } from '../common/SlideSelect/types';
  import { useMobileSwitchPage } from '@/composables/useMobileSwitchPage';
  import BackIcon from '@/assets/icons/Adaptive/BackIcon.vue';
  import NextIcon from '@/assets/icons/Adaptive/NextIcon.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import CopyIcon from '@icons/General/CopyIcon.vue';

  const route = useRoute();

  const userAdress = ref<string>('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');
  const userAmount = ref<number>(0);

  const openedMenu = ref<THeaderOpenedMenu>('');

  const openedPhoneMenu = ref<string>('');

  const isPc = computed(() => window.innerWidth >= 450);

  const { setPage } = useMobileSwitchPage();
  const pageSliderModel = ref<ISlideSelectModelValue>({ id: '1', label: 'Charts' });

  const togglePhoneMenu = (menu: string) => {
    openedPhoneMenu.value = menu;

    if (openedMenu.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  watch(
    pageSliderModel,
    () => {
      setPage(pageSliderModel.value);
    },
    { deep: true }
  );

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

  const isTablet = computed(() => window.innerWidth <= 1100);
  const isMobile = computed(() => window.innerWidth <= 500);

  const userChoise = ref<string>('Etherium');

  const prependInput = computed<string>(() => {
    switch (userChoise.value) {
      case 'Etherium':
        return 'ERC';
      case 'Bitcoin':
        return 'BTC';
      case 'BNB Smart Chain':
        return 'BSC';
      default:
        return '';
    }
  });

  const inputValue = ref<string>('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');

  const copy = () => {
    navigator.clipboard.writeText('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');

    inputValue.value = 'COPIED';

    setTimeout(() => {
      inputValue.value = 'bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6';
    }, 3000);
  };
</script>

<style scoped lang="scss">
  .wrapper {
    background-color: var(--color-black-main);
    padding: 4px 10px;
    position: sticky;
    top: 0;
    z-index: 99;
    left: 0;

    @include w-max($md) {
      position: fixed;
      top: 80px;
      left: 0;
      z-index: 99;
    }

    .header {
      display: grid;
      grid-template-columns: v-bind(gridTemplateColumns);
      grid-auto-rows: auto;
      place-items: center;

      @include w-max($md) {
        position: fixed;
        top: 0;
        left: 0;
      }

      place-content: center;

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
          display: none !important;
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
  }

  .page-slider {
    position: relative;
    z-index: 10;
  }

  .tablet {
    @include w-min($md) {
      display: none !important;
    }
    @include w-max($lg) {
      display: none !important;
    }
  }

  .phone-menu-deposit {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16px;

    &__options {
      padding-left: var(--space-m);
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-xl);
      padding: var(--space-m);

      &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &__next {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          gap: 8px;
          color: white;
          background-color: black;

          p {
            font-size: 14px;
            font-family: var(--font-inter-medium);
          }
        }

        h3 {
          font-size: var(--space-l);
          font-family: var(--font-inter-semibold);
          text-align: start;
        }
      }

      &__input {
        text-align: center;
        width: 100%;

        ::v-deep(path) {
          fill: var(--color-black-main);
        }
      }

      &__postfix {
        font-family: var(--font-inter-medium);
        color: var(--color-gray-main);
        width: 220px;
        font-size: var(--font-size-3xs);
        text-align: center;
      }
      .select-option {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-2xs);
        width: 100%;

        &__left {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          align-items: start;
          justify-content: space-between;
          height: 100%;
          text-align: start;
          font-family: var(--font-inter-semibold);

          p:first-child {
            font-size: var(--font-size-s);
            color: var(--color-black-main);
          }

          p:last-child {
            font-size: var(--font-size-xs);
            color: var(--color-gray-main);
          }
        }

        &__right {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: var(--space-xs);
          font-family: var(--font-inter-semibold);
          text-align: start;

          p {
            font-size: var(--font-size-2xs);
            color: var(--color-gray-main);

            span {
              font-size: var(--font-size-xs);
              color: var(--color-black-main);
            }
          }
        }
      }
    }
  }

  .phone-menu-withdraw {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16px;

    &__options {
      padding-left: var(--space-m);
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-xl);
      padding: var(--space-m);
      width: 100%;

      &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        &__next {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          gap: 8px;
          color: white;
          background-color: black;

          p {
            font-size: 14px;
            font-family: var(--font-inter-medium);
          }
        }

        h3 {
          font-size: var(--space-l);
          font-family: var(--font-inter-semibold);
          text-align: start;
        }
      }

      &__input {
        width: 100%;
        text-align: center;
        ::v-deep(path) {
          fill: var(--color-black-main);
        }
      }

      &__postfix {
        font-family: var(--font-inter-medium);
        color: var(--color-gray-main);
        font-size: var(--font-size-3xs);
        text-align: center;
      }
    }

    .select-option {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-2xs);
      width: 100%;

      &__left {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        align-items: start;
        justify-content: space-between;
        height: 100%;
        text-align: start;
        font-family: var(--font-inter-semibold);

        p:first-child {
          font-size: var(--font-size-s);
          color: var(--color-black-main);
        }

        p:last-child {
          font-size: var(--font-size-xs);
          color: var(--color-gray-main);
        }
      }

      &__right {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: var(--space-xs);
        font-family: var(--font-inter-semibold);
        text-align: start;

        p {
          font-size: var(--font-size-2xs);
          color: var(--color-gray-main);

          span {
            font-size: var(--font-size-xs);
            color: var(--color-black-main);
          }
        }
      }
    }
  }

  .internal-footer {
    margin-left: -16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 100%;
    gap: 16px;
    position: fixed;
    z-index: 99;
    bottom: 0;

    &__buttons {
      display: flex;
      flex-direction: row;
      gap: 8px;
      width: 100%;
      padding: 8px 16px;
      background-color: #1f1f2e;
    }

    &__prefix {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: #1f1f2e;
      gap: 16px;

      &__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
        padding: 16px 16px 0px 16px;
        gap: 12px;

        &__line {
          display: flex;
          flex-direction: row;
          width: 100%;
          align-items: center;
          justify-content: space-between;

          p {
            color: white;
            font-size: 12px;
            font-family: var(--font-inter-bold);
            line-height: 12px;
          }
        }
      }
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
