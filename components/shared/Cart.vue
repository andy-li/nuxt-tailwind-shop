<script setup>
import { useCartStore } from "@/stores/cart";

const storeCart = useCartStore();
</script>

<template>
  <transition name="cart">
    <div
      v-show="storeCart.visible"
      class="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="storeCart.toggleVisible(false)"
      ></div>

      <!-- cart inner -->
      <div
        class="fixed z-10 top-0 right-0 h-full pointer-events-auto w-screen max-w-md"
      >
        <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div class="flex items-start justify-between">
              <h2
                class="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Shopping cart
              </h2>
              <div class="ml-3 flex h-7 items-center">
                <button
                  type="button"
                  class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  @click="storeCart.toggleVisible(false)"
                >
                  <span class="sr-only">Close panel</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-8">
              <div class="flow-root">
                <ul
                  role="list"
                  v-if="storeCart.items.length"
                  class="-my-6 divide-y divide-gray-200"
                >
                  <li
                    v-for="item in storeCart.items"
                    :key="item.id"
                    class="flex py-6"
                  >
                    <div
                      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                    >
                      <img
                        v-if="item.image"
                        :src="item.image"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div class="ml-4 flex flex-1 flex-col">
                      <div>
                        <div
                          class="flex justify-between text-base font-medium text-gray-900"
                        >
                          <h3>
                            <a href="#">{{ item.title }}</a>
                          </h3>
                          <p class="ml-4 relative">
                            ${{ item.price }}
                            <span
                              v-if="item.qty > 1"
                              class="ml-1 text-xs whitespace-nowrap absolute"
                            >
                              x {{ item.qty }}</span
                            >
                          </p>
                        </div>
                        <p
                          v-if="item.category"
                          class="mt-1 text-sm text-gray-500"
                        >
                          {{ item.category }}
                        </p>
                      </div>
                      <div
                        class="flex flex-1 items-end justify-between text-sm"
                      >
                        <p class="text-gray-500">Qty {{ item.qty }}</p>

                        <div class="flex">
                          <button
                            type="button"
                            class="font-medium text-indigo-600 hover:text-indigo-500"
                            @click="storeCart.removeProduct(item.id)"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <p v-else class="text-gray-400">Nothing.</p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div
              class="flex justify-between text-base font-medium text-gray-900"
            >
              <p>Subtotal</p>
              <p>${{ storeCart.getTotalPrice }}</p>
            </div>
            <p class="mt-0.5 text-sm text-gray-500">
              Items counts - {{ storeCart.getTotalQty }}
            </p>
            <div class="mt-6">
              <nuxt-link
                @click="storeCart.toggleVisible(false)"
                to="/checkout"
                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >Checkout</nuxt-link
              >
            </div>
            <div
              class="mt-6 flex justify-center text-center text-sm text-gray-500"
            >
              <p>
                or
                <button
                  type="button"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  @click="storeCart.toggleVisible(false)"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.cart-enter-active,
.cart-leave-active {
  transition: opacity 0.33s;
}
.cart-enter,
.cart-leave-active {
  opacity: 0;
}
</style>
