<template>
  <BaseDropdown>
    <template #trigger>
      <div class="profile">
        <div class="profile__info">
          <p class="profile__info__name">{{ profileMockedData.name }}</p>
          <div class="profile__info__balance">
            <TetherIcon />
            <p>{{ profileBalance }}</p>
          </div>
        </div>
        <div class="profile__avatar">
          <BaseAvatar :abbr="prepareProfileAbbr(profileMockedData.name)" />
        </div>
        <div class="profile__drop-button">
          <ArrowDownIcon />
        </div>
      </div>
    </template>
  </BaseDropdown>
</template>

<script setup lang="ts">
  import ArrowDownIcon from '@/assets/icons/Header/ArrowDownIcon.vue';
  import TetherIcon from '@/assets/icons/General/TetherIcon.vue';
  import BaseAvatar from '@common/Avatar/BaseAvatar.vue';
  import BaseDropdown from '@/components/common/Dropdown/BaseDropdown.vue';
  import { prepareBalance, prepareProfileAbbr } from '@/utils/profilePreparation';
  import { profileMockedData } from '../consts';
  import { computed } from 'vue';

  const profileBalance = computed(() => {
    if (profileMockedData.balance) {
      return prepareBalance(profileMockedData.balance);
    } else {
      return '-';
    }
  });
</script>

<style scoped lang="scss">
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--space-s);

    &__info {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: center;

      &__name {
        font-family: var(--font-inter-medium);
        font-size: var(--font-size-m);
        color: var(--color-white-main);
      }

      &__balance {
        display: flex;
        flex-direction: row;
        gap: var(--space-xs);
        align-items: center;
        justify-content: center;

        p {
          font-family: var(--font-inter-medium);
          font-size: var(--font-size-xs);
          color: var(--color-white-main);
        }
      }
    }

    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__drop-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
