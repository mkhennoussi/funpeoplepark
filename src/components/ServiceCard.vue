<script setup lang="ts">
defineProps<{title: String; subtitle: String; description: String}>()

</script>

<template>
  <div class="flex flex-col rounded-xl  shadow shadow-secondary-500 transition-shadow duration-500 bg-true-gray-800  hover:(shadow-xl shadow-secondary-500) card-glow z-2">
    <h1 class="flex h-20 items-center overflow-hidden rounded-t-lg p-3 text-xl text-white bg-true-gray-800  font-bold ">
      {{ title }}
    </h1>
    <img src="https://images.pexels.com/photos/862848/pexels-photo-862848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
    <div class="flex-grow p-6 space-y-3 bg-true-gray-800  rounded-b-lg">
      <div class="uppercase text-white font-bold">
        {{ subtitle }}
      </div>
      <p class="text-white">
        {{ description }}
      </p>
    </div>
  </div>
</template>
