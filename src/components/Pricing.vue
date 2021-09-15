<script setup lang="ts">
import happyCar from '~/assets/images/happy_car.png'
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="px-6 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-6 ">
          <PricingCard :image-url="happyCar" title="Happy Car" description="Happy Car est une attraction permettant de s'amuser tout en étant" price="8€" />
        </div>
        <div class="p-6 ">
          <PricingCard :image-url="happyCar" title="Rolling Car" description="Rolling car est une attraction permettant de s'amuser tout en étant" price="8€" />
        </div>
      </div>
    </div>
  </section>
</template>
