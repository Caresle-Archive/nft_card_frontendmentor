<script setup>
import ImageAvatar from '../assets/image-avatar.png'

</script>

<template>
    <div class="flex items-center justify-start border-t pt-2 border-t-cs-n-line">
        <div>
            <img :src="ImageAvatar" class="
                rounded-full border-2 border-cs-pr-soft-blue
                w-12 h-12
            "
            />
        </div>
        <div class="text-cs-pr-soft-blue ml-3 ">
            Creation of
            <span class="text-white transition-all cursor-pointer hover:text-cs-pr-cyan">
                Jules Wyvern
            </span>
        </div>
    </div>
</template>