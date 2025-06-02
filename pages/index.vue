<template>
  <div>
    <section
      class="flex h-dvh flex-col items-start justify-center gap-10 px-2 md:items-center md:px-0"
    >
      <Subtitle />
      <HeroTitle />
      <CountdownTimer />
      <div
        class="absolute bottom-[1em] left-[2em] w-[1.5rem] md:bottom-[5em] md:left-[5em] md:w-auto"
      >
        <client-only>
          <Vue3Lottie :animationLink="animationLink" :height="80" />
        </client-only>
      </div>
    </section>
    <section
      v-if="appStore.pageLoaded"
      class="relative h-dvh bg-[url(/assets/images/Background_Mobile.jpeg)] md:bg-[url(/assets/images/Background_Tablet.jpeg)] lg:bg-[url(/assets/images/Background_Full.jpeg)] bg-cover bg-fixed bg-center bg-no-repeat flex flex-col items-center justify-center px-1 md:px-0"
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

  const appStore = useAppStore();
  const animationLink = ref(
    'https://lottie.host/e0804992-47f3-420d-b30c-412a734c0cc0/cFcHTrYcci.json'
  );
</script>
