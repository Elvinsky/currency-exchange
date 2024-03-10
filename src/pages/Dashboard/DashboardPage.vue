<template>
  <div
    class="dashboard pc"
    ref="dashboard"
  >
    <div class="dashboard__chart">
      <div class="dashboard__chart__settings-bar">
        <BaseSlideSelect
          :options="timeOptions"
          v-model="timeSelect"
          class="dashboard__chart__settings-bar__slider"
          backgroundColor="white"
        />
        <div class="dashboard__chart__settings-bar__text-content">
          <p class="dashboard__chart__settings-bar__text-content__prefix">24h All</p>
          <p class="dashboard__chart__settings-bar__text-content__content">425,903,214.59</p>
        </div>
        <div class="dashboard__chart__settings-bar__text-content">
          <p class="dashboard__chart__settings-bar__text-content__prefix">24h All</p>
          <p class="dashboard__chart__settings-bar__text-content__content">425,903,214.59</p>
        </div>
      </div>
      <div class="dashboard__chart__crypto-widget">
        <CryptoStocksWidget v-if="getDeviceType === 'pc'" />
      </div>
    </div>
    <div class="dashboard__currency">
      <div class="dashboard__currency__settings-bar">
        <BaseSelect
          closeOnClick
          class="dashboard__currency__settings-bar__select"
          :options="['Bitcoin / Sport Fusion Token']"
          v-model="purchaseSelect"
        >
          <BaseInput
            readonly
            :modelValue="purchaseSelect"
          >
            <template #append-icon>
              <ArrowDownIcon />
            </template>
            <template #prepend-icon>
              <div class="input__prepend">
                <div class="input__prepend__icons">
                  <BTCIcon />
                  <SFTIcon />
                </div>
                BTC/SFT
              </div>
            </template>
          </BaseInput>
        </BaseSelect>
        <div class="dashboard__currency__settings-bar__refresh">
          <RefreshIcon />
        </div>
      </div>
      <div class="dashboard__currency__forms">
        <CurrencyDashboard />
        <CurrencyTradingForm />
      </div>
    </div>

    <div class="dashboard__actions">
      <div class="dashboard__actions__balances">
        <div class="dashboard__actions__balances__firstline">
          <div class="dashboard__actions__balances__firstline__actions-dash">
            <ActionDashboard />
          </div>
          <div class="dashboard__actions__balances__firstline__balance-dash"><BalancesTable /></div>
        </div>
        <AddActionsForm />
      </div>
      <div class="dashboard__actions__transaction">
        <LastTransactionsDashboard />
      </div>
    </div>
  </div>
  <div
    class="dashboard-mobile mobile"
    v-if="page.id === '1'"
  >
    <div class="dashboard-mobile__widget">
      <CryptoStocksWidget v-if="getDeviceType === 'mobile'" />
    </div>
    <div class="dashboard-mobile__table">
      <div class="dashboard-mobile__table__header">
        <p
          :class="{ active: tableOption === 'Order Book' }"
          @click="changeOption('Order Book')"
        >
          Order Book
        </p>
        <p
          :class="{ active: tableOption === 'Last Transactions' }"
          @click="changeOption('Last Transactions')"
        >
          Last Transactions
        </p>
        <BaseSelect
          class="dashboard-mobile__table__header__select"
          v-model="userTableChoise"
          :options="['All', 'Largest', 'Smallest']"
          onTheEdge
        >
          <template #default>
            <div class="dashboard-mobile__table__header__select__container">
              {{ userTableChoise }}
              <ArrowDownIcon />
            </div>
          </template>
          <template #All-option>
            <div
              class="dashboard-mobile__table__header__select__container__option--underlined"
              :class="{ active: userTableChoise === 'All' }"
            >
              All
            </div>
          </template>
          <template #Largest-option>
            <div
              class="dashboard-mobile__table__header__select__container__option--underlined"
              :class="{ active: userTableChoise === 'Largest' }"
            >
              Largest
            </div>
          </template>
          <template #Smallest-option>
            <div
              class="dashboard-mobile__table__header__select__container__option"
              :class="{ active: userTableChoise === 'Smallest' }"
            >
              Smallest
            </div>
          </template>
        </BaseSelect>
      </div>
      <div class="dashboard-mobile__table__content">
        <CurrencyDashboard v-if="tableOption === 'Order Book'" />
        <LastTransactionsDashboard v-if="tableOption === 'Last Transactions'" />
      </div>
    </div>
  </div>
  <div
    class="dashboard-mobile-alt"
    v-if="page.id !== '1'"
  >
    <div class="dashboard-mobile-alt__forms">
      <CurrencyTradingForm />
      <CurrencyDashboard
        :totalShown="false"
        cutted
      />
    </div>
    <div class="dashboard-mobile-alt__tables">
      <ActionDashboard :statShown="false" />
      <BalancesTable />
      <AddActionsForm />
    </div>
  </div>
  <div class="dashboard-tablet tablet">
    <div class="dashboard-tablet__settings">
      <BaseSlideSelect
        :options="timeOptions"
        v-model="timeSelect"
        class="dashboard-tablet__settings__slider"
        backgroundColor="white"
      />
      <div class="dashboard-tablet__settings__text-content">
        <p class="dashboard-tablet__settings__text-content__prefix">24h All</p>
        <p class="dashboard-tablet__settings__text-content__content">425,903,214.59</p>
      </div>
      <div class="dashboard-tablet__settings__text-content">
        <p class="dashboard-tablet__settings__text-content__prefix">24h All</p>
        <p class="dashboard-tablet__settings__text-content__content">425,903,214.59</p>
      </div>
    </div>
    <div class="dashboard-tablet__currency-choise">
      <BaseSelect
        closeOnClick
        class="dashboard-tablet__currency-choise__select"
        :options="['Bitcoin / Sport Fusion Token']"
        v-model="purchaseSelect"
      >
        <BaseInput
          readonly
          :modelValue="purchaseSelect"
        >
          <template #append-icon>
            <ArrowDownIcon />
          </template>
          <template #prepend-icon>
            <div class="input__prepend">
              <div class="input__prepend__icons">
                <BTCIcon />
                <SFTIcon />
              </div>
              BTC/SFT
            </div>
          </template>
        </BaseInput>
      </BaseSelect>
      <div class="dashboard__currency__settings-bar__refresh">
        <RefreshIcon />
      </div>
    </div>
    <div class="dashboard-tablet__currency">
      <div class="dashboard-tablet__currency__widget">
        <CryptoStocksWidget v-if="getDeviceType === 'tablet'" />
      </div>
      <div class="dashboard-tablet__currency__form">
        <CurrencyDashboard />
      </div>
    </div>
    <div class="dashboard-tablet__currency__trade">
      <CurrencyTradingForm />
    </div>
    <div class="dashboard-tablet__actions">
      <div class="dashboard-tablet__actions__dashboard">
        <ActionDashboard />
        <BalancesTable />
      </div>
      <div class="dashboard-tablet__actions__transactions">
        <LastTransactionsDashboard />
      </div>
    </div>
    <AddActionsForm />
  </div>
