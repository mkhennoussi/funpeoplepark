<template>
  <section class="text-gray-600 body-font relative">
    <div class="flex flex-col justify-center items-center relative z-0 bg-black ">
      <form
        name="contact"
        method="POST"
        action="/merci"
        netlify
        netlify-honeypot="bot-field"
        class="card-glow bg-black p-8 rounded-md w-full md:w-2/3"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <div class="mb-6">
          <label for="name" class="label">Nom</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            class="input"
          />
        </div>
        <div class="mb-6">
          <label for="email" class="label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            class="input placeholder-italic"
          />
        </div>
        <div class="mb-6">
          <label for="message" class="label">Message</label>

          <textarea
            id="message"
            rows="5"
            name="message"
            class="input"
            required
          ></textarea>
        </div>
        <div class="mb-6 relative z-10">
          <button type="submit" class="w-full px-3 py-4 card-glow uppercase text-white rounded-md focus:bg-white focus:text-black focus:outline-none">
            Envoyer
          </button>
        </div>
      </form>
      <div class="p-2 w-full pt-8 text-center">
        <p class="leading-normal my-5 text-gray-400">
          <br>21 RUE ETIENNE BOISSON<br> 42000 SAINT-ETIENNE
        </p>
        <p class="leading-normal my-5 text-gray-400">
          07 83 44 64 30
          <br> 04 69 35 54 17
          <br> funpeoplepark@gmail.com
        </p>
        <span class="inline-flex text-3xl items-center justify-center">
          <a target="_blank" rel="noopener noreferrer" class="text-gray-500" href="https://www.facebook.com/Fun-People-Park-100227279082151">
            <CarbonLogoFacebook />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/funpeoplepark" class="ml-4 text-gray-500">
            <CarbonLogoInstagram />
          </a>
        </span>
      </div>
    </div>
  </section>
</template>
