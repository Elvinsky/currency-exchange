<template>
  <div class="header">
    <div class="header__left">
      <div class="header__left__logo">
        <MainLogoIcon />
      </div>
    </div>
    <div class="header__center"></div>
    <div class="header__right"></div>
  </div>
</template>

<script setup lang="ts">
  import MainLogoIcon from '@/assets/icons/Logo/MainLogoIcon.vue';
</script>

<style scoped lang="scss">
  .header {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--color-black-main);
    height: var(--header-height);
    z-index: 9;
    padding: 25px 32px;
  }
</style>
