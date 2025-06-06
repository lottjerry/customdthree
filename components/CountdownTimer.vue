<template>
  <div class="text-white opacity-0" ref="countdown_timer">
    <client-only>
      <VueCountdown
        class="flex items-start justify-center md:gap-8 gap-3"
        :time="remainingTime"
        :transform="transformSlotProps"
        v-slot="{ days, hours, minutes, seconds }"
      >
        <!-- Days -->
        <div class="flex flex-col items-center w-15">
          <h1 class="text-4xl font-thin md:text-7xl">{{ days }}</h1>
          <h3 class="mt-2 md:text-2xl">Days</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div
            class="first-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
          <div
            class="first-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center w-15">
          <h1 class="text-4xl font-thin md:text-7xl">{{ hours }}</h1>
          <h3 class="textxl mt-2 md:text-2xl">Hours</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div
            class="second-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
          <div
            class="second-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col items-center  w-15">
          <h1 class="text-4xl font-thin md:text-7xl">{{ minutes }}</h1>
          <h3 class="textxl mt-2 md:text-2xl">Minutes</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div
            class="third-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
          <div
            class="third-colon h-[0.3rem] w-[0.3rem] rounded-full md:h-2 md:w-2"
          ></div>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col items-center w-15">
          <h1 class="text-4xl font-thin md:text-7xl">{{ seconds }}</h1>
          <h3 class="textxl mt-2 md:text-2xl">Seconds</h3>
        </div>
      </VueCountdown>
    </client-only>
  </div>
</template>

<script setup>
  import VueCountdown from '@chenfengyuan/vue-countdown';
  import { useAppStore } from '~/stores/appStore';

  const gsap = useGSAP();

  const countdown_timer = ref(null)

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);


  // ⏰ Set your fixed countdown target (e.g., website launch)
const END_DATE = new Date('2025-08-09T00:00:00Z').getTime()

// ✅ Fetch current time from WorldTimeAPI
const { data: worldTime, pending, error } = await useFetch('https://worldtimeapi.org/api/timezone/Etc/UTC')

// ✅ Compute time left only once WorldTimeAPI responds
const remainingTime = computed(() => {
  if (!worldTime.value) return 0

  const serverNow = new Date(worldTime.value.datetime).getTime()
  return Math.max(END_DATE - serverNow, 0)
})

// Format time values (e.g. prepend 0s)
function transformSlotProps(props) {
  const formattedProps = {}
  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value)
  })
  return formattedProps
}


  watch(pageLoaded, () => {
    gsap.fromTo(
      countdown_timer.value,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1
      },
    );
  });
</script>

<style scoped>
  .first-colon {
    background: linear-gradient(
      90deg,
      #91d1f1 0%,
      #25a5e6 46.67%,
      #252fff 100%
    );
  }

  .second-colon {
    background: linear-gradient(
      90deg,
      #f0a72f 0%,
      #ec6c33 31.6%,
      #e34534 69.81%,
      #cd18c2 100%
    );
  }

  .third-colon {
    background: linear-gradient(90deg, #f5f5f7 0%, #5f5f63 100%);
  }
</style>
