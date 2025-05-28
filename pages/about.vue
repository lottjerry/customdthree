<template>
  <div>
    <section
      class="flex h-dvh flex-col items-start justify-center gap-10 border-[2px] px-2 md:items-center md:px-0"
    >
      <Subtitle />
      <HeroTitle />
      <CountdownTimer />
      <div class="absolute md:bottom-[5em] md:left-[5em] bottom-[1em] left-[2em] w-[1.5rem] md:w-auto">
        <client-only>
          <Vue3Lottie :animationLink="animationLink" :height="80" />
        </client-only>
      </div>
    </section>
    <section class="h-dvh border-[2px]"></section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'temp',
  });
  const animationLink = ref(
    'https://lottie.host/e0804992-47f3-420d-b30c-412a734c0cc0/cFcHTrYcci.json',
  );
</script>
