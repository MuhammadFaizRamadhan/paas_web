<template>
  <div @mousemove="updateCursor">
      <!-- Objek yang mengikuti kursor -->
      <div
        class="absolute w-8 h-8 bg-violet-900 rounded-full blur-md transition-transform duration-100 pointer-events-none backdrop-blur-xs"
        :style="{ transform: `translate(${cursorX}px, ${cursorY}px)` }"
      ></div>
  <NuxtPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);

const updateCursor = (event) => {
  cursorX.value = event.clientX - 10; // Pusatkan objek
  cursorY.value = event.clientY - 10;
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  /* opacity: 0; */
  filter: blur(1rem);
}
</style>