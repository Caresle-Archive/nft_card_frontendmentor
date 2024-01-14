<script setup>
import CardHeader from './components/CardHeader.vue'
import CardBody from './components/CardBody.vue'
import CardFooter from './components/CardFooter.vue'
</script>

<template>
  <main class="
    bg-cs-n-card-bg text-white font-outfit font-normal text-lg
    w-11/12 mx-auto my-3 p-4 rounded-lg shadow max-w-sm h-fit
    "
  >
    <CardHeader />

    <CardBody />

    <CardFooter />
  </main>
</template>