<script setup lang="ts">
import heroImage from '~/assets/images/fun_people_park_sainte_small.jpg'
</script>
<template>
  <div class="flex justify-center items-center bg-gradient-to-t h-screen -mt-16 relative">
    <img :src="heroImage" alt class="w-full h-full object-cover object-center" />
    <div class="from-black via-black/10 to-transparent bg-gradient-to-t absolute inset-0"></div>
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 py-32)">
    <CategoryTitle id="prestations" title="Nos Prestations" subtitle="Découvrez l'ensemble de nos prestations ci-dessous" />
    <div class="w-full lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ServiceCard
        title="Enterrement de vie de célibataire"
        subtitle="team du marié"
        description="C'est le jour pour surprendre votre ami ! Faites-le courir, sauter, tirer ou tout simplement se marrer avant le jour J. Vivez, tous ensemble, un moment fun avant que votre ami dise OUI pour la vie !"
      />
      <ServiceCard
        title="Amis, collègues ou famille"
        subtitle="Amis, collègues ou famille"
        description="Resto entre amis, c'est bien, soirée ciné, c'est bien aussi … du fun chez Bump c'est beaucoup mieux ! Challengez-vous autour d'une partie de foot dans des bulles ou dans des batailles épiques de Laser ou d'Archery."
      />
      <ServiceCard
        title="Amis, collègues ou famille"
        subtitle="Amis, collègues ou famille"
        description="Resto entre amis, c'est bien, soirée ciné, c'est bien aussi … du fun chez Bump c'est beaucoup mieux ! Challengez-vous autour d'une partie de foot dans des bulles ou dans des batailles épiques de Laser ou d'Archery."
      />
    </div>
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 pt-32)">
    <CategoryTitle id="tarifs" title="Nos Tarifs" subtitle="Découvrez l'ensemble de nos tarifs ci-dessous" />
    <pricing />
  </div>
  <div class="flex flex-col w-full max-w-9xl mx-auto p-6 lg:(px-16 pt-32)">
    <CategoryTitle id="contact" title="Contact" subtitle="Discuttons ensemble de vos projets afin se découvrir comment nous pouvons vous accompagner." />
    <FooterApp />
  </div>
</template>

<route lang="yaml">
meta:
  layout: sidenav_with_navbar
</route>
