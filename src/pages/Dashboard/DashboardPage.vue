<template>
  <div class="dashboard">
    <div class="dashboard__currency">
      <DashboardLayout>
        <template #content>
          <CurrencyDashboard />
        </template>
      </DashboardLayout>
    </div>
    <div class="dashboard__actions-apply">
      <DashboardLayout>
        <template #content>
          <ActionDashboard />
        </template>
      </DashboardLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ActionDashboard from '@/components/Dashboard/ActionDashboard.vue';
  import CurrencyDashboard from '@/components/Dashboard/CurrencyDashboard.vue';
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
