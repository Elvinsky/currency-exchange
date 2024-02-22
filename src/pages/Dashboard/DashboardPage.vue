<template>
  <div class="dashboard">
    <DashboardLayout>
      <BalancesTable />
    </DashboardLayout>
  </div>
</template>

<script setup lang="ts">
  import BalancesTable from '@/components/Dashboard/BalancesTable.vue';
  import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue';
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }
</style>
