<template>
  <div class="checkbox">
    <div
      class="checkbox__target"
      @click="handleCheck"
      :class="{ 'checkbox__target--checked': modelValue }"
    >
      <div class="checkbox__target--inner"></div>
    </div>
    <div class="checkbox__label"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{ modelValue: boolean }>();

  const emits = defineEmits<(e: 'update:modelValue', value: boolean) => void>();

  const handleCheck = () => {
    emits('update:modelValue', !props.modelValue);
  };
</script>

<style scoped lang="scss">
  .checkbox {
    display: flex;
    flex-direction: row;
    gap: var(--space-s);
    align-items: center;
    justify-content: center;

    &__target {
      width: 16px;
      height: 16px;
      background-color: var(--color-white-main);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-gray-main);
      border-radius: 2px;

      &:hover {
        cursor: pointer;
      }

      &--checked {
        background-color: var(--color-blue-primary);
      }

      &--inner {
        width: 8px;
        height: 8px;
        background-color: var(--color-white-main);
      }
    }
  }
</style>
