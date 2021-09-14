<script setup lang="ts">
import { useUI } from '~/logic/ui'
import heroImage from '~/assets/images/logo_fun_people_park.png'

const { closeDrawer } = useUI()
</script>

<template>
  <div class="flex flex-col justify-center z-5">
    <img :src="heroImage" alt class="w-full h-full object-cover " />
    <div class="flex flex-col w-full max-w-xs p-4">
      <nav class="flex flex-col w-full space-y-3">
        <router-link
          to="/"
          class="sidenav_menu_item bg-secondary-500"
          active-class="bg-secondary-500 text-white"
          @click="closeDrawer"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonHome class="group-hover:text-white" />
          </span>
          <span>Tableau de bord</span>
        </router-link>

        <div class="my-px">
          <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Mon compte</span>
        </div>
        <router-link
          to="/profile"
          class="sidenav_menu_item group"
          active-class="bg-secondary-500text-white "
          @click="closeDrawer"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonUser class="group-hover:text-white" />
          </span>
          <span>Profil</span>
        </router-link>

        <router-link
          to="/auth/login"
          class="sidenav_menu_item group"
          active-class="bg-secondary-500text-white"
          @click="closeDrawer"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonSettings class="group-hover:text-white" />
          </span>
          <span>Login</span>
        </router-link>

        <div
          class="sidenav_menu_item group cursor-pointer"
          active-class="bg-secondary-500text-white"
        >
          <span class="flex text-lg text-white mr-3">
            <CarbonLogout class="group-hover:text-white" />
          </span>
          <span>Déconnexion</span>
        </div>
      </nav>
    </div>
  </div>
</template>
