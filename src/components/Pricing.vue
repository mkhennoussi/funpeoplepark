<script setup lang="ts">
import happyCar from '~/assets/images/happy_car.png'
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="px-6 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="p-6 w-full lg:w-1/2">
          <div
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          >
            <img
              alt="Happy Car"
              class="flex-shrink-0 rounded-lg w-60 h-60 object-cover object-center sm:mb-0 mb-4"
              :src="happyCar"
            />
            <div class="flex-grow sm:pl-8">
              <h3 class="text-gray-200 font-semibold uppercase mb-3">
                Happy-car
              </h3>
              <p
                class="mb-4 text-gray-400"
              >
                Happy-car est une attraction permettant de s'amuser tout en étant ....
              </p>
              <p class="mb-4 text-gray-200 text-2xl flex justify-center md:justify-start">
                <span class="bg-secondary-500 px-3 py-2 rounded">5€</span>
              </p>
            </div>
          </div>
        </div>
        <div class="p-6 w-full lg:w-1/2">
          <div
            class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
          >
            <img
              alt="Happy Car"
              class="flex-shrink-0 rounded-lg w-60 h-60 object-cover object-center sm:mb-0 mb-4"
              :src="happyCar"
            />
            <div class="flex-grow sm:pl-8">
              <h3 class="text-gray-200 font-semibold uppercase mb-3">
                Rolling-car
              </h3>
              <p
                class="mb-4 text-gray-400"
              >
                Happy-car est une attraction permettant de s'amuser tout en étant ....
              </p>
              <p class="mb-4 text-gray-200 text-2xl flex justify-center md:justify-start">
                <span class="bg-secondary-500 px-3 py-2 rounded">8€</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
