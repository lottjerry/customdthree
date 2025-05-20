<template>
  <div class="flex h-[150px] items-center justify-center gap-5">
    <p class="text-white">© 2025 Custom D3</p>
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
