<script setup>
import { useCartStore } from "@/stores/cart";

const storeCart = useCartStore();

const { id } = useRoute().params;

// local mock
const { data } = await useFetch(`/api/products?id=${id}`);

let product;
if (data.value) {
  product = data.value[0];
}

if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});

const refQty = ref(1);

const addProductToCart = () => {

  // add product
  storeCart.addProduct({
    image: product.image,
    title: product.title,
    id: product.id,
    category: product.category,
    price: product.price,
    qty: refQty.value,
  });

  // show cart
  storeCart.toggleVisible(true);

  // save cart in local storage
  storeCart.saveCart();
};
</script>

<template>
  <div>
    <Head>
      <Title> Nuxt Shop | {{ product.title }} </Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <section>
      <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              v-if="product.image"
              :alt="product.title"
              :src="product.image"
              class="object-contain w-full aspect-square rounded-xl"
            />
          </div>

          <div class="sticky top-0">
            <strong
              class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
            >
              Pre Order
            </strong>

            <div class="flex justify-between mt-8">
              <div class="max-w-[35ch]">
                <h1 class="text-2xl font-bold">
                  {{ product.title }}
                </h1>

                <p class="mt-0.5 text-sm">{{ product.category }}</p>

                <div class="mt-2 -ml-0.5 flex">
                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>

                  <svg
                    class="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>

              <p class="text-lg font-bold">${{ product.price }}</p>
            </div>

            <div class="relative mt-4">
              <div class="pb-6 prose max-w-none">
                <p>
                  {{ product.description }}
                </p>
              </div>
            </div>

            <div class="mt-8">
              <fieldset>
                <legend class="mb-1 text-sm font-medium">Color</legend>

                <div class="flow-root">
                  <div class="-m-0.5 flex flex-wrap">
                    <label for="color_tt" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        Texas Tea
                      </span>
                    </label>

                    <label for="color_fr" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        Fiesta Red
                      </span>
                    </label>

                    <label for="color_cb" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset class="mt-4">
                <legend class="mb-1 text-sm font-medium">Size</legend>

                <div class="flow-root">
                  <div class="-m-0.5 flex flex-wrap">
                    <label for="size_xs" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        XS
                      </span>
                    </label>

                    <label for="size_s" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        S
                      </span>
                    </label>

                    <label for="size_m" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        M
                      </span>
                    </label>

                    <label for="size_l" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        L
                      </span>
                    </label>

                    <label for="size_xl" class="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        class="sr-only peer"
                      />

                      <span
                        class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                      >
                        XL
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div class="flex mt-8">
                <div>
                  <label for="quantity" class="sr-only">Qty</label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="10"
                    v-model="refQty"
                    class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <button
                  class="block ml-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  @click="addProductToCart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CatalogBenefits />
  </div>
</template>
