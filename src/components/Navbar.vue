<script setup lang="ts">
import { useUI } from '~/logic/ui'

const { toggleDrawer } = useUI()

</script>

<template>
  <div class="fixed w-full h-16 text-light-100 backdrop-blur-lg backdrop-filter flex shadow-lg shadow-primary-400 z-20">
    <div class="flex items-center justify-between flex-1" lg="px-8">
      <div class="flex">
        <router-link to="/" class="flex items-center space-x-2 ml-4" lg="ml-0">
          <span class="text-2xl font-bold">Fun People Park</span>
        </router-link>
      </div>
      <button
        ref="target"
        aria-label="Bouton menu"
        lg="hidden"
        class="focus:(outline-none bg-secondary-500) hover:bg-secondary-500 p-4 active:bg-secondary-400"
        @click="toggleDrawer"
      >
        <CarbonMenu class="text-2xl" />
      </button>
      <div class="flex space-x-3 <lg:hidden">
        <router-link
          to="#prestations"
          class="sidenav_menu_item group"
          active-class="bg-secondary-500text-white "
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonCarouselHorizontal class="group-hover:text-white" />
          </span>
          <span>Activités</span>
        </router-link>

        <router-link
          to="#tarifs"
          class="sidenav_menu_item group"
          active-class="bg-secondary-500text-white"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonShoppingCatalog class="group-hover:text-white" />
          </span>
          <span>Prestations</span>
        </router-link>

        <router-link
          to="#contact"
          class="sidenav_menu_item group"
          active-class="bg-secondary-500text-white"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonEmail class="group-hover:text-white" />
          </span>
          <span>Contact</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
