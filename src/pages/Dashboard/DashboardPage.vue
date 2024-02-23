<template>
  <div class="dashboard">
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
      <div class="dashboard__chart__crypto-widget"><CryptoStocksWidget /></div>
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
</template>

<script setup lang="ts">
  import { timeOptions } from '@pages/Dashboard/consts';
  import type { ISlideSelectModelValue } from '@/components/common/SlideSelect/types';
  import BaseSlideSelect from '@/components/common/SlideSelect/BaseSlideSelect.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import { ref } from 'vue';
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

  const purchaseSelect = ref<string>('Bitcoin / Sport Fusion Token');
  const timeSelect = ref<ISlideSelectModelValue>(timeOptions[4]);
</script>

<style scoped lang="scss">
  .dashboard {
    padding: var(--space-s);
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: 12px;

    &__chart {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: start;
      justify-content: start;
      width: 50vw;

      &__settings-bar {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        justify-content: center;
        width: 50vw;

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
        height: 50vh;
        background-color: white;

        @include w-max(1600px) {
          height: 60vh;
        }
      }
    }

    &__currency {
      width: 47vw;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: start;
      justify-content: start;

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
      justify-content: start;
      gap: 12px;
      width: 100%;

      &__balances {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: start;
        justify-content: start;
        width: 70vw;

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
        width: 27vw;
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
</style>
