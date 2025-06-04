<template>
  <div>
    <section
      id="hero_section"
      ref="hero_section"
      class="flex h-svh flex-col items-start justify-center gap-10 px-2 md:items-center md:px-0 lg:h-dvh"
    >
      <div ref="subtitle">
        <Subtitle />
      </div>
      <div ref="herotitle">
        <HeroTitle />
      </div>
      <div ref="countdown">
        <CountdownTimer />
      </div>
      <div
        @click="scrollToSection"
        class="absolute bottom-[1em] right-[2em] w-[1.5rem] cursor-pointer opacity-0 md:bottom-[5em] md:right-[5em] md:w-auto"
        ref="mouse_scroll"
      >
        <client-only>
          <Vue3Lottie :animationLink="animationLink" :height="80" />
        </client-only>
      </div>
    </section>
    <section
      id="subscribe_section"
      ref="subscribe_section"
      class="relative flex h-svh flex-col items-center justify-center bg-[url(/assets/images/Background_Mobile.jpeg)] bg-cover bg-fixed bg-center bg-no-repeat px-1 md:bg-[url(/assets/images/Background_Tablet.jpeg)] md:px-0 lg:h-dvh lg:bg-[url(/assets/images/Background_Full.jpeg)]"
    >
      <div ref="glass_card" class="w-full opacity-0 md:w-auto">
        <GlassCard />
      </div>

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
  const hero_section = ref(null);
  const subscribe_section = ref(null);
  const subtitle = ref(null);
  const herotitle = ref(null);
  const countdown = ref(null);
  const glass_card = ref(null);

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);

  const animationLink = ref(
    'https://lottie.host/e0804992-47f3-420d-b30c-412a734c0cc0/cFcHTrYcci.json',
  );

  const scrollToSection = () => {
    const el = document.querySelector('#subscribe_section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  watch(pageLoaded, (newValue) => {
    // Initial animation (entry animation)
    gsap.fromTo(
      mouse_scroll.value,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
    );

    // Scroll-based animation using timeline
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: herotitle.value,
        start: 'top 30%',
        end: 'center 5%',
        scrub: 4,
      },
    });

    tl2
      .to(subtitle.value, {
        y: -50,
        opacity: 0,
        duration: 1,
      })
      .to(herotitle.value, {
        y: -50,
        opacity: 0,
        duration: 1,
      })
      .to(countdown.value, {
        y: -50,
        opacity: 0,
        duration: 1,
      });

    // Scroll-based animation using timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero_section.value,
        start: '60% top',
        end: '80%',
        scrub: 3,
      },
    });

    tl.to(mouse_scroll.value, {
      y: 35,
      opacity: 0,
      duration: 1,
    });

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: hero_section.value,
        start: 'center top',
        scrub: 3,
      },
    });

    tl3.set(glass_card.value, {
      y: 100,
    });

    tl3.to(glass_card.value, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
  });
</script>
