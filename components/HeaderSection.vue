<script setup lang="ts">
import HeaderImage from './widgets/header/HeaderImage.vue';
</script>

<template>
  <section class="header">
    <div class="header__description">
      <div class="font-header">{{ $t('header.welcome') }}</div>
      <div class="font-header-large">{{ $t('header.name') }}</div>
      <div class="font-header">
        {{ $t('header.profession', 1) }} <span class="font-bold">{{ $t('header.profession', 2) }}</span>
      </div>
      <button class="header__button font-subtitle-1">{{ $t('header.collaborate') }}</button>
    </div>

    <div class="header__photo">
      <HeaderImage />
    </div>
  </section>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @include gt-sm {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3rem;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      color: $primary-color;
    }
  }

  &__button {
    margin-top: 0.8rem;
    align-self: flex-start;
    padding: 0.8rem 1.2rem;
    background-color: $primary-color;
    color: $white-color;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: $primary-800-color;
    }
  }
}
</style>
