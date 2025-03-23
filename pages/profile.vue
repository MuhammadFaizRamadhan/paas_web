<template>
    <Navbar />
    <div class="min-h-screen flex items-center justify-center bg-stone-900 px-4">
      <div class="bg-stone-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        
        <!-- Judul -->
        <h1 class="text-xl font-bold text-white-900">Profile</h1>
  
        <!-- Informasi Pengguna -->
        <p class="text-white-900 text-lg mt-4">Nama: {{ user.nama }}</p>
        <p class="text-white-900 text-lg">Email: {{ user.email }}</p>
  
        <!-- Tombol Edit -->
        <button 
          @click="editProfile" 
          class="mt-6 bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg transition hover:bg-gray-600">
          Edit Data
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from "@/components/Navbar.vue";
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const user = ref({
    nama: "nama",
    email: "email"
  });
  
  onMounted(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      user.value = JSON.parse(userData);
    }
  });
  
  const editProfile = () => {
    router.push("/edit-profile"); // Redirect ke halaman edit profile
  };
  </script>
  