<script setup lang="ts">
const navItems = useNavigation();
</script>

<template>
  <nav class="navigation">
    <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.to">
      {{ item.label }}
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  align-items: center;
  gap: 48px;
  font-size: 1rem;

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
