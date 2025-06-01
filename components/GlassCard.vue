<template>
  <div
    class="border-colors flex h-[400px] md:w-[700px] w-full flex-col items-center justify-center gap-[50px] rounded-[3.5rem] border-2 bg-black bg-opacity-60 backdrop-blur-[2px] text-white"
  >
    <h1 class="md:text-7xl text-4xl  md:font-thin">Are you ready ?</h1>
    <div
      class="flex flex-col items-center justify-center gap-[50px] self-stretch"
    >
      <h2 class="md:text-2xl text-xl md:font-thin">Be the first to hear when we go live.</h2>
    <EmailField />
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
  .border-colors {
    border-color: rgba(240, 167, 47, 0.2) rgba(145, 209, 241, 0.2)
      rgba(37, 165, 230, 0.2) rgba(227, 69, 52, 0.2);
  }
</style>
