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
    <BaseSelect
      closeOnClick
      v-model="userFormChoiseLimit"
      :options="['Limit']"
      class="mobile-select"
    >
      <BaseInput
        readonly
        :modelValue="userFormChoiseLimit"
      >
        <template #append-icon>
          <ChevronDownIcon />
        </template>
      </BaseInput>
    </BaseSelect>
    <BaseInput
      type="number"
      :label="isMobile ? '' : 'PRICE'"
      :placeholder="isMobile ? 'Price' : '0'"
      v-model="userPrice"
    >
      <template
        #append-icon
        v-if="isMobile"
      >
        <PlusMinusIcon />
      </template>
    </BaseInput>
    <BaseInput
      type="number"
      :label="isMobile ? '' : 'AMOUNT'"
      :placeholder="isMobile ? 'Amount' : '0'"
      v-model="userAmount"
    >
      <template
        #append-icon
        v-if="isMobile"
      >
        <BaseSelect
          closeOnClick
          v-model="userFormChoiseCoin"
          :options="['BTC', 'SFT']"
          :width="'fit-content'"
        >
          <div class="select-wrapper">{{ userFormChoiseCoin }} <ChevronDownIcon /></div>
        </BaseSelect>
      </template>
    </BaseInput>
    <BaseInput
      type="number"
      :label="isMobile ? '' : 'TOTAL QUOTE'"
      :placeholder="isMobile ? 'Total' : ''"
      v-model="userQuote"
    >
      <template
        #append-icon
        v-if="isMobile"
      >
        0
      </template>
    </BaseInput>
    <div class="trading-form__actions">
      <BaseButton variant="primary">Buy</BaseButton>
      <BaseButton variant="secondary">Sell</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import BaseSlideSelect from '../common/SlideSelect/BaseSlideSelect.vue';
  import { orderTypeSlideSelectOptions, tokenSlideSelectOptions } from './consts';
  import type { ISlideSelectModelValue } from '../common/SlideSelect/types';
  import BTCIcon from '@/assets/icons/General/BTCIcon.vue';
  import SFTIcon from '@/assets/icons/General/SFTIcon.vue';
  import BaseInput from '@common/Input/BaseInput.vue';
  import BaseButton from '../common/Button/BaseButton.vue';
  import BaseSelect from '../common/Select/BaseSelect.vue';
  import ChevronDownIcon from '@/assets/icons/Adaptive/ChevronDownIcon.vue';
  import PlusMinusIcon from '@/assets/icons/Adaptive/PlusMinusIcon.vue';

  const tokenChoise = ref<ISlideSelectModelValue>(tokenSlideSelectOptions[0]);
  const orderChoise = ref<ISlideSelectModelValue>(orderTypeSlideSelectOptions[0]);
  const userPrice = ref();
  const userAmount = ref();
  const userQuote = ref();

  const userFormChoiseLimit = ref<string>('Limit');
  const userFormChoiseCoin = ref<string>('SFT');

  const isMobile = computed(() => window.innerWidth <= 550);
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

        @include w-max($sm) {
          padding-top: 0px;

          button {
            padding-top: 8px;
            padding-bottom: 8px;
          }
        }
      }
    }

    @include w-max($sm) {
      padding-top: 20px;
    }
    &__select-choise {
      width: 100%;

      @include w-max($sm) {
        display: none;
      }

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

      @include w-max($sm) {
        margin-top: 0;
        flex-direction: column;
      }
    }
  }

  .select-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 14px;
    font-family: var(--font-inter-semibold);
    width: fit-content;
    gap: 4px;
  }

  .mobile-select {
    display: none;

    @include w-max($sm) {
      display: block;
    }
  }
</style>
