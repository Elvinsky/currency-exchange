<template>
  <div class="table">
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
            v-for="header in headers"
            class="cell"
            :class="{
              'cell__lined cell__lined--underlined': rows[rowIdx + 1] && lined,
              cell__lined: !rows[rowIdx + 1] && lined,
            }"
            :key="header.id"
            :style="{ textAlign: header.alignRows ? header.alignRows : 'end' }"
          >
            <slot
              :name="`${header.field}-row`"
              :row="row"
              :header="header"
            >
              {{ row[header.field] }}
            </slot>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { ITableProps } from './types';
  const props = defineProps<ITableProps>();

  const gridTemplateColumns = computed(() =>
    props.headers.reduce((acc, column) => {
      const columnWidth = column.width || '1fr';
      return `${acc} ${columnWidth}`;
    }, '')
  );
</script>

<style scoped lang="scss">
  .table {
    overflow: hidden;
    display: grid;
    grid-template-rows: auto auto;
    max-height: v-bind(maxHeight);
    overflow-y: hidden;
    width: 100%;

    &__wrapper {
      display: grid;
      grid-template-columns: v-bind(gridTemplateColumns);
      overflow: auto;
    }

    .cell {
      padding-top: 4px;
      padding-bottom: 4px;
      text-align: end;
      font-family: var(--font-inter-medium);
      font-size: var(--font-size-s);

      &__header {
        margin-bottom: 20px;
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
</style>
