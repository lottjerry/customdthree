<template>
  <div class="flex items-center justify-center gap-5 md:h-[150px]">
    <div class="flex flex-col items-center text-white">
      <p class="text-xs md:text-base">© 2025 Custom D3</p>
      <div class="flex gap-2 text-xs md:text-base">
        <NuxtLink
          to="https://www.termsfeed.com/live/b812a0da-8ee1-4267-82de-1215a94d8fa7"
          target="_blank"
          >Privacy Policy</NuxtLink
        >
        <div>|</div>
        <NuxtLink
          to="https://www.termsfeed.com/live/b85ae36b-6369-4a77-8094-1b07b3941c48"
          target="_blank"
          >Terms & Conditions</NuxtLink
        >
      </div>
    </div>

    <div>
      <client-only>
        <Vue3Lottie :animationLink="animationLink" :height="110" />
      </client-only>
    </div>
  </div>
</template>

<script setup>
  const animationLink = ref('https://cdn.lottielab.com/l/6uuG7iHZQbrNp8.json');
</script>
