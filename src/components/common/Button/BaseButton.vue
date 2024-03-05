<template>
  <button
    class="button"
    :class="`button--${variant}`"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import type { IButtonProps } from './types';

  withDefaults(defineProps<IButtonProps>(), {
    disabled: false,
    variant: 'outlined',
  });
</script>

<style scoped lang="scss">
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-s) var(--space-l);
    width: 100%;
    transition: var(--transition-default);
    font-family: var(--font-inter-semibold);
    font-size: var(--font-size-s);

    &[disabled] {
      background-color: var(--color-gray-main);
      color: var(--color-white-main);

      &:hover {
        cursor: not-allowed;
      }
    }

    &--outlined:not([disabled]) {
      background-color: var(--color-bg-button-outlined);
      border: 2px solid var(--color-white-main);
      color: var(--color-white-main);

      &:hover {
        background-color: var(--color-bg-button-outlined-hover);
        color: white;
        border: 2px solid var(--color-bg-button-outlined-hover);
      }

      &:active {
        background-color: var(--color-bg-button-outlined-active);
        border: 2px solid var(--color-bg-button-outlined-active);
      }

      @include w-max($md) {
        background-color: #252531;
        border-color: #252531;
        border: 0;
        padding: 12px;
      }
    }

    &--primary:not([disabled]) {
      background-color: var(--color-bg-button-primary);
      border: 2px solid var(--color-bg-button-primary);
      color: var(--color-white-main);

      &:hover {
        background-color: var(--color-bg-button-primary-hover);
        border: 2px solid var(--color-bg-button-primary-hover);
      }

      &:active {
        background-color: var(--color-bg-button-primary-active);
        border: 2px solid var(--color-bg-button-primary-active);
      }
    }

    &--secondary:not([disabled]) {
      background-color: var(--color-alarm-primary);
      color: var(--color-white-main);

      &:hover {
        background-color: var(--color-alarm-secondary);
      }

      &:active {
        background-color: var(--color-alarm-third);
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
</style>
