<script setup lang="ts">
defineProps<{imageUrl: string; title: string; description: string; price: string}>()

</script>

<template>
  <div
    class="flex w-full h-full flex-col items-center justify-center text-center card-glow z-1"
  >
    <img
      alt="Happy Car"
      class="flex-shrink-0 rounded-lg w-60 h-60 object-cover object-center sm:mb-0 mb-4"
      :src="imageUrl"
    />
    <div class="flex-grow p-8 w-full lg:px-2 sm:pl-8 bg-true-gray-800 rounded-lg">
      <div class="text-gray-200 text-xl font-semibold uppercase mb-3">
        {{ title }}
      </div>
      <p
        class="mb-4 text-gray-200"
      >
        {{ description }}
      </p>
      <p class="text-gray-200 text-2xl flex justify-center">
        <span class="bg-secondary-500 px-6 py-2 rounded">{{ price }}</span>
      </p>
    </div>
  </div>
</template>
