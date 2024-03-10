<template>
  <div
    class="table"
    ref="table"
  >
    <div class="table__wrapper">
      <div
        v-for="header in headers"
        :key="header.id"
        class="cell cell__header"
        :style="{ textAlign: header.align ? header.align : 'center' }"
      >
        <slot
          :name="`${header.key}-header`"
          :column="header"
        >
          {{ header.label }}
        </slot>
      </div>
      <template v-if="rows.length > 0">
        <template
          v-for="(row, rowIdx) in rows"
          :key="rowIdx"
        >
          <div
            v-for="(header, headerIdx) in headers"
            class="cell"
            :class="[
              `cell--${rowIdx}`,
              {
                'cell__lined cell__lined--underlined': rows[rowIdx + 1] && lined,
                cell__lined: !rows[rowIdx + 1] && lined,
              },
            ]"
            @click="test(`cell--${rowIdx}`, `delete--${rowIdx}`)"
            :key="header.id"
            :style="{
              textAlign: header.alignRows ? header.alignRows : 'end',
              whiteSpace: deletable ? 'nowrap' : '',
            }"
          >
            <slot
              :name="`${header.field}-row`"
              :row="row"
              :idx="rowIdx"
              :header="header"
            >
              {{ row[header.field] }}
            </slot>
            <div
              class="delete-pop-up"
              :class="`delete-${rowIdx}`"
              v-if="deletable && headerIdx === headers.length - 1"
            >
              <CrossIcon />
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import type { ITableProps } from './types';
  import CrossIcon from '@/assets/icons/General/CrossIcon.vue';
  const props = withDefaults(defineProps<ITableProps>(), { deletable: false });

  const gridTemplateColumns = computed(() => {
    let templateColumns = props.headers.reduce((acc, column) => {
      const columnWidth = column.width || '1fr';
      return `${acc} ${columnWidth}`;
    }, '');

    return templateColumns;
  });

  const maxHeight = computed(() => {
    return props.maxHeight || '70vh';
  });

  const table = ref();

  const activeElement = ref();
  const activeDelete = ref();

  const displayComp1 = computed(() => (activeDelete.value === 'delete--0' ? 'flex' : 'none'));
  const displayComp2 = computed(() => (activeDelete.value === 'delete--1' ? 'flex' : 'none'));
  const displayComp3 = computed(() => (activeDelete.value === 'delete--2' ? 'flex' : 'none'));
  const displayComp4 = computed(() => (activeDelete.value === 'delete--3' ? 'flex' : 'none'));
  const displayComp5 = computed(() => (activeDelete.value === 'delete--4' ? 'flex' : 'none'));

  const test = (rowClass: string, deleteClass: string) => {
    if (!table.value || window.innerWidth >= 600 || !props.deletable) return;

    resetStyles(activeElement.value, 'transform', 'translateX(0px)');
    resetStyles(activeDelete.value, 'display', 'none');

    activeElement.value = rowClass;
    activeDelete.value = deleteClass;

    setStyles(rowClass, 'transform', 'translateX(-40px)');

    setStyles(deleteClass, 'display', 'flex');
  };

  const resetStyles = (className: string | undefined, styleProperty: string, value: string) => {
    if (className) {
      const elements: HTMLElement[] = table.value.getElementsByClassName(className);
      for (let item of elements) {
        item.style[styleProperty] = value;
      }
    }
  };

  const setStyles = (className: string, styleProperty: string, value: string) => {
    const elements: HTMLElement[] = table.value.getElementsByClassName(className);
    for (let item of elements) {
      item.style[styleProperty] = value;
    }
  };

  const displayComp = computed(() => {
    return props.deletable ? 'flex' : '';
  });
</script>

<style scoped lang="scss">
  .table {
    overflow: hidden;
    display: grid;
    grid-template-rows: auto auto;
    max-height: 50vh;
    width: 100%;

    @include w-max(1600px) {
      max-height: v-bind(maxHeight);
    }

    &__wrapper {
      display: grid;
      grid-template-columns: v-bind(gridTemplateColumns);
    }

    .cell {
      display: v-bind(displayComp);
      padding-top: 4px;
      padding-bottom: 4px;
      text-align: end;
      font-family: var(--font-inter-medium);
      font-size: var(--font-size-xs);

      &__header {
        margin-bottom: 10px;
        font-family: var(--font-inter-bold);
        font-size: var(--font-size-xs);
        color: var(--color-gray-main);
      }

      &__lined {
        padding-top: var(--space-s);
        padding-bottom: var(--space-s);

        &--underlined {
          border-bottom: 1px solid var(--color-gray-light);
        }
      }
    }
  }
  [class^='delete-'] {
    display: none;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-main);
    padding: 10px 20px;
    margin-left: 10px;
  }

  .delete-0 {
    display: v-bind(displayComp1);
  }
  .delete-1 {
    display: v-bind(displayComp2);
  }
  .delete-2 {
    display: v-bind(displayComp3);
  }
  .delete-3 {
    display: v-bind(displayComp4);
  }
  .delete-4 {
    display: v-bind(displayComp5);
  }
</style>
