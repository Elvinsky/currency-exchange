<template>
  <div class="wrapper">
    <h3 class="wrapper__header">ADD ACTION</h3>
    <div class="add-action">
      <form
        class="add-action__form"
        @submit.prevent
      >
        <BaseSelect
          closeOnClick
          v-model="userInput.module"
          :options="['ALGO', 'TWAP', 'TEST']"
        >
          <BaseInput
            readonly
            class="select"
            label="SELECT MODULE"
            :modelValue="userInput.module"
          >
            <template #append-icon>
              <div class="append"><ArrowDownIcon /></div>
            </template>
          </BaseInput>
        </BaseSelect>
        <BaseInput
          v-model="userInput.dtpMax"
          label="DTP MAX"
          type="number"
        >
          <template #append-icon>
            <div class="append--colored">1.0315</div>
          </template>
        </BaseInput>
        <BaseInput
          v-model="userInput.buyPercent"
          label="BUY PERCENT"
          type="number"
        >
          <template #append-icon>
            <div class="append">%</div>
          </template>
        </BaseInput>
        <BaseInput
          v-model="userInput.dtmMin"
          label="DTP MIN"
          type="number"
        >
          <template #append-icon>
            <div class="append--colored">0.09986</div>
          </template>
        </BaseInput>
        <BaseInput
          v-model="userInput.diff"
          label="DIFF"
          type="number"
        >
          <template #append-icon>
            <div class="append--colored">0.5</div>
          </template>
        </BaseInput>
        <BaseButton variant="primary">Submit</BaseButton>
      </form>
      <div class="add-action__options">
        <BaseCheckbox
          v-model="isBuyWall"
          class="add-action__options__item"
        >
          Buy Wall
        </BaseCheckbox>
        <BaseCheckbox
          v-model="isSellWall"
          class="add-action__options__item"
        >
          Sell Wall
        </BaseCheckbox>
        <BaseCheckbox
          v-model="isSaveDiff"
          class="add-action__options__item"
        >
          Save diff for all pairs
        </BaseCheckbox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import BaseButton from '../common/Button/BaseButton.vue';
  import BaseInput from '../common/Input/BaseInput.vue';
  import BaseSelect from '../common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import BaseCheckbox from '../common/Checkbox/BaseCheckbox.vue';

  const userInput = ref({
    module: 'ALGO',
    dtpMax: 0,
    buyPercent: 54,
    dtmMin: 0,
    diff: 0.3,
  });

  const isBuyWall = ref<boolean>(false);
  const isSellWall = ref<boolean>(false);
  const isSaveDiff = ref<boolean>(false);
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: var(--space-l);
    gap: 30px;
    width: 100%;
    background-color: var(--color-white-main);

    &__header {
      font-family: var(--font-inter-bold);
      font-size: var(--font-size-xs);
      color: var(--color-gray-main);
    }
    .add-action {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: var(--space-s);

      &__form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: var(--space-s);

        ::v-deep(button) {
          padding: 13px var(--space-l);
          margin-top: var(--space-2xl);
        }

        .select {
          svg {
            margin: 5px;
          }

          ::v-deep(path) {
            fill: var(--color-black-main);
          }
        }
      }

      &__options {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        gap: var(--space-xl);
        width: 80.3%;

        &__item {
          font-family: var(--font-inter-medium);
          font-size: var(--font-size-xs);
          color: var(--color-gray-main);
          white-space: nowrap;
        }

        &__item:last-child {
          margin-left: auto;
        }
      }
    }
  }

  .append {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray-main);
    font-family: var(--font-inter-semibold);
    font-size: var(--font-size-s);
    padding: 6px var(--space-xs);

    &--colored {
      background-color: var(--color-gray-lighter);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-gray-main);
      font-family: var(--font-inter-semibold);
      font-size: var(--font-size-s);
      padding: 6px var(--space-xs);
    }
  }
</style>
