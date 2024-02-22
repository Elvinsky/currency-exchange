<template>
  <div class="dashboard">
    <DashboardLayout>
      <LastTransactionsDashboard />
    </DashboardLayout>
  </div>
</template>

<script setup lang="ts">
  import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue';
  import LastTransactionsDashboard from '@/components/Dashboard/LastTransactionsDashboard.vue';
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
