<template>
  <BaseDropdown
    v-model="isDropdownOpen"
    class="dropdown_bottom"
  >
    <template #trigger>
      <slot></slot>
    </template>
    <template #content>
      <div class="select">
        <ul class="select__list select-list">
          <li
            v-for="option in options"
            :key="option"
            class="select-list__item"
            @click="updateModelValue(option)"
          >
            {{ option }}
            <RequiredIcon
              v-if="option === modelValue"
              class="custom-icon"
            />
          </li>
        </ul>
      </div>
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import BaseDropdown from '../Dropdown/BaseDropdown.vue';
  import RequiredIcon from '@/assets/icons/SignUp/RequiredIcon.vue';

  defineProps<{
    modelValue: string;
    options: string[];
  }>();

  const emit = defineEmits<(e: 'update:modelValue', value: string) => void>();

  const isDropdownOpen = ref<boolean>(false);

  const updateModelValue = (item: string) => {
    emit('update:modelValue', item);
  };
</script>

<style scoped lang="scss">
  .custom-icon {
    height: var(--space-m);
    width: var(--space-m);
    margin-left: var(--space-xs);
  }

  .select {
    width: 100%;
    background: var(--color-gray-hard);
  }

  .select__list {
    width: 100%;
    max-height: 264px;
    overflow-y: auto;

    > .select-list__item {
      color: var(--color-gray-light);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 40px;
      padding: var(--space-xs) var(--space-s);
      font-size: var(--font-size-s);
      cursor: pointer;
    }
  }
</style>
