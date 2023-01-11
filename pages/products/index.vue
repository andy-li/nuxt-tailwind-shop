<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-8 mx-auto">
        <div class="lg:flex lg:-mx-2">
          <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
            <a href="#" class="block font-medium text-blue-600 dark:text-blue-500 hover:underline">All</a>
            <a v-for="cat in categories" :key="cat" href="#"
              class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">{{ cat }}</a>
          </div>

          <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
            <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
              <p class="text-gray-500 dark:text-gray-300">{{ products.length }} Items</p>
              <div class="flex items-center">
                <p class="text-gray-500 dark:text-gray-300">Sort</p>
                <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                  <option value="#">Recommended</option>
                  <option value="#">Size</option>
                  <option value="#">Price</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <!-- product -->
              <CatalogProduct v-for="product in products" :key="product.id" :image="product.image"
                :title="product.title" :id="product.id" :category="product.category" :price="product.price + '$'" />
              <!-- </> product -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products'
})

useHead({
  title: 'Nuxt Shop | Catalog',
  meta: [
    { name: 'description', content: 'Prototype for e-commerce site catalog' },
  ]
})

// fetch products
// /category/electronics
// const { data: products } = await useFetch('https://fakestoreapi.com/products')
const { data: products } = await useFetch('/api/products')

const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')
</script>