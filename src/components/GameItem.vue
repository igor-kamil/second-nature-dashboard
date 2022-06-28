<template>
  <div class="flex p-8 transition-all bg-black">
    <div class="basis-2/4 2xl:basis-5/12 pr-4">
      <div class="aspect-square">
        <img
          :src="require(`@/assets/${props.imageSrc}`)"
          alt=""
          class="w-full h-full"
          v-if="!props.isFocused || !props.videoSrc"
        />
        <video class="w-full h-full" autoplay loop v-if="props.videoSrc && props.isFocused">
          <source :src="require(`@/assets/${props.videoSrc}`)" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="basis-2/4 2xl:basis-7/12 text-right mt-auto text-lg">
      <h2 class="text-white uppercase text-4xl font-bold -ml-18 text-shadow">
        {{ props.name }}
      </h2>
      <p class="text-white py-5 pl-1">
        <slot></slot>
      </p>
      <div class="text-green-600 pl-1 uppercase">
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
    'videoSrc': String,
    'authors': String,
    'isFocused': Boolean,
})
</script>
