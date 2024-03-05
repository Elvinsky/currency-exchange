<template>
  <HeaderComponent />
  <RouterView />
</template>

<script setup lang="ts">
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
</script>

<style lang="scss">
  .mobile {
    @include w-min(361px) {
      display: none;
    }
    @include w-max($md) {
      display: block;
    }
  }

  .pc {
    @include w-max($md) {
      display: none;
    }
  }
</style>
