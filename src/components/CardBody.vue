<script setup>

import IconEthereum from '../assets/icon-ethereum.svg'
import IconClock from '../assets/icon-clock.svg'
</script>

<template>
    <p class="text-cs-pr-soft-blue font-light">
        Our Equilibrium collection promotes balance and calm.
    </p>

    <div class="flex justify-between my-3">
        <div class="flex text-cs-pr-cyan font-semibold items-center justify-evenly">
            <div class="mr-2">
                <img :src="IconEthereum" />
            </div>
            <div>
                0.041 ETH
            </div>
        </div>

        <div class="flex justify-evenly items-center text-cs-pr-soft-blue font-semibold">
            <div>
                <img :src="IconClock" />
            </div>
            <div>
                3 days left
            </div>
        </div>
    </div>
</template>