<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div class="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 class="text-2xl font-bold text-center">What to do?</h1>
  
        <!-- Form Input -->
        <form @submit.prevent="handleSubmit" class="mt-6 space-y-4">
          <input v-model="nama" type="text" placeholder="Name" 
            class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" required />
          <input v-model="kegiatan" type="text" placeholder="Kegiatan" 
            class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" required />
          
          <button type="submit" 
            class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold p-3 rounded-lg transition">
            Submit
          </button>
        </form>
  
        <!-- Error Message -->
        <div v-if="errorMessage" class="text-red-400 text-center mt-3">
          {{ errorMessage }}
        </div>
  
        <!-- List Kegiatan -->
        <h2 class="text-xl font-bold mt-6 text-center">Daftar Kegiatan</h2>
        <ul v-if="todos.length > 0" class="mt-4 space-y-2">
          <li v-for="todo in todos" :key="todo.id_todo" 
            class="bg-gray-700 p-3 rounded flex justify-between items-center">
            <span>{{ todo.nama }} - {{ todo.kegiatan }}</span>
            <button @click="deleteTodo(todo.id_todo)" class="text-red-400 hover:text-red-600">
              ✖
            </button>
          </li>
        </ul>
        <p v-else class="text-gray-400 text-center mt-4">Belum ada kegiatan.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  // State
  const nama = ref("");
  const kegiatan = ref("");
  const todos = ref([]);
  const errorMessage = ref("");
  
  // Ambil Data dari Backend
  const API_URL = "https://paaswebbackend-production.up.railway.app";

// Ambil Data dari Backend
const fetchTodos = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    todos.value = data.result;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// Kirim Data ke Backend
const handleSubmit = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama: nama.value, kegiatan: kegiatan.value }),
    });

    if (!response.ok) throw new Error("Gagal menambahkan kegiatan.");

    // Reset input dan refresh data
    nama.value = "";
    kegiatan.value = "";
    fetchTodos();
  } catch (error) {
    errorMessage.value = error.message;
  }
};

// Hapus Data dari Backend
const deleteTodo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Gagal menghapus kegiatan.");

    // Refresh daftar setelah menghapus
    fetchTodos();
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

  // Ambil data saat pertama kali halaman dimuat
  onMounted(fetchTodos);
  </script>
  