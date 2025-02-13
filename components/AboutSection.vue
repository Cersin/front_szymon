<script setup lang="ts">
import AboutImage from './widgets/about/AboutImage.vue';
</script>

<template>
  <section class="about">
    <div class="about__description">
      <div class="font-header">{{ $t('about.welcome') }}</div>
      <div class="font-header-large">{{ $t('about.name') }}</div>
      <div class="font-header">
        {{ $t('about.profession', 1) }} <span class="font-bold">{{ $t('about.profession', 2) }}</span>
      </div>
      <button class="about__button font-subtitle-1">{{ $t('about.collaborate') }}</button>
    </div>

    <div class="about__photo">
      <AboutImage />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
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
