<script setup lang="ts">
interface IconRoute {
  url: string;
  icon: string;
  cb: () => void;
}

const links: IconRoute[] = [
  {
    url: 'https://github.com/cersin',
    icon: 'uil:github',
    cb: () => navigateTo('https://github.com/cersin', { external: true }),
  },
  {
    url: 'https://www.linkedin.com/in/szymon-wójcik-39192617a',
    icon: 'uil:linkedin',
    cb: () => navigateTo('https://www.linkedin.com/in/szymon-wójcik-39192617', { external: true }),
  },
  {
    url: 'wojcik.szymon1@gmail.com',
    icon: 'uil:fast-mail-alt',
    cb: () => navigateTo('mailto:wojcik.szymon1@gmail.com', { external: true }),
  },
];
</script>

<template>
  <div class="icons">
    <Icon v-for="(link, index) in links" :key="index" class="icons__icon" :name="link.icon" @click="link.cb()" />
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  font-size: 40px;
  color: rgba($primary-color, 0.5);
  gap: 12px;

  &__icon {
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      transform: scale(1.4) rotate(0.05turn);
      color: $primary-color;
    }
  }
}
</style>
