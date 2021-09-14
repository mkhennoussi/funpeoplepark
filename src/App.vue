<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Fun People Park',
  meta: [
    { name: 'description', content: 'Il n\'y a pas d\'âge pour s\'éclater, attractions renversantes !' },
  ],
})
</script>

<template>
  <router-view />
</template>
