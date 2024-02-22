<template>
  <div class="dashboard">
    <DashboardLayout>
      <AddActionsForm />
    </DashboardLayout>
  </div>
</template>

<script setup lang="ts">
  import AddActionsForm from '@/components/Dashboard/AddActionsForm.vue';
  import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue';
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
