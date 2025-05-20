<template>
  <div>
    <header class="fixed start-0 top-0 z-20">
      <Navbar />
    </header>
    <section
      class="align-center mx-[400px] mb-[100px] mt-[100px] flex h-screen flex-col items-center border pt-[150px]"
    >
      <div class="flex flex-col items-center justify-center gap-[50px] border">
        <Subtitle class="relative z-10" />
        <HeroTitle />
        <CountdownTimer class="relative z-20 mt-[4em]" />
      </div>
    </section>
    <section
      class="relative z-10 mx-[400px] mb-[160px] mt-[100px] border text-white"
    >
      <h1 class="text-center text-3xl">Section 2</h1>
      <LoremFull />
    </section>
    <footer class="absolute bottom-0 start-0">
      <Footer />
    </footer>
  </div>
</template>

<script setup></script>
