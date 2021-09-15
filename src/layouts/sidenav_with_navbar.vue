<script setup lang="ts">
import { useUI } from '~/logic/ui'
const { isOpen, toggleDrawer } = useUI()
</script>

<template>
  <div class="bg-black">
    <Navbar />

    <div class="flex flex-col relative pt-16 min-h-[calc(100vh-64px)]">
      <div
        class="bg-black/60 w-70 backdrop-blur backdrop-filter transform transition-transform transition duration-150 fixed z-30 top-0 bottom-0 overflow-y-auto"
        :class="{ 'translate-x-0 ': isOpen, '-translate-x-full': !isOpen }"
      >
        <Sidebar />
      </div>
      <div
        class="flex-1 min-h-[calc(100vh-64px)]"
      >
        <div
          class="absolute inset-0 from-primary-500/50 to-secondary-500/50 bg-blend-overlay bg-gradient-to-r bggradient transition-all duration-500 z-8"
          :class="{ 'hidden': !isOpen }"
          @click="toggleDrawer"
        ></div>
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>
