<template>
  <div class="withdraw">
    <h3 class="withdraw__header">Withdraw USDC</h3>
    <BaseSelect
      closeOnClick
      v-model="userChoise"
      :options="['Etherium', 'Bitcoin', 'BNB Smart Chain']"
    >
      <BaseInput
        readonly
        type="text"
        class="withdraw__input"
        :modelValue="userChoise"
        label="SELECT CHAIN"
        backGroundColor="white"
      >
        <template #prepend-icon>{{ prependInput }}</template>
        <template #append-icon><ArrowDownIcon /></template>
      </BaseInput>

      <template #Etherium-option>
        <div class="select-option">
          <div class="select-option__left">
            <p>ERC</p>
            <p>Etherium</p>
          </div>
          <div class="select-option__right">
            <p>ENROLLMENT TIME <span>~5 min</span></p>
            <p>FEE <span>0.005 USDT</span></p>
          </div>
        </div>
      </template>
      <template #Bitcoin-option>
        <div class="select-option">
          <div class="select-option__left">
            <p>BTC</p>
            <p>Bitcoin</p>
          </div>
          <div class="select-option__right">
            <p>ENROLLMENT TIME <span>~3 min</span></p>
            <p>FEE <span>0.01 USDT</span></p>
          </div>
        </div>
      </template>
      <template #BNBSmartChain-option>
        <div class="select-option">
          <div class="select-option__left">
            <p>BSC</p>
            <p>BND Smart Chain</p>
          </div>
          <div class="select-option__right">
            <p>ENROLLMENT TIME <span>~1 min</span></p>
            <p>FEE <span>0.0001 USDT</span></p>
          </div>
        </div>
      </template>
    </BaseSelect>
    <BaseInput
      type="text"
      class="withdraw__input"
      v-model="userAdress"
      label="ADRESS"
      backGroundColor="white"
    />
    <BaseInput
      type="number"
      class="withdraw__input"
      v-model="userAmount"
      label="AMOUNT   (549,328.34 USDT)"
      backGroundColor="white"
    />
    <div class="withdraw__fee">
      <p>TRANSACTION FEE</p>
      <p>~0.19USDT</p>
    </div>
    <div class="withdraw__received">
      <p>RECEIVED</p>
      <p>15.499.81</p>
    </div>
    <BaseButton variant="primary">Withdraw</BaseButton>
    <p class="withdraw__postfix">Disclaimer: All withdraws in USDC will be converted to SFT</p>
  </div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import { computed, ref } from 'vue';
  import BaseButton from '@/components/common/Button/BaseButton.vue';

  const userChoise = ref<string>('Etherium');
  const userAdress = ref<string>('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');
  const userAmount = ref<number>(0);

  const prependInput = computed<string>(() => {
    switch (userChoise.value) {
      case 'Etherium':
        return 'ERC';
      case 'Bitcoin':
        return 'BTC';
      case 'BNB Smart Chain':
        return 'BSC';
      default:
        return '';
    }
  });
</script>

<style scoped lang="scss">
  .withdraw {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    background-color: black;
    padding: var(--space-xl);
    height: 540px;
    width: 540px;

    &__header {
      font-size: var(--space-ml);
      font-family: var(--font-inter-semibold);
      color: var(--color-white-main);
      text-align: start;
      width: 100%;
    }

    &__input {
      text-align: center;
      ::v-deep(path) {
        fill: var(--color-black-main);
      }
    }

    &__postfix {
      font-family: var(--font-inter-medium);
      color: var(--color-white-main);
      font-size: var(--font-size-3xs);
      text-align: center;
    }

    &__fee,
    &__received {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      color: var(--color-gray-light);
      font-size: var(--font-size-xs);
      font-family: var(--font-inter-bold);
    }
  }

  .select-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-2xs);
    width: 100%;

    &__left {
      display: flex;
      flex-direction: column;
      gap: var(--space-xs);
      align-items: start;
      justify-content: space-between;
      height: 100%;
      text-align: start;
      font-family: var(--font-inter-semibold);

      p:first-child {
        font-size: var(--font-size-s);
        color: var(--color-black-main);
      }

      p:last-child {
        font-size: var(--font-size-xs);
        color: var(--color-gray-main);
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: var(--space-xs);
      font-family: var(--font-inter-semibold);
      text-align: start;

      p {
        font-size: var(--font-size-2xs);
        color: var(--color-gray-main);

        span {
          font-size: var(--font-size-xs);
          color: var(--color-black-main);
        }
      }
    }
  }
</style>
