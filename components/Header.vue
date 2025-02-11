<script setup lang="ts">
import DesktopNavigation from './widgets/DesktopNavigation.vue';
import SocialLinks from './widgets/SocialLinks.vue';
</script>

<template>
  <header class="nav-header">
    <img @click="$router.push('/')" class="nav-header__image" src="/public/logo_front_szymon.png" />

    <div class="nav-header__sections-desktop">
      <DesktopNavigation />
    </div>

    <div class="nav-header__sections-mobile"></div>

    <div class="nav-header__socials">
      <SocialLinks />
    </div>
  </header>
</template>

<style lang="scss">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 76px;
  overflow: hidden;
  padding: 32px;

  &__image {
    object-fit: contain;
    height: 90%;
    transition: 1s all;

    cursor: pointer;

    &:hover {
      transform: scale(1.2) rotate(0.5turn);
    }
  }

  &__sections {
    &-desktop {
      display: none;

      @include gt-sm {
        display: flex;
      }
    }

    &-mobile {
      @include gt-sm {
        display: none;
      }
    }
  }

  &__socials {
    display: none;

    @include gt-sm {
      display: flex;
    }
  }
}
</style>
