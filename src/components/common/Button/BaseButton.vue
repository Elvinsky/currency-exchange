<template>
  <button
    class="button"
    :class="[`button--${variant}`, { 'button--hidden': hidden }]"
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
    hidden: false,
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

    &--hidden {
      display: none;
    }

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

    &--white:not([disabled]) {
      background-color: var(--color-white-main);
      border: 2px solid var(--color-white-main);
      color: var(--color-black-main);
      font-size: 16px;

      &:hover {
        background-color: rgb(220, 220, 220);
        border: 2px solid rgb(220, 220, 220);
      }

      &:active {
        background-color: rgb(205, 205, 205);
        border: 2px solid rgb(205, 205, 205);
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
