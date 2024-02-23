<template>
  <div class="avatar">
    <p>{{ abbr }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { IAvatarProps } from './types';

  withDefaults(defineProps<IAvatarProps>(), {
    size: '40px',
  });
</script>

<style scoped lang="scss">
  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2xs);
    border-radius: 50%;
    background-color: var(--color-white-main);
    width: v-bind(size);
    height: v-bind(size);

    p {
      font-family: var(--font-inter-semibold);
      font-size: var(--font-size-l);
      color: var(--color-black-main);
    }
  }
</style>
