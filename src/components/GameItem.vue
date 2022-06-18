<template>
  <div class="flex hover:bg-gray-800 p-5 rounded-2xl">
    <div class="basis-2/4">
      <div class="aspect-square">
        <img :src="require(`@/assets/${imageSrc}`)" alt="" class="w-full h-full">
      </div>
    </div>
    <div class="text-right basis-2/4 mt-auto text-lg">
      <h2 class="text-white uppercase text-4xl font-bold -ml-18 text-shadow">{{ name }}</h2>
      <p class="text-white py-5 pl-1">
        <slot></slot>
      </p>
      <div class="text-purple-500 pl-1 uppercase">
        {{ authors }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameItem',
  props: {
    name: String,
    imageSrc: String,
    authors: String
  }
}
</script>