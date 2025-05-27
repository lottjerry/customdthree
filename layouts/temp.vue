<template>
  <div class="h-dvh bg-black">
    <header class="fixed left-0 top-0 h-[6rem] w-dvw bg-black">
      <nav class="flex h-full items-center justify-around text-white">
        <IconLogo />
        <GreetingButton />
      </nav>
    </header>
    <main class="border-purple-400 bg-purple-950">
      <slot />
    </main>
    <footer class="h-[5rem] border-[2px] border-green-400 bg-green-950">
      <p class="text-white">Footer</p>
    </footer>
  </div>
</template>
