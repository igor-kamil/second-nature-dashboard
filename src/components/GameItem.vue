<template>
  <div class="flex p-8 transition-all bg-black">
    <div class="basis-2/4">
      <div class="aspect-square">
        <img
          :src="require(`@/assets/${props.imageSrc}`)"
          alt=""
          class="w-full h-full"
        />
      </div>
    </div>
    <div class="text-right basis-2/4 mt-auto text-lg">
      <h2 class="text-white uppercase text-4xl font-bold -ml-18 text-shadow">
        {{ props.name }}
      </h2>
      <p class="text-white py-5 pl-1">
        <slot></slot>
      </p>
      <div class="text-purple-500 pl-1 uppercase">
        {{ props.authors }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
    'name': String,
    'imageSrc': String,
    'authors': String,
})
</script>
