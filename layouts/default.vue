<template>
  <div>
    <TheHeader />
    <SharedCart />
    <slot />
    <div
      class="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24"
    >
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">
          See all products
        </h2>

        <p class="max-w-sm mx-auto mt-4 text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
          ipsum eos temporibus ea nihil.
        </p>

        <nuxt-link
          to="/products"
          class="inline-block px-12 py-3 mt-8 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
          Go to catalog
        </nuxt-link>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
