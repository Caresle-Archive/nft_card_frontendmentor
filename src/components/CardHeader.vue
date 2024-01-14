<script setup>
import ImageCard from '../assets/image-equilibrium.jpg'
import ImageView from '../assets/icon-view.svg'

</script>

<template>
    <div class="relative cursor-pointer">
        <img :src="ImageCard" class="rounded-lg" />
        <div class="
            absolute w-full h-full top-0 left-0 bottom-0 right-0
            bg-cs-pr-cyan-hover rounded-lg opacity-0 hover:opacity-100
            transition-all
        ">
            <div class="w-full h-full flex justify-center items-center">
                <img :src="ImageView" class="text-white opacity-100 w-1/5" />
            </div>
        </div>
    </div>
    <h1 class="font-semibold text-2xl my-4 transition-all cursor-pointer hover:text-cs-pr-cyan">
        Equilibrium #3429
    </h1>
</template>