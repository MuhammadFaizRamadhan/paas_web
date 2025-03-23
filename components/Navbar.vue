<template>
  <nav class="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 flex justify-between items-center z-50">
    <div class="text-lg font-bold">TRYOUT</div>

    <!-- Tombol Menu di Mobile -->
    <button @click="toggleMenu" class="md:hidden text-white">
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Menu Utama -->
    <div class="space-x-6 hidden md:flex">
      <NuxtLink to="/" class="hover:text-gray-300 transition">Home</NuxtLink>
      <!-- <NuxtLink to="/about" class="hover:text-gray-300 transition">About</NuxtLink>
      <NuxtLink to="/contact" class="hover:text-gray-300 transition">Contact</NuxtLink> -->
    </div>

    <!-- Tombol Sign In & Sign Up -->
    <div class="space-x-4 hidden md:flex">
      <NuxtLink to="/signin">
        <button id="button-signin" class="border border-white px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300">Sign in</button>
      </NuxtLink>
      <NuxtLink to="/signup">
        <button class="bg-white text-black px-4 py-2 rounded-lg">Sign up</button>
      </NuxtLink>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
      <NuxtLink to="/" class="hover:text-gray-300 transition" @click="toggleMenu">Home</NuxtLink>
      <!-- <NuxtLink to="/about" class="hover:text-gray-300 transition" @click="toggleMenu">About</NuxtLink>
      <NuxtLink to="/contact" class="hover:text-gray-300 transition" @click="toggleMenu">Contact</NuxtLink> -->
      <NuxtLink to="/signin">
        <button class="border border-white px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-300 w-40" @click="toggleMenu">Sign in</button>
      </NuxtLink>
      <NuxtLink to="/signup">
        <button class="bg-white text-black px-4 py-2 rounded-lg w-40" @click="toggleMenu">Sign up</button>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
