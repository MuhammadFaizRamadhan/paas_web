<template>
  <div class="min-h-screen flex items-center justify-center bg-stone-900 px-4">
    <div class="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Title -->
      <h1 class="text-2xl font-bold text-center">Create an account</h1>
      <p class="text-center text-gray-400 text-sm mt-2">
        Already have an account? 
        <NuxtLink to="/signin" class="text-purple-400 hover:underline">Log in</NuxtLink>
      </p>

      <!-- Form -->
      <form class="mt-6 space-y-4">
        
          <input type="text" placeholder="Name" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" />
      
        <input type="email" placeholder="Email" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" />
        <div class="relative">
          <input type="text" placeholder="Enter your password" class="w-full bg-gray-700 p-3 rounded border border-gray-600 focus:outline-none focus:border-purple-400" />
          <!-- <span class="absolute right-4 top-3 text-gray-400 cursor-pointer">👁</span> -->
        </div>

        <!-- Checkbox -->
        <!-- <div class="flex items-center text-sm text-gray-400">
          <input type="checkbox" id="terms" class="mr-2 accent-purple-500" />
          <label for="terms">I agree to the <span class="text-purple-400 cursor-pointer hover:underline">Terms & Conditions</span></label>
        </div> -->

        <!-- Submit Button -->
        <button class="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold p-3 rounded-lg transition">Create account</button>

        <!-- Divider -->
        <div class="flex items-center my-4">
          <hr class="flex-1 border-gray-600" />
          <span class="mx-4 text-gray-400 text-sm">Or register with</span>
          <hr class="flex-1 border-gray-600" />
        </div>

        <!-- Social Login -->
        <div class="flex space-x-4">
          <button class="flex-1 flex items-center justify-center border border-gray-600 p-3 rounded-lg hover:bg-gray-700 transition">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" class="w-5 h-5 mr-2" />
            Google
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
