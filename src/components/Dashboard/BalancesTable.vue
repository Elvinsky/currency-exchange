<template>
  <div class="balances">
    <div class="balances__top">
      <div class="balances__top__left">
        <h3>BALANCES</h3>
        <BaseSelect
          :options="['4H', '8H', '12H', '24H']"
          v-model="userSelect"
        >
          <div class="select__wrapper">
            <p>{{ userSelect }}</p>
            <ArrowDownIcon />
          </div>
        </BaseSelect>
      </div>
      <div class="balances__top__right">
        <p>USDT&nbsp;&nbsp;-20.09K</p>
        <p>BUSD&nbsp;&nbsp;19.71K</p>
        <p>PRICE&nbsp;&nbsp;0.9993</p>
      </div>
    </div>
    <BaseTable
      :headers="balancesDashboardMockedHeaders"
      :rows="balancesDashboardMockedData"
      lined
    >
      <template #free-row="{ row }">
        <div
          :class="{ balances__zero: row.free === 0 }"
          class="item__row"
        >
          {{ row.free }}
        </div>
      </template>
      <template #locked-row="{ row }">
        <div
          :class="{ balances__zero: row.locked === 0 }"
          class="item__row"
        >
          {{ row.locked }}
        </div>
      </template>
      <template #vault-row="{ row }">
        <div class="vault__checkbox">
          <BaseCheckbox v-model="checked[row.vault as keyof typeof checked]">
            <div
              class="checkbox__label"
              :class="{ 'checkbox__label--checked': checked[row.vault as keyof typeof checked] }"
            >
              {{ row.vault }}
            </div>
          </BaseCheckbox>
        </div>
      </template>
      <template #quote-row="{ row }">
        <div class="vault__checkbox">
          <div class="quote__wrapper">
            <component :is="getIconForQuote(row.quote as string)"></component>
            <p>{{ row.quote }}</p>
          </div>
        </div>
      </template>
      <template #quote-header="{ column }">
        <div class="quote__column">
          <p>{{ column.label }}</p>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
  import BaseTable from '../common/Table/BaseTable.vue';
  import BaseCheckbox from '@common/Checkbox/BaseCheckbox.vue';
  import { balancesDashboardMockedData, balancesDashboardMockedHeaders } from './consts';
  import SFTIcon from '@icons/Balances/SFTIcon.vue';
  import USDCIcon from '@icons/Balances/USDCIcon.vue';
  import BTCIcon from '@icons/Balances/BTCIcon.vue';
  import ETHIcon from '@icons/Balances/ETHIcon.vue';
  import { ref } from 'vue';
  import BaseSelect from '../common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@icons/Header/ArrowDownIcon.vue';

  const checked = ref({
    MM1: false,
    MM2: false,
    Spread: false,
    Price: false,
  });

  const userSelect = ref<string>('12H');

  const getIconForQuote = (name: string) => {
    switch (name) {
      case 'SFT':
        return SFTIcon;
      case 'USDC':
        return USDCIcon;
      case 'ETH':
        return ETHIcon;
      case 'BTC':
        return BTCIcon;
    }
  };
</script>

<style scoped lang="scss">
  .balances {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-xl);
    width: 100%;
    background-color: var(--color-white-main);
    padding: var(--space-l);

    @include w-min($lg) {
      height: 100%;
    }

    &__zero {
      color: var(--color-gray-main);
    }

    &__top {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      @include w-max($md) {
        align-items: start;
        flex-direction: column;
        gap: 10px;
      }

      &__left {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-m);

        h3 {
          font-family: var(--font-inter-bold);
          font-size: var(--font-size-xs);
          color: var(--color-gray-main);
        }
      }

      &__right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-xl);

        p {
          font-family: var(--font-inter-bold);
          font-size: var(--font-size-xs);
          color: var(--color-success);

          &:first-child {
            color: var(--color-alarm-primary);
          }
        }
      }
    }
  }

  .vault__checkbox {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 8px;
  }

  .checkbox__label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 8px;
    border: 1px solid var(--color-gray-light);
    border-radius: 2px;
    background-color: var(--color-white-main);
    color: var(--color-black-main);
    font-family: var(--font-inter-semibold);
    font-size: var(--font-size-s);

    &--checked {
      background-color: var(--color-blue-primary);
      color: var(--color-white-main);
    }
  }

  .quote__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    padding-top: 6px;
    padding-left: var(--space-m);
  }

  .quote__column {
    padding-left: var(--space-m);
  }

  .item__row {
    padding-top: 6px;
  }

  .select__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);

    ::v-deep(path) {
      fill: var(--color-black-main);
    }

    &:hover {
      cursor: pointer;
    }

    p {
      font-family: var(--font-inter-bold);
      font-size: var(--font-size-xs);
      color: var(--color-black-main);
    }
  }
</style>
