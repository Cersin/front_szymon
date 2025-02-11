<script setup lang="ts">
const { t } = useI18n();

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    to: '/',
    label: t('header.nav.home'),
  },
  {
    to: '/',
    label: t('header.nav.portfolio'),
  },
  {
    to: '/',
    label: t('header.nav.contact'),
  },
];
</script>

<template>
  <div class="navigation">
    <NuxtLink v-for="(item, index) in navItems" :key="index" :to="item.to">
      {{ item.label }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
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
