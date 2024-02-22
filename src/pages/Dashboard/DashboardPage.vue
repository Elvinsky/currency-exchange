<template>
  <div class="wrapper">
    <div class="dashboard">
      <div class="dashboard__chart-wrapper">
        <div class="dashboard__chart-wrapper__settings">
          <div class="dashboard__chart-wrapper__settings__item">
            <BaseSlideSelect
              :options="timeOptions"
              v-model="timeSelect"
              backgroundColor="white"
              class="dashboaed__settings__item--slide"
            />
          </div>
          <div class="dashboard__chart-wrapper__settings__item--text">
            <p class="dashboard__chart-wrapper__settings__item--text__prefix">24h All</p>
            <p class="dashboard__chart-wrapper__settings__item--text__content">425,903,214.59</p>
          </div>
          <div class="dashboard__chart-wrapper__settings__item--text">
            <p class="dashboard__chart-wrapper__settings__item--text__prefix">24h All</p>
            <p class="dashboard__chart-wrapper__settings__item--text__content">425,903,214.59</p>
          </div>
        </div>
        <div class="dashboard__chart-wrapper__chart"></div>
      </div>
      <div class="dashboard__purchase-wrapper">
        <div class="dashboard__purchase-wrapper__select">
          <BaseSelect
            class="dashboard__purchase-wrapper__select--bgwhite"
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
          <div class="dashboard__purchase-wrapper__select__refresh">
            <RefreshIcon />
          </div>
        </div>
        <div class="dashboard__purchase-wrapper__forms">
          <DashboardLayout class="dashboard__purchase-wrapper__forms__item">
            <CurrencyDashboard />
          </DashboardLayout>
          <DashboardLayout class="dashboard__purchase-wrapper__forms__item">
            <CurrencyTradingForm />
          </DashboardLayout>
        </div>
      </div>
    </div>
    <div class="dashboard__lower-section">
      <div class="actions">
        <div class="actions__first-row">
          <DashboardLayout>
            <ActionDashboard />
          </DashboardLayout>
          <DashboardLayout>
            <BalancesTable />
          </DashboardLayout>
        </div>
        <div class="actions__second-row">
          <DashboardLayout>
            <AddActionsForm />
          </DashboardLayout>
        </div>
      </div>
      <div class="transactions">
        <DashboardLayout>
          <LastTransactionsDashboard />
        </DashboardLayout>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ISlideSelectModelValue } from '@/components/common/SlideSelect/types';
  import { ref } from 'vue';
  import { timeOptions } from './consts';
  import BaseSlideSelect from '@/components/common/SlideSelect/BaseSlideSelect.vue';
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import BTCIcon from '@/assets/icons/General/BTCIcon.vue';
  import SFTIcon from '@/assets/icons/General/SFTIcon.vue';
  import RefreshIcon from '@icons/General/RefreshIcon.vue';

  import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue';
  import CurrencyDashboard from '@/components/Dashboard/CurrencyDashboard.vue';
  import CurrencyTradingForm from '@/components/Dashboard/CurrencyTradingForm.vue';
  import ActionDashboard from '@/components/Dashboard/ActionDashboard.vue';
  import BalancesTable from '@/components/Dashboard/BalancesTable.vue';
  import AddActionsForm from '@/components/Dashboard/AddActionsForm.vue';
  import LastTransactionsDashboard from '@/components/Dashboard/LastTransactionsDashboard.vue';

  const timeSelect = ref<ISlideSelectModelValue>(timeOptions[4]);
  const purchaseSelect = ref<string>('Bitcoin / Sport Fusion Token');
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    margin: auto;
  }
  .dashboard {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 12px;
    padding: 20px 20px 12px 20px;

    &__chart-wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: var(--space-s);
      width: 960px;

      &__settings {
        display: grid;
        grid-template-columns: 6fr 0.5fr 0.5fr;
        place-content: center;
        width: 100%;
        gap: var(--space-s);

        &__item {
          width: 100%;
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          gap: 30px;
          align-items: center;
          justify-content: center;
          background-color: var(--color-white-main);

          &--text {
            width: 100%;
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
      }

      &__chart {
        width: 960px;

        height: 570px;
        background-color: white;
      }
    }

    &__purchase-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;

      &__select {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 12px;

        &--bgwhite {
          background-color: var(--color-white-main);
        }

        ::v-deep(svg path) {
          fill: var(--color-black-main);
        }

        &__refresh {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-black-main);
          padding: var(--space-xs);
        }
      }

      &__forms {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: space-between;
        width: 100%;
        gap: 12px;

        &__item {
          height: 570px;
        }
      }
    }

    &__lower-section {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    padding-left: 20px;
    padding-bottom: 20px;
    justify-content: start;

    width: 100%;

    &__first-row {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: start;
      gap: 12px;
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
