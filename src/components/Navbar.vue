<script setup lang="ts">
import { useUI } from '~/logic/ui'

const { toggleDrawer } = useUI()

</script>

<template>
  <div class="fixed w-full h-16 text-light-100 backdrop-blur-lg backdrop-filter flex shadow-lg shadow-primary-400 z-10">
    <div class="flex items-center justify-between flex-1" lg="px-8">
      <div class="flex">
        <router-link to="/" class="flex items-center space-x-2 ml-4" lg="ml-0">
          <span class="text-2xl font-bold">Fun People Park</span>
        </router-link>
      </div>
      <button
        ref="target"
        class="focus:(outline-none bg-primary-300) hover:bg-primary-300 p-4 active:bg-primary-400"
        @click="toggleDrawer"
      >
        <CarbonMenu class="text-2xl" />
      </button>
    </div>
  </div>
</template>
