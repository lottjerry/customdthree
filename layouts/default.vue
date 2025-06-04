<template>
  <div class="h-dvh bg-black">
    <header
      class="fixed left-0 top-0 h-[6rem] w-dvw bg-black z-30 bg-opacity-10 backdrop-blur-[2px] rounded-full"
    >
      <nav
        class="flex h-full items-center justify-between text-white md:justify-around md:gap-36"
      >
        <IconLogo @scroll-to-hero="scrollToHeroSection" class="ml-5 md:ml-0" />
        <div v-show="showGreeting" ref="greeting" class="relative">
          <GreetingButton @scroll-to-subscribe="scrollToSubscribeSection" />
        </div>
        <div
          v-show="showBackToTop"
          ref="backToTop"
          class="relative -top-[50px] opacity-0"
        >
          <BackToTopButton @scroll-to-hero2="scrollToHeroSection" />
        </div>
      </nav>
    </header>
    <main class="bg-black">
      <slot />
    </main>
  </div>
</template>

<script setup>
  const gsap = useGSAP();

  const greeting = ref(null);
  const backToTop = ref(null);
  const showGreeting = ref(true);
  const showBackToTop = ref(false);

  onMounted(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero_section',
        start: '40% top',
        end: '60%',
        scrub: 3,
        onUpdate: (self) => {
          showGreeting.value = self.progress < 1;
        },
      },
    });

    tl.to(greeting.value, {
      y: -50,
      opacity: 0,
      duration: 1,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero_section',
        start: '60% top',
        scrub: 3,
        onUpdate: (self) => {
          showBackToTop.value = self.progress > 0;
        },
      },
    });

    tl2.to(backToTop.value, {
      y: 50,
      opacity: 1,
      duration: 1,
    });
  });

  const scrollToSubscribeSection = () => {
    const el = document.querySelector('#subscribe_section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHeroSection = () => {
    const el = document.querySelector('#hero_section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>
