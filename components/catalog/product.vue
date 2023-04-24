<script setup>
import { useCartStore } from "@/stores/cart";

defineProps({
  image: String,
  title: String,
  id: Number,
  category: String,
  price: String,
});

const storeCart = useCartStore();
</script>

<template>
  <div class="group relative">
    <div
      class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80"
    >
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-contain object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <nuxt-link :to="`/products/${id}`">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ title }}
          </nuxt-link>
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ category }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900">{{ price }}</p>
    </div>

    <div class="flex justify-end">
      <button
        @click="
          storeCart.addProduct({
            image,
            title,
            id,
            category,
            price,
          })
        "
        class="btn"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
