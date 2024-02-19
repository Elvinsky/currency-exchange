<template>
  <HeaderComponent />
  <div class="login">
    <div class="login__content">
      <!-- <BaseInput>
        <template #prepend-icon>
          <CountryIcon />
        </template>
      </BaseInput>
      <BaseSelect
        v-model="select"
        :options="['1', '2', '3', '4']"
      >
        <BaseInput readonly>
          <template #prepend-icon>
            <CountryIcon />
          </template>
          <template #append-icon>
            <ArrowDownIcon></ArrowDownIcon>
          </template>
        </BaseInput>
      </BaseSelect> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from '@/components/Header/HeaderComponent.vue';
</script>

<style scoped lang="scss">
  .test {
    width: 200px;
    height: 600px;
    background-color: black;
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-light);
    height: 100vh;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--color-white-main);
      padding: var(--space-5xl) var(--space-l);
      width: 400px;
    }
  }
</style>
