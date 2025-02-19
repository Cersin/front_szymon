<script setup lang="ts">
interface Props {
  animationName?: string;
  delay?: string;
}

withDefaults(defineProps<Props>(), {
  animationName: 'fade',
  delay: '0',
});

const animate = ref<boolean>(false);
const target = ref<Element>();

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) animate.value = entry.isIntersecting;
    },
    {
      threshold: 0.5,
    },
  );

  observer.observe(target.value as Element);
});
</script>

<template>
  <div ref="target">
    <transition :name="animationName">
      <div v-appear="animate" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.animated-component.fade-enter-from,
.animated-component.zoom-enter-from,
.animated-component.slide-left-enter-from,
.animated-component.slide-right-enter-from {
  transition: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 700ms ease;
  transition-delay: v-bind(delay);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 1.5s ease;
  transition-delay: v-bind(delay);
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.6);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.6s ease;
  transition-delay: v-bind(delay);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100vw);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.6s ease;
  transition-delay: v-bind(delay);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100vw);
}
</style>
