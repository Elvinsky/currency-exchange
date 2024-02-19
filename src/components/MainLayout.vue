<template>
  <div class="wrapper">
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background-color: var(--color-gray-light);
    height: 100vh;
  }
</style>
