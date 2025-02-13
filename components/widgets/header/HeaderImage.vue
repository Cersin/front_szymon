<template>
  <div class="image__container">
    <div class="image">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes image-animation {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}

.image {
  &__container {
    @include gt-sm {
      transform: translateY(-40px);
    }
  }

  --n: 5;
  --d: 2.5rem;
  --s: 1.1;

  width: 100%;
  height: 30rem;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-image: url(me_about.webp);
  background-size: 0 0;
  transition: 0.5s;
  margin-top: 3rem;

  @include gt-sm {
    --n: 5;
    --d: 2rem;
    --s: 1.1;

    width: 500px;
    margin-top: 0rem;
    height: 450px;
  }

  @include gt-md {
    width: 30rem;
    margin-top: 0rem;
    height: 30rem;
  }

  @include gt-lg {
    width: 900px;
    margin-top: 0rem;
    height: 600px;
  }
}

.image > * {
  position: absolute;
  top: 0;
  left: 100%;
  right: 0;
  bottom: var(--d);
  background-image: inherit;
  background-size: cover;
  background-position: center;
  -webkit-mask: linear-gradient(#fff, #fff) no-repeat;
  -webkit-mask-size: calc(100% / var(--n) + 1px) 100%;
  -webkit-mask-position: var(--p) 50%;
  mask: linear-gradient(#fff, #fff) no-repeat;
  mask-size: calc(100% / var(--n) + 1px) 100%;
  mask-position: var(--p) 50%;
  transition: inherit;
  transform-origin: var(--p) 50%;
  animation-fill-mode: forwards;
}

/* we define as many as possible to cover the max value used */
.image > :nth-child(1) {
  animation: 2s image-animation forwards 0s;

  --p: calc(0 * 100% / (var(--n) - 1));
}
.image > :nth-child(2) {
  animation: 2s image-animation forwards 0.5s;

  --p: calc(1 * 100% / (var(--n) - 1));
}
.image > :nth-child(3) {
  animation: 2s image-animation forwards 1s;

  --p: calc(2 * 100% / (var(--n) - 1));
}
.image > :nth-child(4) {
  animation: 2s image-animation forwards 1.5s;

  --p: calc(3 * 100% / (var(--n) - 1));
}
.image > :nth-child(5) {
  animation: 2s image-animation forwards 2s;

  --p: calc(4 * 100% / (var(--n) - 1));
}
.image > :nth-child(6) {
  animation: 2s image-animation forwards 2.5s;

  --p: calc(5 * 100% / (var(--n) - 1));
}

.image > :nth-child(7) {
  animation: 2s image-animation forwards 3s;

  --p: calc(6 * 100% / (var(--n) - 1));
}
.image > :nth-child(8) {
  animation: 2s image-animation forwards 3.5s;

  --p: calc(7 * 100% / (var(--n) - 1));
}
.image > :nth-child(9) {
  animation: 2s image-animation forwards 4s;

  --p: calc(8 * 100% / (var(--n) - 1));
}
.image > :nth-child(10) {
  animation: 2s image-animation forwards 4.5s;

  --p: calc(9 * 100% / (var(--n) - 1));
}
/**/

.image :nth-child(odd) {
  transform: translateY(var(--d)) scale(calc(1 / var(--s)));
}
.image :nth-child(even) {
  transform: translateY(calc(-1 * var(--d))) scale(calc(1 / var(--s)));
}
</style>
