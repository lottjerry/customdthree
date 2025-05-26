<template>
  <div
    class="align-center flex gap-2 cursor-pointer sm:w-[172px] w-[138px]"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <h1 class="text-2xl text-white sm:text-3xl">Say Hello</h1>
    <transition
    enter-active-class="transition ease-out duration-700"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <IconHand v-if="show" class="sm:w-[2em] w-[1.5em]" />
  </transition>
  </div>
</template>

<script setup>
  const show = ref(false);
</script>
