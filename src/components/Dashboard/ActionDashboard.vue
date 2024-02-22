<template>
  <div class="dashboard">
    <BaseTable
      :headers="actionsDashboardMockedHeaders"
      :rows="actionsDashboardMockedData"
      lined
    >
      <template #trigger-row="{ row }">
        <div class="trigger">&lt; {{ row.trigger }}</div>
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
</script>

<style scoped lang="scss">
  .dashboard {
    width: 700px;
    height: 300px;
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
</style>
