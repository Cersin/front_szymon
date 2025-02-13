<script setup lang="ts">
import { AboutSection } from '#components';
import HeaderSection from './components/HeaderSection.vue';
import NavSection from './components/NavSection.vue';
import MobileNavigation from './components/widgets/nav/MobileNavigation.vue';
</script>

<template>
  <div>
    <MobileNavigation />
    <NavSection />
    <HeaderSection />
    <AboutSection />
  </div>
</template>

<style scoped lang="scss"></style>
