<template>
  <div
    class="align-center flex cursor-pointer items-center gap-2 lg:w-[170.41px]"
    @mouseenter="show = true"
    @mouseleave="show = false"
  >
    <h1 class="text-2xl md:text-3xl">Say Hello</h1>
    <transition
      enter-active-class="transition ease-out duration-700"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <IconHand v-if="show || isMobile" class="w-[2em]" />
    </transition>
  </div>
</template>

<script setup>
  const show = ref(false);
  const isMobile = ref(false);

  const checkScreenSize = () => {
    isMobile.value = window.matchMedia('(max-width: 64rem)').matches;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
</script>
