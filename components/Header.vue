<script setup lang="ts">
import DesktopNavigation from './widgets/DesktopNavigation.vue';
import SocialLinks from './widgets/SocialLinks.vue';
import MobileNavToggle from './widgets/MobileNavToggle.vue';
</script>

<template>
  <header class="nav-header">
    <img @click="$router.push('/')" class="nav-header__image" src="/public/logo_front_szymon.png" />

    <div class="nav-header__sections-desktop">
      <DesktopNavigation />
    </div>

    <div class="nav-header__sections-mobile">
      <MobileNavToggle />
    </div>

    <div class="nav-header__socials">
      <SocialLinks />
    </div>
  </header>
</template>

<style scoped lang="scss">
@keyframes slideInFromLeft {
  0% {
    transform: scale(0.5) rotate(1turn);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

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
    animation: 1.5s ease-out slideInFromLeft;

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
