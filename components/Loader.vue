<template>
  <div
    ref="loader"
    class="fixed inset-0 z-[999] flex items-start justify-center bg-black"
  >
    <section
      class="flex h-dvh w-full flex-col items-start justify-center gap-10 px-2 md:items-center md:px-0"
    >
      <Subtitle />
      <div class="h-[72px] md:h-[112px]">
        <div class="loader-animation"></div>
      </div>
      <HeroTitle class="opacity-0" />
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useAppStore } from '~/stores/appStore';

const appStore = useAppStore();
const loader = ref(null);
const load_Complete = ref(false);
const emit = defineEmits(['loaded']);

const nuxtApp = useNuxtApp();

nuxtApp.hook('app:suspense:resolve', () => {
  load_Complete.value = true;
});

const startAnimations = () => {
  if (load_Complete.value) {
    useGSAP().to(loader.value, {
      delay: 3,
      duration: 1,
      opacity: 0,
      ease: 'power4.inOut',
      onComplete: () => {
        appStore.pageLoaded = true;
        emit('loaded');
        document.body.style.overflow = ''; // re-enable scroll
      },
    });
  }
};

onMounted(() => {
  document.body.style.overflow = 'hidden'; // disable scroll while loading
  startAnimations();
});

watch(load_Complete, (val) => {
  if (val) {
    startAnimations();
  }
});
</script>

<style scoped>
  .loader-animation {
    position: relative;
    animation:
      rikSpikeRoll 0.65s linear infinite alternate,
      colorChange 4s linear infinite;
    background-image:
      linear-gradient(#91d1f1 50px, transparent 0),
      linear-gradient(#91d1f1 50px, transparent 0),
      linear-gradient(#25a5e6 50px, transparent 0),
      linear-gradient(#25a5e6 50px, transparent 0),
      linear-gradient(#252fff 50px, transparent 0),
      linear-gradient(#252fff 50px, transparent 0);
    background-position:
      0px center,
      15px center,
      30px center,
      45px center,
      60px center,
      75px center,
      90px center;
    background-repeat: no-repeat;
    width: 85px;
    height: 50px;
  }

  @keyframes rikSpikeRoll {
    0% {
      background-size: 10px 3px;
    }
    16% {
      background-size:
        10px 50px,
        10px 3px,
        10px 3px,
        10px 3px,
        10px 3px,
        10px 3px;
    }
    33% {
      background-size:
        10px 30px,
        10px 50px,
        10px 3px,
        10px 3px,
        10px 3px,
        10px 3px;
    }
    50% {
      background-size:
        10px 10px,
        10px 30px,
        10px 50px,
        10px 3px,
        10px 3px,
        10px 3px;
    }
    66% {
      background-size:
        10px 3px,
        10px 10px,
        10px 30px,
        10px 50px,
        10px 3px,
        10px 3px;
    }
    83% {
      background-size:
        10px 3px,
        10px 3px,
        10px 10px,
        10px 30px,
        10px 50px,
        10px 3px;
    }
    100% {
      background-size:
        10px 3px,
        10px 3px,
        10px 3px,
        10px 10px,
        10px 30px,
        10px 50px;
    }
  }

  /* Color change animation */
  @keyframes colorChange {
    0% {
      background-image:
        linear-gradient(#91d1f1 50px, transparent 0),
        linear-gradient(#91d1f1 50px, transparent 0),
        linear-gradient(#25a5e6 50px, transparent 0),
        linear-gradient(#25a5e6 50px, transparent 0),
        linear-gradient(#252fff 50px, transparent 0),
        linear-gradient(#252fff 50px, transparent 0);
    }

    33.33% {
      background-image:
        linear-gradient(#f0a72f 50px, transparent 0),
        linear-gradient(#f0a72f 50px, transparent 0),
        linear-gradient(#ec6c33 50px, transparent 0),
        linear-gradient(#e34534 50px, transparent 0),
        linear-gradient(#e34534 50px, transparent 0),
        linear-gradient(#cd18c2 50px, transparent 0);
    }

    66.66% {
      background-image:
        linear-gradient(#f5f5f7 50px, transparent 0),
        linear-gradient(#f5f5f7 50px, transparent 0),
        linear-gradient(#f5f5f7 50px, transparent 0),
        linear-gradient(#5f5f63 50px, transparent 0),
        linear-gradient(#5f5f63 50px, transparent 0),
        linear-gradient(#5f5f63 50px, transparent 0);
    }
    100% {
      background-image:
        linear-gradient(#91d1f1 50px, transparent 0),
        linear-gradient(#91d1f1 50px, transparent 0),
        linear-gradient(#25a5e6 50px, transparent 0),
        linear-gradient(#25a5e6 50px, transparent 0),
        linear-gradient(#252fff 50px, transparent 0),
        linear-gradient(#252fff 50px, transparent 0);
    }
  }
</style>
