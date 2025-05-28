<template>
  <div ref="container" class="relative w-fit overflow-hidden">
    <h1
      class="flex cursor-default flex-col text-6xl text-white md:flex-row md:text-[4rem] lg:text-[5rem] xl:text-8xl"
    >
      <span class="pb-2">Design.</span>
      <span class="pb-2">Develop.</span>
      <span class="pb-2">Deploy</span>
    </h1>
    <div class="light pointer-events-none absolute inset-0"></div>
  </div>
</template>

<script setup>
  const container = ref(null);

  let animationFrame;
  const updateMousePosition = (e) => {
    const rect = container.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    useGSAP().to(container.value, {
      duration: 0.3,
      '--x': `${x}px`,
      '--y': `${y}px`,
      ease: 'power2.out',
    });
  };

  onMounted(() => {
    if (container.value) {
      window.addEventListener('mousemove', updateMousePosition);
    }
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
  });
</script>

<style scoped>
  .light {
    transition: background 0.1s ease;
    background: radial-gradient(
      circle at var(--x) var(--y),
      transparent 1%,
      rgba(0, 0, 0, 0.85) 20%
    );
    width: 100%;
    height: 100%;
  }

  span:nth-child(1) {
    background: linear-gradient(
      90deg,
      #91d1f1 0%,
      #25a5e6 46.67%,
      #252fff 100%
    );
    background-clip: text;
    color: transparent;
  }

  span:nth-child(2) {
    background: linear-gradient(
      90deg,
      #f0a72f 0%,
      #ec6c33 31.6%,
      #e34534 69.81%,
      #cd18c2 100%
    );
    background-clip: text;
    color: transparent;
  }

  span:nth-child(3) {
    background: linear-gradient(90deg, #f5f5f7 0%, #5f5f63 100%);
    background-clip: text;
    color: transparent;
  }
</style>
