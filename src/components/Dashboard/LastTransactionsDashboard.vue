<template>
  <div class="transactions">
    <div class="transactions__label">
      <h3>LAST TRANSACTIONS</h3>
      <BaseSelect
        closeOnClick
        :options="['ALL', '4H', '8H', '12H', '24H']"
        v-model="userSelect"
      >
        <div class="select__wrapper">
          <p>{{ userSelect }}</p>
          <ArrowDownIcon />
        </div>
      </BaseSelect>
    </div>
    <BaseTable
      :rows="transactionsDashboardMockedData"
      :headers="transactionsDashboardMockedHeaders"
      maxHeight="70vh"
    >
      <template #price-row="{ row }">
        <p
          :class="{
            success: (row.price as number) >= 1.0004,
            warn: (row.price as number) < 1.0004,
          }"
        >
          {{
            row.price.toLocaleString('en-US', {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })
          }}
        </p>
      </template>
      <template #amount-row="{ row }">
        {{
          row.amount.toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 4,
          })
        }}
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
  import ArrowDownIcon from '@icons/Header/ArrowDownIcon.vue';
  import BaseSelect from '../common/Select/BaseSelect.vue';
  import { ref } from 'vue';
  import BaseTable from '../common/Table/BaseTable.vue';
  import { transactionsDashboardMockedData, transactionsDashboardMockedHeaders } from './consts';

  const userSelect = ref<string>('ALL');
</script>

<style scoped lang="scss">
  .transactions {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-xl);
    width: 99%;
    background-color: var(--color-white-main);
    padding: var(--space-l);
    height: 100%;

    @include w-max($md) {
      width: 80vw;
    }

    &__label {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: center;
      gap: var(--space-xl);

      h3 {
        font-family: var(--font-inter-bold);
        font-size: var(--font-size-xs);
        color: var(--color-gray-main);
        white-space: nowrap;
      }
    }
  }

  .select__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);

    p {
      font-family: var(--font-inter-bold);
      font-size: var(--font-size-xs);
      color: var(--color-black-main);
    }

    ::v-deep(path) {
      fill: var(--color-black-main);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .success {
    color: var(--color-success);
  }

  .warn {
    color: var(--color-alarm-primary);
  }
</style>
