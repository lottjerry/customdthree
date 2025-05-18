<template>
  <div
    class="align-center flex w-48 gap-2 cursor-pointer"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <h1 class="text-3xl text-white">Say Hello</h1>
    <transition
    enter-active-class="transition ease-out duration-700"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <IconHand v-if="show" class="w-[2em]" />
  </transition>
  </div>
</template>

<script setup>
  const show = ref(false);
</script>
