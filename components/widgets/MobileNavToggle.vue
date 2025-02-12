<script setup lang="ts">
const navState = useMobileNav();
</script>

<template>
  <div>
    <input id="check" type="checkbox" :class="{ checked: navState }" @click="navState = !navState" />
    <label for="check" class="button">
      <span />
      <span />
      <span />
    </label>
  </div>
</template>

<style lang="scss" scoped>
#check {
  display: none;
}

.button {
  position: fixed;
  top: 3rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  color: black;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;
  padding-top: 0.5rem;
  line-height: 0.5rem;
  text-align: left;
  z-index: 201;
}

.button span {
  height: 0.2rem;
  width: 100%;
  background: black;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.62, 0.43, 0.35, 1.47);
}

.checked ~ .button span:nth-child(1) {
  width: 100%;
  transform: rotate(45deg) translateY(0.8rem) translateX(0);
}
.checked ~ .button span:nth-child(2) {
  width: 0;
}

.checked ~ .button span:nth-child(3) {
  width: 100%;
  transform: rotate(-45deg) translateY(-0.8rem) translateX(-4px);
}
</style>
