<template>
  <div
    ref="loader"
    class="fixed inset-0 z-[999] flex items-center justify-center bg-black"
  >
    <h1 ref="loader_content" class="text-4xl text-white">Loading...</h1>
  </div>
</template>

<script setup>
  const loader = ref(null);
  const loader_content = ref(null);
  const load_Complete = ref(false);
  const emit = defineEmits(['loaded']);

  const nuxtApp = useNuxtApp();

  nuxtApp.hook('app:suspense:resolve', () => {
    load_Complete.value = true;
  });

  const startAnimations = () => {
    useGSAP().from(loader_content.value, {
      duration: 3,
      onComplete: () => {
        if (load_Complete) {
          exitLoader();
        }
      },
    });
  };

  const exitLoader = () => {
    // Loader exit animation
    useGSAP().to(loader.value, {
      duration: 1,
      x: '-100%',
      ease: 'power4.inOut',
      onComplete: () => {
        emit('loaded'); // Emit 'loaded' event
        console.log('load complete');
      },
    });
  };

  onMounted(() => {
    startAnimations();
  });
</script>
