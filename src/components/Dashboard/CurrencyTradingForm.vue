<template>
  <form
    class="trading-form"
    @submit.prevent
  >
    <div class="trading-form__select-choise">
      <BaseSlideSelect
        :options="tokenSlideSelectOptions"
        v-model="tokenChoise"
        label="CHOOSE TOKEN"
      >
        <template #BTC-option="{ option }">
          <div class="trading-form__select-choise__item">
            <BTCIcon />
            <p>{{ option.label }}</p>
          </div>
        </template>
        <template #SFT-option="{ option }">
          <div class="trading-form__select-choise__item">
            <SFTIcon />
            <p>{{ option.label }}</p>
          </div>
        </template>
      </BaseSlideSelect>
    </div>
    <div class="trading-form__select-choise">
      <BaseSlideSelect
        :options="orderTypeSlideSelectOptions"
        v-model="orderChoise"
        label="ORDER TYPE"
      >
        <template #BTC-option="{ option }">
          <div class="trading-form__select-choise__item">
            <p>{{ option.label }}</p>
          </div>
        </template>
      </BaseSlideSelect>
    </div>

    <BaseInput
      type="number"
      label="PRICE"
      v-model="userPrice"
    />
    <BaseInput
      type="number"
      label="AMOUNT"
      v-model="userAmount"
    />
    <BaseInput
      type="number"
      label="TOTAL QUOTE"
      v-model="userQuote"
    />
    <div class="trading-form__actions">
      <BaseButton variant="primary">Buy</BaseButton>
      <BaseButton variant="secondary">Sell</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import BaseSlideSelect from '../common/SlideSelect/BaseSlideSelect.vue';
  import { orderTypeSlideSelectOptions, tokenSlideSelectOptions } from './consts';
  import type { ISlideSelectModelValue } from '../common/SlideSelect/types';
  import BTCIcon from '@/assets/icons/General/BTCIcon.vue';
  import SFTIcon from '@/assets/icons/General/SFTIcon.vue';
  import BaseInput from '@common/Input/BaseInput.vue';
  import BaseButton from '../common/Button/BaseButton.vue';

  const tokenChoise = ref<ISlideSelectModelValue>(tokenSlideSelectOptions[0]);
  const orderChoise = ref<ISlideSelectModelValue>(orderTypeSlideSelectOptions[0]);
  const userPrice = ref<number>(0);
  const userAmount = ref<number>(0);
  const userQuote = ref<number>(0);
</script>

<style scoped lang="scss">
  .trading-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: var(--space-s);
    padding: var(--space-l);
    background-color: var(--color-white-main);
    height: 55vh;

    @include w-max(1600px) {
      height: 65vh;
    }

    @include w-max($md) {
      padding: 0 10px;
      height: 53vh;
    }
    @include w-max($lg) {
      flex-direction: row;
      flex-wrap: wrap;
      height: fit-content;
      align-items: center;
      justify-content: center;

      div {
        max-width: 300px;
      }

      .trading-form__actions {
        padding-top: 20px;
        height: 100%;
      }
    }
    &__select-choise {
      width: 100%;

      &__item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: var(--space-s);
      }
    }

    &__actions {
      margin-top: var(--space-2xs);
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: var(--space-s);

      ::v-deep(button) {
        padding: var(--space-xs);
        font-size: var(--font-size-xs);
      }
    }
  }
</style>
