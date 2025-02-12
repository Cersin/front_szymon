<template>
  <section class="about">
    <div class="about__description">
      <div class="font-header">Cześć, nazywam się</div>
      <div class="font-header-large">SZYMON WÓJCIK.</div>
      <div class="font-header">Jestem <span class="font-bold">Front-end Developerem</span></div>
      <button class="about__button font-subtitle-1">Podejmij współpracę</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;

  &__description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    span {
      color: $primary-color;
    }
  }

  &__button {
    margin-top: 0.8rem;
    align-self: flex-start;
    padding: 0.8rem 1.2rem;
    background-color: $primary-color;
    color: $white-color;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: $primary-800-color;
    }
  }
}
</style>