</template>

<script setup lang="ts">
  import { timeOptions } from '@pages/Dashboard/consts';
  import type { ISlideSelectModelValue } from '@/components/common/SlideSelect/types';
  import BaseSlideSelect from '@/components/common/SlideSelect/BaseSlideSelect.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import { computed, ref } from 'vue';
  import BTCIcon from '@/assets/icons/General/BTCIcon.vue';
  import SFTIcon from '@/assets/icons/General/SFTIcon.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import RefreshIcon from '@icons/General/RefreshIcon.vue';
  import CryptoStocksWidget from '@/components/Dashboard/CryptoStocksWidget.vue';
  import CurrencyDashboard from '@/components/Dashboard/CurrencyDashboard.vue';
  import CurrencyTradingForm from '@/components/Dashboard/CurrencyTradingForm.vue';
  import ActionDashboard from '@/components/Dashboard/ActionDashboard.vue';
  import BalancesTable from '@/components/Dashboard/BalancesTable.vue';
  import AddActionsForm from '@/components/Dashboard/AddActionsForm.vue';
  import LastTransactionsDashboard from '@/components/Dashboard/LastTransactionsDashboard.vue';
  import { useMobileSwitchPage } from '@/composables/useMobileSwitchPage';

  const purchaseSelect = ref<string>('Bitcoin / Sport Fusion Token');
  const timeSelect = ref<ISlideSelectModelValue>(timeOptions[4]);

  const userTableChoise = ref<string>('All');

  const { page } = useMobileSwitchPage();

  const tableOption = ref<string>('Order Book');

  const changeOption = (option: string) => {
    tableOption.value = option;
  };

  const getDeviceType = computed(() => {
    const innerWidth = window.innerWidth;

    if (innerWidth < 500) {
      return 'mobile';
    } else if (innerWidth > 500 && innerWidth < 1100) {
      return 'tablet';
    } else {
      return 'pc';
    }
  });
</script>

