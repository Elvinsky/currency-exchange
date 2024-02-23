<template>
  <div
    ref="target"
    class="dropdown"
    :class="dropdownPosition"
  >
    <div
      ref="activator"
      class="dropdown__activator"
      @click="toggleDropdown()"
    >
      <slot name="trigger"></slot>
    </div>
    <Transition>
      <div
        v-show="dropdownOpen"
        ref="content"
        class="dropdown__content"
        @click="closeOnClick ? toggleDropdown(false) : constVoid"
      >
        <slot
          name="content"
          :close="toggleDropdown"
        ></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core';
  import { computed, nextTick, onMounted, ref } from 'vue';

  import { constVoid } from '@/utils/function';
  import { getElementRect } from '@/utils/getElementRect';
  import type { IDropdownProps } from './types';

  const props = withDefaults(defineProps<IDropdownProps>(), {
    closeOnClickOutside: true,
    closeOnClick: true,
  });

  const emit = defineEmits<{
    (e: 'clickOutside'): void;
    (e: 'update:modelValue', value: boolean): void;
  }>();

  const dropdownOpen = ref<boolean>(false);
  const target = ref<HTMLElement | null>(null);

  const toggleDropdown = (value = !dropdownOpen.value) => {
    dropdownOpen.value = value;
    emit('update:modelValue', value);
  };

  onClickOutside(target, () => {
    if (props.closeOnClickOutside) {
      if (dropdownOpen.value) {
        emit('clickOutside');
      }
      toggleDropdown(false);
    }
  });

  const activator = ref<HTMLElement | null>(null);
  const content = ref<HTMLElement | null>(null);

  const left = ref<boolean>(false);
  const top = ref<boolean>(false);

  const dropdownPosition = computed(() => {
    if (left.value && top.value) {
      return 'dropdown_left dropdown_bottom';
    } else if (left.value) {
      return 'dropdown_left dropdown_bottom';
    } else if (top.value) {
      return 'dropdown_right dropdown_top';
    } else {
      return 'dropdown_right dropdown_top';
    }
  });

  const setContentPosition = () => {
    const el = content.value?.children[0] as HTMLElement;
    const wWidth = window.innerWidth;
    const wHeight = window.innerHeight;
    const elParent = target.value as HTMLElement;
    const elCoords = getElementRect(el, elParent, wWidth, wHeight);
    const parentCoords = (activator.value as HTMLElement).getBoundingClientRect();

    if (parentCoords.x + elCoords.width > wWidth) {
      left.value = false;
    } else {
      left.value = true;
    }

    if (parentCoords.y + elCoords.height > wHeight) {
      top.value = false;
    } else {
      top.value = true;
    }
  };

  onMounted(() => {
    nextTick(() => {
      setContentPosition();
    });
  });
</script>

<style scoped lang="scss">
  .dropdown {
    position: relative;
    width: 100% !important;
    height: 100%;
    background: transparent;
    height: fit-content;

    &__content {
      min-width: 100%;
      width: fit-content;
      position: absolute;
      z-index: 999;
      overflow: hidden;
    }

    &__activator {
      display: flex;
      flex-shrink: 0;
    }
  }

  .dropdown.dropdown_left {
    .dropdown__content {
      left: 0;
      right: initial;
    }
  }

  .dropdown.dropdown_right {
    .dropdown__content {
      right: 0;
      left: initial;
    }
  }

  .dropdown.dropdown_top {
    .dropdown__content {
      bottom: calc(100% + 4px);
      top: initial;
    }
  }

  .dropdown.dropdown_bottom {
    .dropdown__content {
      top: calc(100% + 4px);
      bottom: initial;
    }
  }

  .dropdown.dropdown_center {
    .dropdown__content {
      top: 50%;
      transform: translate(0, -50%);
    }
  }

  .v-enter-active {
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  .v-leave-active {
    transition-timing-function: ease-in-out;
  }

  .v-enter-to,
  .v-leave-from {
    max-height: 350px;
    overflow: hidden;
  }

  .v-enter-from,
  .v-leave-to {
    overflow: hidden;
    max-height: 0;
  }
</style>
