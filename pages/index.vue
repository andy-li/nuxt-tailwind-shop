<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Choose your best phone now</h1>
          <p class="max-w-2xl mt-8 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Order with free shipping and it will arrive today or soon</p>

          <a href="#"
            class="btn py-4 mt-2 inline-block">
            Get started
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/img/phone-mockup.png" alt="mockup">
        </div>
      </div>
    </section>

    <section class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Top rating</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <!-- product -->
          <CatalogProduct v-for="product in products" :key="product.id" :image="product.image" :title="product.title" :id="product.id" :category="product.category" :price="product.price + '$'" />
            <!-- </> product -->

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

// fetch products
const { data: products } = await useFetch('https://fakestoreapi.com/products/category/electronics?limit=4')

// test local mock data
// const { data: products } = await useFetch('/api/products?limit=4')

// fetch current currency
// const { data: currency } = await useFetch('/api/currency')
// example: 1$ - {{  currency.RUB.value  }}
</script>