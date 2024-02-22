<template>
  <div class="dashboard">
    <DashboardLayout>
      <CurrencyTradingForm />
    </DashboardLayout>
  </div>
</template>

<script setup lang="ts">
  import CurrencyTradingForm from '@/components/Dashboard/CurrencyTradingForm.vue';
  import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue';
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 1000px;
  }
</style>
