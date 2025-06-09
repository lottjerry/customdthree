<template>
  <div
    ref="loader"
    class="fixed inset-0 z-[999] flex items-start justify-center bg-black"
  >
    <section
      class="flex h-dvh w-full flex-col items-start justify-center gap-10 px-2 md:items-center md:px-0"
    >
      <Subtitle />
      <div class="h-[72px] md:h-[112px]">
        <Animation />
      </div>
      <HeroTitle class="opacity-0" />
    </section>
  </div>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useAppStore } from '~/stores/appStore';

  const appStore = useAppStore();
  const loader = ref(null);
  const load_Complete = ref(false);
  const emit = defineEmits(['loaded']);

  const nuxtApp = useNuxtApp();

  nuxtApp.hook('app:suspense:resolve', () => {
    load_Complete.value = true;
  });

  const startAnimations = () => {
    if (load_Complete.value) {
      useGSAP().to(loader.value, {
        delay: 3,
        duration: 1,
        opacity: 0,
        ease: 'power4.inOut',
        onComplete: () => {
          appStore.pageLoaded = true;
          emit('loaded');
          document.body.style.overflow = ''; // re-enable scroll
        },
      });
    }
  };

  onMounted(() => {
    document.body.style.overflow = 'hidden'; // disable scroll while loading
    startAnimations();
  });

  watch(load_Complete, (val) => {
    if (val) {
      startAnimations();
    }
  });
</script>
