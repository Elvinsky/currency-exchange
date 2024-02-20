<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    background-color: var(--color-gray-light);
    height: 100vh;
  }
</style>
