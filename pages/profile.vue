<template>
    <div class="min-h-screen flex items-center justify-center bg-stone-900 px-4">
      <div class="bg-stone-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        
        <!-- Judul -->
        <h1 class="text-xl font-bold text-white">Data User</h1>
  
        <!-- Daftar Semua User -->
        <h2 class="text-lg font-semibold text-white mt-6">Daftar Semua User</h2>
  
        <ul v-if="users.length > 0" class="mt-4 text-white">
          <li v-for="user in users" :key="user.id_user" class="bg-gray-700 p-2 rounded mb-2">
            {{ user.nama }} - {{ user.email }}
          </li>
        </ul>
  
        <p v-else class="text-red-400 mt-4">Tidak ada user yang ditemukan.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  
  const currentUser = ref(null);
  const users = ref([]);
  const router = useRouter();
  
  // Mengambil data user yang sedang login dari localStorage
  const fetchCurrentUser = () => {
    const userData = localStorage.getItem("user");
  
    if (userData) {
      currentUser.value = JSON.parse(userData);
    } else {
      router.push("/signup"); // Redirect jika user belum login
    }
  };
  
  // Mengambil semua user dari backend (tanpa otorisasi token)
  const fetchAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/user", {
        method: "GET",
      });
  
      const data = await response.json();
  
      if (response.ok) {
        users.value = data.users; // Menggunakan `data.users` sesuai dengan respons backend
      } else {
        console.error("Gagal mengambil data user:", data.message);
      }
    } catch (error) {
      console.error("Error mengambil data user:", error);
    }
  };
  
  // Fungsi logout
  const logout = () => {
    localStorage.removeItem("user");
    router.push("/signup");
  };
  
  onMounted(() => {
    fetchCurrentUser();
    fetchAllUsers();
  });
  </script>
  