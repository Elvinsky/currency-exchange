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
  import type { ITableProps } from './types';
  defineProps<ITableProps>();
</script>

<style scoped lang="scss">
  .table {
    overflow: hidden;
    display: grid;
    grid-template-rows: auto auto;
    max-height: v-bind(maxHeight);
    overflow-y: hidden;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      overflow: auto;
    }

    .cell {
      padding: 4px;
      text-align: end;
      font-family: var(--font-inter-medium);
      font-size: var(--font-size-s);

      &__header {
        margin-bottom: 20px;
        font-family: var(--font-inter-bold);
        font-size: var(--font-size-xs);
        color: var(--color-gray-main);
      }
    }
  }
</style>
