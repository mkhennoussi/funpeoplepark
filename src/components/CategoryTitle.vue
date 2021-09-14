<script setup lang="ts">
defineProps<{title: String; subtitle: String; id: string}>()
</script>

<template>
  <div :id="id" class="flex flex-col text-center w-full mb-8 lg:mb-20">
    <h1 class="text-4xl lg:text-6xl font-medium title-font mb-4 text-gray-100">
      {{ title }}
    </h1>
    <p
      class="lg:w-2/3 mx-auto leading-relaxed text-base lg:text-2xl text-gray-400"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
