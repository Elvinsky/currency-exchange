<template>
  <div class="deposit--pc">
    <h3 class="deposit--pc__header">Deposit USDC</h3>
    <BaseSelect
      closeOnClick
      v-model="userChoise"
      :options="['Etherium', 'Bitcoin', 'BNB Smart Chain']"
    >
      <BaseInput
        readonly
        type="text"
        class="deposit--pc__input"
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
      readonly
      backGroundColor="white"
      v-model="inputValue"
      label="ADRESS"
      @click="copy()"
    >
      <template #prepend-icon><img src="/qr-code 1.png" /> </template>
      <template #append-icon><CopyIcon /> </template>
    </BaseInput>
    <p class="deposit--pc__postfix">Disclaimer: All deposits in USDC will be converted to SFT</p>
  </div>
  <div class="deposit--mobile"></div>
</template>

<script setup lang="ts">
  import BaseInput from '@/components/common/Input/BaseInput.vue';
  import BaseSelect from '@/components/common/Select/BaseSelect.vue';
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import CopyIcon from '@icons/General/CopyIcon.vue';
  import { computed, ref } from 'vue';

  const userChoise = ref<string>('Etherium');

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

  const inputValue = ref<string>('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');

  const copy = () => {
    navigator.clipboard.writeText('bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6');

    inputValue.value = 'COPIED';

    setTimeout(() => {
      inputValue.value = 'bc1qa5wkgaew2dkv56kfvj49j0av5nml45x9ek9hz6';
    }, 3000);
  };
</script>

<style scoped lang="scss">
  .deposit--pc {
    @include w-max($md) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xl);
    background-color: black;
    padding: var(--space-xl);
    height: 360px;
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
  }

  .mobile {
    @include w-min(361px) {
      display: none;
    }
    @include w-max($md) {
      display: block;
    }
  }
</style>
