<template>
  <div
    ref="greeting"
    class="align-center flex w-[170.41px] cursor-pointer items-center gap-2 opacity-0"
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
      <IconHand v-if="show" class="w-[2em]" />
    </transition>
  </div>
</template>

<script setup>
  import { useAppStore } from '~/stores/appStore';

  const gsap = useGSAP();

  const greeting = ref(null);

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);
  const show = ref(false);

  watch(pageLoaded, () => {
    gsap.fromTo(
      greeting.value,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1
      },
    );
  });
</script>
