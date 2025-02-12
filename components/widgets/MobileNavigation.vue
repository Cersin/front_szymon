<script setup lang="ts">
const navState = useMobileNav();
const navItems = useNavigation();
</script>

<template>
  <Transition>
    <nav v-if="navState" class="mobile-navigation">
      <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.to" @click="navState = false">
        {{ item.label }}
      </NuxtLink>
    </nav>
  </Transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%, 0);
  opacity: 0;
}

.mobile-navigation {
  @include gt-sm {
    display: none;
  }

  z-index: 200;
  position: fixed;
  right: 0;
  height: 100%;
  width: 60%;
  background-color: $contrast-color;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  a {
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: black;

    &:hover {
      color: $primary-color;
      transform: scale(1.4) rotate(0.01turn);
    }
  }
}
</style>
