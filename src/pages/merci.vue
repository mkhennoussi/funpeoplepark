<script setup lang="ts">

</script>

<template>
  <div class="height-app flex items-center justify-center bg-black">
    <div class="card-glow relative z-10 w-full mx-4 md:w-1/2 transform-all">
      <div class="bg-black mx-auto text-center shadow rounded-lg p-8 z-10 text-white">
        <h1 class="text-2xl">
          Merci pour votre message, nous l'avons bien reçu et nous vous répondrons dans les plus brefs délais.
        </h1>
      </div>
      <div class="text-center text-white p-4">
        <nuxt-link to="/" class="btn ">
          Retour sur la page d'accueil
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: sidenav_with_navbar
</route>
