<template>
  <div class="dashboard">
    <BaseTable
      :headers="currencyDashboardMcokedHeaders"
      :rows="currencyDashboardMockedData"
    >
      <template #price-row="{ row }"
        ><BaseButton variant="primary">{{ row.price }}</BaseButton></template
      >
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
  import BaseTable from '@common/Table/BaseTable.vue';
  import { currencyDashboardMcokedHeaders, currencyDashboardMockedData } from './consts';
  import BaseButton from '@/components/common/Button/BaseButton.vue';
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
