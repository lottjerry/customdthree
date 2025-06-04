<template>
  <div
    @click="$emit('scroll-to-hero2')"
    ref="toTop"
    class="align-center flex cursor-pointer items-center gap-2 w-[205px]"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <h1 class="text-2xl md:text-3xl">Back To Top</h1>
    <transition
      enter-active-class="transition ease-out duration-700"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div v-if="show">
        <IconHandPoint class="w-[2em]" />
      </div>
    </transition>
  </div>
</template>

<script setup>
  const show = ref(false);
</script>
