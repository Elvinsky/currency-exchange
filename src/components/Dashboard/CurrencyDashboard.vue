<template>
  <div class="dashboard">
    <BaseTable
      :headers="currencyDashboardMcokedHeaders"
      :rows="currencyDashboardMockedData"
    >
      <template #price-row="{ row }">
        <div
          :style="{ color: (row.price as number) >= 1.0005 ? '#e95b2f' : '#31a667' }"
          :class="{ bordered: (row.price as number) === 1.0005 }"
        >
          {{ row.price }}
        </div>
      </template>
      <template #amount-row="{ row }">
        <div
          :style="{ color: (row.price as number) >= 1.0005 ? '#e95b2f' : '#31a667' }"
          :class="{ bordered: (row.price as number) === 1.0005 }"
        >
          {{
            row.amount.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          }}
        </div>
      </template>
      <template #total-row="{ row }">
        <div
          :style="{ color: (row.price as number) >= 1.0005 ? '#e95b2f' : '#31a667' }"
          :class="{ bordered: (row.price as number) === 1.0005 }"
        >
          {{
            row.total.toLocaleString('en-US', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })
          }}
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
  import BaseTable from '@common/Table/BaseTable.vue';
  import { currencyDashboardMcokedHeaders, currencyDashboardMockedData } from './consts';
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-white-main);
    height: 50vh;
    justify-content: center;

    @include w-max(1600px) {
      height: 60vh;
    }
  }

  .bordered {
    border-bottom: 2px solid var(--color-gray-light);
    border-top: 2px solid var(--color-gray-light);
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: -4px;
    margin-right: -4px;
    padding-left: 4px;
    padding-right: 4px;
  }
</style>
