<template>
  <section class="text-gray-600 body-font relative">
    <div class="mx-auto">
      <div class=" md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-full md:w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-400">Nom</label>
              <input id="name" type="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-secondary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full md:w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input id="email" type="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-secondary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-secondary-500 focus:bg-white focus:ring-2 focus:ring-secondary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-secondary-500 shadow shadow-secondary-500 border-0 py-2 px-8 focus:outline-none hover:bg-secondary-600 rounded text-lg">
              Envoyer
            </button>
          </div>
          <div class="p-2 w-full pt-8 text-center">
            <p class="leading-normal my-5 text-gray-400">
              <br>21 RUE ETIENNE BOISSON<br> 42000 SAINT-ETIENNE
            </p>
            <p class="leading-normal my-5 text-gray-400">
              07 83 44 64 30
              <br> 04 69 35 54 17
            </p>
            <span class="inline-flex text-3xl items-center justify-center">
              <a class="text-gray-500">
                <CarbonLogoFacebook />
              </a>
              <a class="ml-4 text-gray-500">
                <CarbonLogoInstagram />
              </a>
              <a class="ml-4 text-gray-500">
                <CarbonLogoYoutube />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
