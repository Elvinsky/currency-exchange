<template>
  <div class="wrapper">
    <div
      class="label"
      v-if="label"
    >
      <p>{{ label }}</p>
    </div>
    <div class="slide-select">
      <div
        v-for="option in options"
        :key="option.id"
        class="slide-select__item"
        :class="{
          'slide-select__item--active': option.id === modelValue.id,
          'slide-select__item--inactive': option.id !== modelValue.id,
        }"
        @click="selectItem(option)"
      >
        <slot
          :name="`${option.label}-option`"
          :option="option"
        >
          {{ option.label }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { ISlideSelectModelValue, ISlideSelectProps } from './types';
  const props = defineProps<ISlideSelectProps>();

  const emits = defineEmits<(e: 'update:modelValue', value: ISlideSelectModelValue) => void>();

  const selectItem = (option: ISlideSelectModelValue) => {
    emits('update:modelValue', option);
  };

  const backGroundColorComp = computed(() => props.backgroundColor || 'transparent');
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: var(--space-s);
    color: var(--color-gray-main);
    font-family: var(--font-inter-bold);
    font-size: var(--font-size-xs);
    width: 100%;

    @include w-max(1600px) {
      font-size: var(--font-size-2xs);
    }

    .slide-select {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-2xs);
      padding: var(--space-2xs);
      border: 1px solid var(--color-gray-light);
      border-radius: 2px;
      width: 100%;
      background-color: v-bind(backGroundColorComp);

      &__item {
        color: var(--color-gray-main);
        font-family: var(--font-inter-semibold);
        font-size: var(--font-size-m);
        background-color: var(--color-bg-button-outlined);
        border-radius: 2px;
        transition: var(--transition-default);
        padding: var(--space-xs);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;

        @include w-max(1600px) {
          ::v-deep(svg) {
            width: 20px;
            height: 20px;
          }
        }

        &:hover {
          cursor: pointer;
        }

        &--active {
          color: var(--color-white-main);
          background-color: var(--color-black-main);
        }
      }
    }
  }
</style>
