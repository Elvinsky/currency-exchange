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
    height: calc(100vh - var(--header-height));

    @include w-max($md) {
      background-color: var(--color-white-main);
    }
  }
</style>
