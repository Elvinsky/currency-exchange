<template>
  <div class="layout">
    <div class="layout__dashboard">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Your script code here
</script>

<style scoped lang="scss">
  .layout {
    padding: var(--space-m);
    background-color: var(--color-white-main);
    height: 50vh;
  }
</style>