<style scoped lang="scss">
  .dashboard {
    padding: var(--space-s);
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    @include w-max(500px) {
      display: none;
    }

    &__chart {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: start;
      justify-content: center;
      width: 49vw;

      &__settings-bar {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        justify-content: center;
        width: 49vw;

        &__text-content {
          height: 100%;
          width: fit-content;
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          gap: 20px;
          align-items: center;
          justify-content: center;
          background-color: var(--color-white-main);
          padding: 4px 10px;

          &__prefix {
            font-family: var(--font-inter-semibold);
            color: var(--color-gray-main);
            font-size: var(--font-size-m);

            @include w-max(1600px) {
              font-size: var(--font-size-xs);
            }
          }

          &__content {
            font-family: var(--font-inter-semibold);
            color: var(--color-black-main);
            font-size: var(--font-size-m);

            @include w-max(1600px) {
              font-size: var(--font-size-xs);
            }
          }
        }
      }

      &__crypto-widget {
        width: 100%;
        height: 55vh;
        background-color: white;

        @include w-max(1600px) {
          height: 65vh;
        }
      }
    }

    &__currency {
      width: 47vw;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: start;
      justify-content: center;

      &__settings-bar {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        gap: 12px;
        width: 100%;
        height: 44px;

        ::v-deep(svg path) {
          fill: var(--color-black-main);
        }

        &__select {
          background-color: var(--color-white-main);
        }

        &__refresh {
          display: flex;
          align-items: start;
          justify-content: start;
          background-color: var(--color-black-main);
          padding: var(--space-xs);
        }
      }

      &__forms {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        gap: 12px;
        width: 100%;
      }
    }

    &__actions {
      display: flex;
      flex-direction: row;
      align-items: start;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      width: 100%;

      &__balances {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: start;
        justify-content: start;
        width: 72.9vw;
        height: 100%;

        &__firstline {
          display: flex;
          flex-direction: row;
          align-items: start;
          justify-content: start;
          gap: 12px;
          width: 100%;

          &__actions-dash {
            width: 100%;
            height: 100%;
          }

          &__balance-dash {
            height: 100%;
            width: 100%;
          }
        }
      }

      &__transaction {
        display: flex;
        align-items: start;
        justify-content: start;
        height: 100%;
        width: 23.4vw;
      }
    }
  }

  .input__prepend {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-s);
    color: var(--color-black-main);
    font-family: var(--font-inter-semibold);
    font-size: var(--font-size-m);

    &__icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: var(--space-2xs);
    }
  }

  .dashboard-mobile {
    padding: var(--space-s);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 140px;
    padding-bottom: 140px;
    gap: 12px;

    position: relative;
    z-index: 2;

    &__widget {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      height: 65vh;
      width: 100vw;
    }

    &__table {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      padding: var(--space-s);
      gap: 12px;

      &__header {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        gap: 16px;

        p {
          font-family: var(--font-inter-bold);
          color: var(--color-gray-main);
          font-size: var(--font-size-s);
          white-space: nowrap;
          transition: all 0.2s ease;

          &.active {
            color: var(--color-black-main);
            text-decoration: underline;
          }
        }

        &__select {
          ::v-deep(path) {
            fill: black;
          }

          &__container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 8px;

            font-family: var(--font-inter-bold);
            color: var(--color-black-main);
            font-size: var(--font-size-s);
            white-space: nowrap;

            &__option {
              min-width: 100px;
              padding: var(--sapce-m);

              &--underlined {
                width: 100%;
                padding-bottom: 5px;
              }
            }
          }
        }
      }

      &__content {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .dashboard-mobile-alt {
    padding: 140px var(--space-s);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 12px;
    width: 100%;

    position: relative;
    z-index: 2;

    &__forms {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      gap: 12px;
      width: 90vw;
    }

    &__tables {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 12px;
      width: 95vw;
    }
  }

  .dashboard-tablet {
    display: none;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 24px;
    gap: 12px;

    @include w-max($lg) {
      display: flex;
    }
    @include w-max($sm) {
      display: none;
    }

    &__settings {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;

      &__text-content {
        height: 42px;
        width: fit-content;
        display: flex;
        flex-direction: row;
        white-space: nowrap;
        gap: 20px;
        align-items: center;
        justify-content: center;
        background-color: var(--color-white-main);
        padding: 4px 10px;

        &__prefix {
          font-family: var(--font-inter-semibold);
          color: var(--color-gray-main);
          font-size: var(--font-size-m);
        }

        &__content {
          font-family: var(--font-inter-semibold);
          color: var(--color-black-main);
          font-size: var(--font-size-m);
        }
      }
    }

    &__currency-choise {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 12px;

      ::v-deep(svg path) {
        fill: var(--color-black-main);
      }

      &__select {
        background-color: var(--color-white-main);
      }

      &__refresh {
        display: flex;
        align-items: start;
        justify-content: start;
        background-color: var(--color-black-main);
        padding: var(--space-xs);
      }
    }

    &__currency {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      width: 100%;
      gap: 12px;

      &__widget {
        width: 100%;
        height: 55vh;
      }

      &__form {
        width: 100%;
        max-width: 350px;
      }
    }

    &__actions {
      display: flex;
      flex-direction: row;
      gap: 12px;
      width: 100%;

      &__dashboard {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }

  .mobile {
    @include w-min(361px) {
      display: none;
    }
    @include w-max($md) {
      display: flex;
    }
  }

  .pc {
    @include w-max($lg) {
      display: none;
    }
  }
</style>
