<template>
  <div
    class="border-colors flex h-[400px] w-[700px] flex-col items-center justify-center gap-[50px] rounded-[3.5rem] border-2 bg-black bg-opacity-60 backdrop-blur-[2px]"
  >
    <h1 class="text-7xl font-thin">Are you ready ?</h1>
    <div
      class="flex flex-col items-center justify-center gap-[50px] self-stretch"
    >
      <h2 class="text-2xl font-thin">Be the first to hear when we go live.</h2>
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
