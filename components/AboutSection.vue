<script setup lang="ts">
interface Technologies {
  icon: string;
  name: string;
}

const technologies: Technologies[] = [
  {
    icon: 'skill-icons:vuejs-dark',
    name: 'Vue.js',
  },
  {
    icon: 'skill-icons:nuxtjs-dark',
    name: 'Nuxt',
  },
  {
    icon: 'skill-icons:flutter-dark',
    name: 'Flutter',
  },
  {
    icon: 'skill-icons:expressjs-dark',
    name: 'Express',
  },
  {
    icon: 'skill-icons:mongodb',
    name: 'MongoDB',
  },
  {
    icon: 'skill-icons:javascript',
    name: 'JavaScript',
  },
  {
    icon: 'skill-icons:typescript',
    name: 'TypeScript',
  },
];
</script>

<template>
  <section id="about" class="about">
    <WidgetsSectionTitle :title="$t('about.title')" />

    <div class="about__container">
      <div class="about__description">
        <div class="about__description-section">Nazywam się Szymon Wójcik i zajmuje się front-endem.</div>
        <div class="about__description-section">
          Moim głównym zainteresowaniem jest tworzenie stron internetowych i aplikacji mobilnych. Pragnę nieustannie
          rozwijać się w tym kierunku.
        </div>

        <div class="about__description-section">
          Szczególną uwagę przywiązuje do poszerzania wiedzy i umiejętności w dziedzinie nowych technologii, które
          pozwalają usprawniać moje projekty. Aspiruję do przyszłego full-stack developera. Głównie programuje w: Vue,
          Nuxt, Flutter oraz Express. Prócz programowania lubie chodzić po górach, grać w gry i oglądać F1 🙂
        </div>
      </div>

      <div class="about__technologies">
        <Icon v-for="(item, index) in technologies" :key="index" class="about__technologies-icon" :name="item.icon" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include gt-sm {
      flex-direction: row;
    }
  }

  &__description {
    font-size: 1.2rem;

    &-section {
      margin-bottom: 1rem;
    }

    @include gt-sm {
      max-width: 70%;
    }
  }

  &__technologies {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 2rem;
    margin-top: 0.5rem;

    &-icon {
      font-size: 3rem;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
    }

    @include gt-sm {
      margin-top: 0;
      gap: 0.5rem;
      max-width: 10rem;
    }
  }
}
</style>
