<script setup lang="ts">
import heroImage from '~/assets/images/fun_people_park_sainte_small.jpg?webp'
import happyCar from '~/assets/images/happy_car.png?webp'
</script>
<template>
  <div class="flex justify-center items-center bg-gradient-to-t h-screen -mt-16 relative">
    <img :src="heroImage" alt class="w-full h-full object-cover object-center" />
    <div class="from-black via-black/10 to-transparent bg-gradient-to-t absolute inset-0"></div>
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 pt-32)">
    <CategoryTitle id="prestations" title="Nos Activités" subtitle="Fun People Park vous propose ces deux principales attractions : " />
    <div class="text-justify lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard
        title="Happy Car"
        description="Idéal pour les enfants à partir de 2 ans, ce manège est une balançoire qui se déplace pour le plaisir des petits et des grands !"
      />
      <ServiceCard
        title="Rolling Car"
        description="Parfait pour les amateurs de sensations fortes, ce manège mobile à la capacité de vous faire tourner à 360 degrés !"
      />
    </div>
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 pt-32)">
    <CategoryTitle id="tarifs" title="Nos Prestations" subtitle="Découvrez l'ensemble de nos prestations tarifées à l'heure" />
    <div class="w-full lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PricingCard :image-url="happyCar" title="Happy Car" price="À partir de 60 €" />
      <PricingCard :image-url="happyCar" title="Rolling Car" price="À partir de 60 €" />
      <PricingCard :image-url="happyCar" title="Happy Car + Rolling Car" price="À partir de 60 €" />
      <PricingCard :image-url="happyCar" title="Location de piste" price="À partir de 60 €" />
    </div>
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 pt-32)">
    <CategoryTitle id="contact" title="Contact" subtitle="Discutons ensemble de vos projets afin se découvrir comment nous pouvons vous accompagner." />
    <FooterApp />
  </div>
</template>

<route lang="yaml">
meta:
  layout: sidenav_with_navbar
</route>
