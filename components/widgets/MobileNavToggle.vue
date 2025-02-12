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
  top: 48px;
  right: 32px;
  width: 36px;
  height: 36px;
  color: black;
  display: inline-block;
  cursor: pointer;
  transition: all 0.2s ease-in;
  padding-top: 8px;
  line-height: 8px;
  text-align: left;
  z-index: 201;
}

.button span {
  height: 3px;
  width: 100%;
  background: black;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.62, 0.43, 0.35, 1.47);
}

.checked ~ .button span:nth-child(1) {
  width: 100%;
  transform: rotate(45deg) translateY(10px) translateX(0);
}
.checked ~ .button span:nth-child(2) {
  width: 0;
}

.checked ~ .button span:nth-child(3) {
  width: 100%;
  transform: rotate(-45deg) translateY(-10px) translateX(-4px);
}
</style>
