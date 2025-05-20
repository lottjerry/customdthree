<template>
  <div>
    <header class="fixed start-0 top-0 z-20">
      <Navbar />
    </header>
    <section
      class="align-center mx-[400px] mb-[100px] mt-[100px] flex h-screen flex-col items-center border pt-[150px]"
    >
      <div class="border flex justify-center flex-col items-center gap-[75px]">
        <Subtitle class="relative z-10" />
        <HeroTitle />
      </div>
    </section>
    <section class="mx-[400px] mb-[160px] mt-[100px] border text-white relative z-10">
      <h1 class="text-center text-3xl">Section 2</h1>
      <LoremFull />
    </section>
    <footer class="absolute bottom-0 start-0">
      <Footer />
    </footer>
  </div>
</template>

<script setup></script>
