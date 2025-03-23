<template>
    <div class="min-h-screen flex items-center justify-center bg-stone-900 px-4">
      <div class="bg-stone-800 text-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        
        <!-- Judul -->
        <h1 class="text-xl font-bold text-white-900">Data User</h1>
  
  
        <h2 class="text-lg font-semibold text-white-900 mt-6">Daftar Semua User</h2>
  
        <!-- Daftar Semua User -->
        <ul v-if="users.length > 0" class="mt-4 text-white-900">
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
  import Navbar from "@/components/Navbar.vue";
  
  const currentUser = ref(null);
  const users = ref([]);
  const router = useRouter();
  
  // Ambil data user yang sedang login dari localStorage
  const fetchCurrentUser = () => {
    const userData = localStorage.getItem("user");
  
    if (userData) {
      currentUser.value = JSON.parse(userData);
    } else {
      router.push("/signup"); // Redirect jika user belum login
    }
  };
  
  // Ambil semua user dari backend
  const fetchAllUsers = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        router.push("/signup");
        return;
      }
  
      const response = await fetch("http://localhost:8080/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
  
      const data = await response.json();
      
      if (response.ok) {
        users.value = data.result;
      } else {
        console.error("Gagal mengambil data user:", data.message);
      }
    } catch (error) {
      console.error("Error mengambil data user:", error);
    }
  };
  
  onMounted(() => {
    fetchCurrentUser();
    fetchAllUsers();
  });
  </script>
  