<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: $primary-700-color;
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0;
}
</style>
