<template>
  <div>
    <section
      class="flex h-dvh flex-col items-start justify-center gap-10 border-[2px] px-2 md:items-center md:px-0 mt-14 md:mt-0"
    >
      <Subtitle />
      <HeroTitle />
      <CountdownTimer />
    </section>
    <section class="h-dvh border-[2px]"></section>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'temp',
  });
</script>
