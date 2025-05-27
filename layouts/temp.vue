<template>
  <div class="h-dvh bg-black">
    <header class="fixed left-0 top-0 h-[6rem] w-dvw bg-black">
      <nav class="flex h-full items-center justify-between text-white md:justify-around md:gap-36">
        <IconLogo class="ml-5 md:ml-0" />
        <GreetingButton />
      </nav>
    </header>
    <main class="border-purple-400 bg-purple-950">
      <slot />
    </main>
    <footer class="bg-black">
      <Footer />
    </footer>
  </div>
</template>
