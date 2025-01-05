<script setup lang="ts">
const images = ["/image1.jpg", "/image2.jpg", "/image1.jpg"];
</script>

<template>
  <div
    :class="[
      'h-screen w-screen sm:h-[52rem] sm:w-[30rem]',
      'grid auto-cols-[100%] grid-flow-col grid-rows-1 gap-[1ch]',
      'snap-x snap-mandatory overflow-x-auto overscroll-contain',
    ]"
  >
    <section
      v-for="(image, index) of images"
      :key="index"
      class="size-full snap-start snap-always"
    >
      <article
        class="size-full bg-cover bg-center"
        :style="{
          backgroundImage: `url('${image}')`,
        }"
      />
    </section>
  </div>
</template>
