<script setup>
import { useCartStore } from "@/stores/cart";

const storeCart = useCartStore();
</script>

<template>
  <!--
  This component uses @tailwindcss/forms
-->

  <section class="mt-10">
    <h1 class="sr-only">Checkout</h1>

    <div class="grid grid-cols-1 mx-auto max-w-screen-2xl md:grid-cols-2">
      <div class="py-12 bg-gray-50 md:py-24">
        <div class="max-w-lg px-4 mx-auto space-y-8 lg:px-8">
          <div class="flex items-center">
            <span class="w-10 h-10 bg-blue-700 rounded-full"></span>

            <h2 class="ml-4 font-medium text-gray-900">You Order</h2>
          </div>

          <div>
            <p class="text-2xl font-medium tracking-tight text-gray-900">
              ${{ storeCart.getTotalPrice }}
            </p>

            <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
          </div>

          <div>
            <div class="flow-root">
              <ul v-if="storeCart.items" class="-my-4 divide-y divide-gray-100">
                <li
                  v-for="item in storeCart.items"
                  :key="item.id"
                  class="flex items-center py-4"
                >
                  <img
                    v-if="item.image"
                    :src="item.image"
                    :alt="item.title"
                    class="object-cover w-16 h-16 rounded"
                  />

                  <div class="ml-4">
                    <h3 class="text-sm text-gray-900">{{ item.title }} <strong v-if="item.qty > 1" class="ml-1 text-xs absolute"> x {{ item.qty }}</strong></h3>

                    <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                      <div v-if="item.category">
                        <dt class="inline">Category:</dt>
                        <dd class="inline">{{ item.category }}</dd>
                      </div>
                      <div v-if="item.qty > 1">
                        <dt class="inline">Qty:</dt>
                        <dd class="inline">{{ item.qty }}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="py-12 bg-white md:py-24">
        <div class="max-w-lg px-4 mx-auto lg:px-8">
          <form class="grid grid-cols-6 gap-4">
            <div class="col-span-3">
              <label
                for="FirstName"
                class="block text-xs font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
              />
            </div>

            <div class="col-span-3">
              <label
                for="LastName"
                class="block text-xs font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
              />
            </div>

            <div class="col-span-6">
              <label
                for="Email"
                class="block text-xs font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
              />
            </div>

            <div class="col-span-6">
              <label
                for="Phone"
                class="block text-xs font-medium text-gray-700"
              >
                Phone
              </label>

              <input
                type="tel"
                id="Phone"
                class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
              />
            </div>

            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Card Details
              </legend>

              <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                <div>
                  <label for="CardNumber" class="sr-only"> Card Number </label>

                  <input
                    type="text"
                    id="CardNumber"
                    placeholder="Card Number"
                    class="relative w-full mt-1 border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                  />
                </div>

                <div class="flex -space-x-px">
                  <div class="flex-1">
                    <label for="CardExpiry" class="sr-only">
                      Card Expiry
                    </label>

                    <input
                      type="text"
                      id="CardExpiry"
                      placeholder="Expiry Date"
                      class="relative w-full border-gray-200 rounded-bl-md focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div class="flex-1">
                    <label for="CardCVC" class="sr-only"> Card CVC </label>

                    <input
                      type="text"
                      id="CardCVC"
                      placeholder="CVC"
                      class="relative w-full border-gray-200 rounded-br-md focus:z-10 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="col-span-6">
              <legend class="block text-sm font-medium text-gray-700">
                Billing Address
              </legend>

              <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                <div>
                  <label for="Country" class="sr-only">Country</label>

                  <select
                    id="Country"
                    class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                  >
                    <option>England</option>
                    <option>Wales</option>
                    <option>Scotland</option>
                    <option>France</option>
                    <option>Belgium</option>
                    <option>Japan</option>
                  </select>
                </div>

                <div>
                  <label class="sr-only" for="PostalCode">
                    ZIP/Post Code
                  </label>

                  <input
                    type="text"
                    id="PostalCode"
                    placeholder="ZIP/Post Code"
                    class="relative w-full border-gray-200 rounded-b-md focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </fieldset>

            <div class="col-span-6">
              <button
                class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
