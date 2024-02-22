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
    display: flex;
    align-items: start;
    justify-content: start;
    padding: var(--space-l);
    background-color: var(--color-white-main);
    gap: var(--space-xl);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
