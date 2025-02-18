<script setup lang="ts">
import { AboutSection, PortfolioSection, NavSection, HeaderSection } from '#components';
import MobileNavigation from './components/widgets/nav/MobileNavigation.vue';
</script>

<template>
  <div>
    <MobileNavigation />
    <NavSection />
    <HeaderSection />
    <AboutSection />
    <PortfolioSection />
  </div>
</template>

<style scoped lang="scss"></style>
