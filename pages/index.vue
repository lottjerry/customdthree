<template>
  <div>
    <section
      class="flex lg:h-dvh h-svh flex-col items-start justify-center gap-10 px-2 md:items-center md:px-0"
    >
      <Subtitle />
      <HeroTitle />
      <CountdownTimer />
      <div
        class="absolute bottom-[1em] left-[2em] w-[1.5rem] opacity-0 md:bottom-[5em] md:left-[5em] md:w-auto"
        ref="mouse_scroll"
      >
        <client-only>
          <Vue3Lottie :animationLink="animationLink" :height="80" />
        </client-only>
      </div>
    </section>
    <section
      v-if="appStore.pageLoaded"
      class="relative flex lg:h-dvh h-svh flex-col items-center justify-center bg-[url(/assets/images/Background_Mobile.jpeg)] bg-cover bg-fixed bg-center bg-no-repeat px-1 md:bg-[url(/assets/images/Background_Tablet.jpeg)] md:px-0 lg:bg-[url(/assets/images/Background_Full.jpeg)]"
    >
      <GlassCard />
      <footer class="absolute bottom-0">
        <Footer />
      </footer>
    </section>
  </div>
</template>

<script setup>
  import { useAppStore } from '~/stores/appStore';

  const gsap = useGSAP();

  const mouse_scroll = ref(null);

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);

  const animationLink = ref(
    'https://lottie.host/e0804992-47f3-420d-b30c-412a734c0cc0/cFcHTrYcci.json',
  );

  watch(pageLoaded, () => {
    gsap.fromTo(
      mouse_scroll.value,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1
      },
    );
  });
</script>