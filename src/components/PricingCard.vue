<script setup lang="ts">
defineProps<{imageUrl: string; title: string; description: string; price: string}>()

</script>

<template>
  <div
    class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
  >
    <img
      alt="Happy Car"
      class="flex-shrink-0 rounded-lg w-60 h-60 object-cover object-center sm:mb-0 mb-4"
      :src="imageUrl"
    />
    <div class="flex-grow sm:pl-8">
      <h3 class="text-gray-200 font-semibold uppercase mb-3">
        {{ title }}
      </h3>
      <p
        class="mb-4 text-gray-400"
      >
        {{ description }}
      </p>
      <p class="mb-4 text-gray-200 text-2xl flex justify-center md:justify-start">
        <span class="bg-secondary-500 px-3 py-2 rounded">{{ price }}</span>
      </p>
    </div>
  </div>
</template>
