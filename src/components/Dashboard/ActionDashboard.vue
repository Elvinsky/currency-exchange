<template>
  <div class="actions">
    <div class="actions__top">
      <div class="actions__top__left">
        <h3>ACTION</h3>
        <BaseSelect
          closeOnClick
          :options="['ALGO', 'TEST1', 'TEST2']"
          v-model="userSelect"
        >
          <div class="select__wrapper">
            <p>{{ userSelect }}</p>
            <ArrowDownIcon />
          </div>
        </BaseSelect>
      </div>
    </div>
    <BaseTable
      :headers="actionsDashboardMockedHeaders"
      :rows="actionsDashboardMockedData"
      lined
    >
      <template #trigger-row="{ row }">
        <div class="trigger">&lt; {{ row.trigger }}</div>
      </template>
      <template #price-row="{ row }">
        <div class="trigger--colorless">{{ row.price }}</div>
      </template>

      <template #side-header="{ column }">
        <div class="side">
          {{ column.label }}
        </div>
      </template>
      <template #side-row="{ row }">
        <div
          class="side"
          :class="{
            side__buy: row.side === 'BUY',
            side__sell: row.side === 'SELL',
          }"
        >
          {{ row.side }}
        </div>
      </template>
      <template #action-row="{ row }">
        <div
          :class="{
            delete__approve: row.action,
            delete__forbid: !row.action,
          }"
        >
          <DeleteIcon />
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
  import BaseTable from '@common/Table/BaseTable.vue';
  import { actionsDashboardMockedData, actionsDashboardMockedHeaders } from './consts';
  import DeleteIcon from '@icons/General/DeleteIcon.vue';
  import { ref } from 'vue';
  import BaseSelect from '../common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@icons/Header/ArrowDownIcon.vue';

  const userSelect = ref<string>('ALGO');
</script>

<style scoped lang="scss">
  .actions {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: var(--space-l);
    gap: var(--space-xl);
    width: 100%;
    background-color: var(--color-white-main);

    &__top {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

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
    }
  }
  .trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2xs) var(--space-xs);
    border: 1px solid var(--color-gray-light);
    color: var(--color-black-main);
    font-family: var(--font-inter-semibold);
    width: fit-content;

    &--colorless {
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: var(--space-2xs);
      color: var(--color-black-main);
      font-family: var(--font-inter-semibold);
      width: fit-content;
    }
  }

  .side {
    font-family: var(--font-inter-semibold);
    padding-left: var(--space-xs);

    &__sell {
      color: var(--color-alarm-primary);
    }

    &__buy {
      color: var(--color-success);
    }
  }

  .delete {
    transition: var(--transition-default);

    &__approve {
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    &__forbid {
      &:hover {
        cursor: not-allowed;
      }
    }
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
