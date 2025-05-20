<template>
  <div>
    <header class="fixed start-0 top-0 z-20">
      <Navbar />
    </header>
    <section
      class="align-center relative mb-[100px] flex h-dvh flex-col items-center pt-[200px]"
    >
      <div class="flex flex-col items-center justify-center gap-[50px]">
        <Subtitle class="relative z-20" />
        <div>
          <HeroTitle />
        </div>

        <CountdownTimer class="relative z-20 mt-[4em]" />
      </div>
      <div class="absolute bottom-[5em] left-[5em]">
        <client-only>
          <Vue3Lottie :animationLink="animationLink" :height="80" />
        </client-only>
      </div>
    </section>
    <section
      class="relative z-10 mx-[400px] mb-[160px] mt-[100px] border text-white"
    >
      <h1 class="text-center text-3xl">Section 2</h1>
      <LoremFull />
    </section>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
  const animationLink = ref(
    'https://lottie.host/e0804992-47f3-420d-b30c-412a734c0cc0/cFcHTrYcci.json',
  );
</script>
