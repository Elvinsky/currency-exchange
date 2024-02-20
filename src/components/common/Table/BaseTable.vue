<template>
  <div class="table">
    <div class="table__wrapper">
      <div
        v-for="header in headers"
        :key="header.id"
        class="cell cell__header"
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
    grid-gap: 10px;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 1px;
      overflow: auto;
    }
  }
</style>
