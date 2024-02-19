<template>
  <div class="input">
    <label :class="['input__label', { 'input__label--error': error }]">
      {{ label }}
    </label>
    <div
      class="input__wrapper"
      :class="{ 'input__wrapper--error': error }"
    >
      <slot
        name="prepend-icon"
        :clear="clear"
      ></slot>
      <input
        class="input__field"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :value="modelValue"
        :name="name"
        :min="min"
        :required="required"
        @input="handleInput"
      />
      <slot
        name="append-icon"
        :clear="clear"
      >
      </slot>
    </div>
    <label
      v-if="error"
      :class="['input__label', { 'input__label--error': error }]"
    >
      {{ error }}
    </label>
  </div>
</template>

<script setup lang="ts">
  import type { IBaseInputProps } from './types';

  withDefaults(defineProps<IBaseInputProps>(), {
    name: '',
    type: 'text',
    placeholder: '',
    label: '',
    error: '',
    disabled: false,
    readonly: false,
    modelValue: '',
    required: false,
    min: 0,
  });

  const emits = defineEmits<(e: 'update:modelValue', value: string) => void>();

  const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emits('update:modelValue', target.value);
  };

  const clear = () => {
    emits('update:modelValue', '');
  };
</script>

<style scoped lang="scss">
  .input {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: var(--space-2xs);
    min-width: 150px;
    width: 100%;

    &__label {
      margin-left: var(--space-xs);
      font-size: var(--font-size-s);
      font-family: var(--font-inter-medium);

      &--error {
        color: var(--color-alarm-primary);
      }
    }

    .input__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: var(--space-xs);
      font-size: var(--font-size-m);
      border: 1px solid var(--color-gray-light);
      width: 100%;

      .input__field {
        font-size: var(--font-size-s);
        padding-left: var(--space-xs);
        padding-right: var(--space-xs);
        width: 100%;
        background: transparent;
        font-family: var(--font-inter-medium);
        color: var(--color-gray-hard);
      }

      &:hover {
        border: 1px solid var(--color-gray-secondary);
      }

      &:focus-within {
        border: 1px solid var(--color-gray-third);
      }

      &--error {
        border: 1px solid var(--color-alarm-primary);
      }
    }
  }

  input[readonly] {
    &:hover {
      cursor: pointer;
    }
  }
</style>
