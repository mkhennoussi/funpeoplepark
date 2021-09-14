<script setup lang="ts">
const props = defineProps<{title: String; subtitle: String; description: String}>()

</script>

<template>
  <div class="flex flex-col rounded-xl overflow-hidden shadow shadow-secondary-500 transition-shadow duration-500 hover:(shadow-xl shadow-secondary-500)">
    <h1 class="flex h-20 items-center  p-3 text-xl text-white bg-true-gray-800  font-bold overflow-hidden">
      {{ title }}
    </h1>
    <img src="https://images.pexels.com/photos/862848/pexels-photo-862848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    <div class="p-6 space-y-3">
      <div class="uppercase text-white font-bold">
        {{ subtitle }}
      </div>
      <p class="text-white">
        {{ description }}
      </p>
    </div>
  </div>
</template>
