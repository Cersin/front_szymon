<script setup lang="ts">
import DesktopNavigation from './widgets/nav/DesktopNavigation.vue';
import SocialLinks from './widgets/nav/SocialLinks.vue';
import MobileNavToggle from './widgets/nav/MobileNavToggle.vue';
</script>

<template>
  <header id="header" class="nav-header">
    <img class="nav-header__image" src="/public/logo_front_szymon.png" @click="$router.push('/')" >

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

  height: 4rem;
  overflow: hidden;
  padding: 2rem 0;

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
