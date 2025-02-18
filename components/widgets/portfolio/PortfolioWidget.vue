<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  project: Project;
  index: number;
}>();
</script>

<template>
  <div class="portfolio" :class="[index % 2 === 0 ? 'portfolio--start' : 'portfolio--end']">
    <div
      class="portfolio__dotted-line"
      :class="[index % 2 === 0 ? 'portfolio__dotted-line--top' : 'portfolio__dotted-line--bottom']"
    />
    <div
      class="portfolio__dotted-line"
      :class="[index % 2 === 0 ? 'portfolio__dotted-line--left' : 'portfolio__dotted-line--right']"
    />
    <img :src="project.img" alt="project-image" />

    <div class="portfolio__content">
      <div class="portfolio__content--title font-subtitle-2">
        {{ project.title }}
      </div>
      <div class="portfolio__content--description font-normal">
        {{ project.description }}
      </div>
    </div>

    <div
      class="portfolio__technologies"
      :class="[index % 2 === 0 ? 'portfolio__technologies--bottom' : 'portfolio__technologies--top']"
    >
      <div class="portfolio__technologies__icons">
        <Icon
          v-for="technology in project.technologiesIcons"
          :key="technology"
          :name="technology"
          class="portfolio__technologies--icon"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  position: relative;
  height: 425px;
  width: 100%;
  padding: 3rem;
  margin: 0 2rem;
  display: flex;

  &--start {
    align-items: start;
  }

  &--end {
    align-items: end;
  }

  @include gt-xs {
    width: 500px;
    height: 500px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    &--title {
      color: $primary-color;
      font-weight: 500;
      width: 90%;
      overflow-wrap: break-word;
    }

    &--description {
      color: rgba(0, 0, 0, 0.438);
      font-family: 'Hind', sans-serif;
      display: flex;
      flex-wrap: wrap;
      width: 80%;
    }
  }

  &__technologies {
    background-color: $primary-color;
    position: absolute;

    width: 100%;
    height: 30%;
    z-index: -1;
    border-radius: 12px;

    display: flex;
    justify-content: flex-end;

    &--icon {
      z-index: 999;
      &:hover {
        transform: scale(1.2);
      }
    }

    &--top {
      top: 20px;
      left: 20px;
      align-items: flex-start;
    }

    &--bottom {
      bottom: 20px;
      right: 20px;
      align-items: flex-end;
    }

    &__icons {
      font-size: 3rem;
      margin: 1rem 2rem;

      display: flex;
      gap: 0.5rem;
    }
  }

  &__dotted-line {
    position: absolute;
    display: none;

    border: 1px solid black;

    @include gt-xs {
      display: block;
    }

    &--top {
      width: 60%;
      top: 6px;
      left: 6px;

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        right: -6px;
        overflow: visible;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background-color: black;
      }
    }

    &--bottom {
      width: 60%;
      bottom: 6px;
      right: 6px;

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: -6px;
        overflow: visible;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background-color: black;
      }
    }

    &--left {
      height: 30%;
      top: 6px;
      left: 6px;

      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: -6px;
        overflow: visible;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background-color: black;
      }
    }

    &--right {
      height: 30%;
      bottom: 6px;
      right: 6px;

      &::after {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        overflow: visible;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        background-color: black;
      }
    }
  }

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
