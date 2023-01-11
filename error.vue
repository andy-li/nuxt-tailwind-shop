<template>
  <TheHeader />
 
  <section class="flex items-center min-h-[650px] p-16 dark:bg-gray-900 dark:text-gray-100">
    <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span class="sr-only">Error</span> {{  error.statusCode  }}
        </h2>
        <p class="text-2xl font-semibold md:text-3xl">{{  error.statusMessage  }}</p>
        <p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
        <button @click="handleClearError"
          class="btn">Back to homepage</button>
      </div>
    </div>
  </section>

  <TheFooter />
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>