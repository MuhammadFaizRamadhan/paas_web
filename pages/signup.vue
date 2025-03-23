<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4">
    <div class="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-2xl font-bold text-center">Create an account</h1>
      <p class="text-center text-gray-400 text-sm mt-2">
        Already have an account? 
        <NuxtLink to="/signin" class="text-purple-400 hover:underline">Log in</NuxtLink>
      </p>

      <form @submit.prevent="handleSignup" class="mt-6 space-y-4">
        <input v-model="nama" type="text" placeholder="Name" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" required />
        <input v-model="email" type="email" placeholder="Email" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" required />
        
        <div class="relative">
          <input v-model="password" type="password" placeholder="Enter your password" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" required />
        </div>

        <button type="submit" class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold p-3 rounded-lg transition">
          Create account
        </button>
      </form>

      <div v-if="errorMessage" class="text-red-400 text-center mt-3">{{ errorMessage }}</div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const nama = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

const handleSignup = async () => {
  try {
    const response = await fetch("http://localhost:8080/user/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama: nama.value, email: email.value, password: password.value }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/profile");
    } else {
      errorMessage.value = data.message || "Signup failed";
    }
  } catch (error) {
    errorMessage.value = "Something went wrong. Please try again.";
  }
};
</script>