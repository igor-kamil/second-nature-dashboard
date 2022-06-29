<template>
  <div class="flex p-8 pb-6 transition-all bg-black">
    <div class="basis-2/4 2xl:basis-5/12 pr-6">
      <div class="aspect-square">
        <img
          :src="require(`@/assets/${props.imageSrc}`)"
          alt=""
          class="w-full h-full"
          v-if="!props.isFocused || !props.videoSrc"
        />
        <video
          class="w-full h-full"
          autoplay
          loop
          v-if="props.videoSrc && props.isFocused"
        >
          <source
            :src="require(`@/assets/${props.videoSrc}`)"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="mx-auto text-center text-gray-400 pt-5 text-sm transition-opacity" :class="[props.isFocused ? 'opacity-100' : 'opacity-0']">
        Stlač
        <span
          class="bg-black rounded-xl text-blue-400 px-2 py-1 text-xs font-bold"
          >A</span
        >
        pre štart
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
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  imageSrc: String,
  videoSrc: String,
  authors: String,
  isFocused: Boolean,
});
</script>
