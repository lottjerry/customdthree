<template>
  <div>
    <h1 class="cursor-default text-8xl text-white">
      <span>Design.</span>
      <span>Develop.</span>
      <span>Deploy</span>
    </h1>
    <div class="light"></div>
  </div>
</template>
<script setup>
  const handleMouseMove = (e) => {
    const pos = document.documentElement;
    pos.style.setProperty('--x', `${e.clientX}px`);
    pos.style.setProperty('--y', `${e.clientY}px`);
  };

  onMounted(() => {
    document.documentElement.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    document.documentElement.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<style scoped>
  .light {
    position: fixed;
    top: 0;
    left: 0;
    background: radial-gradient(
      circle at var(--x) var(--y),
      transparent 1%,
      rgba(0, 0, 0, 0.85) 20%
    );
    width: 100%;
    height: 100%;
    pointer-events: none;
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
    background: linear-gradient(
      90deg,
      #f5f5f7 0%,
      #5f5f63 100%
    );
    background-clip: text;
    color: transparent;
  }
</style>
