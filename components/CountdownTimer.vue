<template>
  <div class="text-white">
    <client-only>
      <VueCountdown
        class="flex items-start justify-center md:gap-8 gap-2"
        :time="190 * 24 * 60 * 60 * 1000"
        :transform="transformSlotProps"
        v-slot="{ days, hours, minutes, seconds }"
      >
        <!-- Days -->
        <div class="flex flex-col items-center">
          <h1 class="md:text-7xl text-5xl font-thin">{{ days }}</h1>
          <h3 class="mt-2 md:text-2xl textxl">Days</h3>
        </div>

        <!-- Colon -->
        <div class="md:mt-6 mt-3 flex flex-col justify-center md:gap-3 gap-2">
          <div class="first-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
           <div class="first-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center">
          <h1 class="md:text-7xl text-5xl font-thin">{{ hours }}</h1>
          <h3 class="mt-2 md:text-2xl textxl">Hours</h3>
        </div>

        <!-- Colon -->
        <div class="md:mt-6 mt-3 flex flex-col justify-center md:gap-3 gap-2">
          <div class="second-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
           <div class="second-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col items-center">
          <h1 class="md:text-7xl text-5xl font-thin">{{ minutes }}</h1>
          <h3 class="mt-2 md:text-2xl textxl">Minutes</h3>
        </div>


        <!-- Colon -->
        <div class="md:mt-6 mt-3 flex flex-col justify-center md:gap-3 gap-2">
          <div class="third-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
           <div class="third-colon md:h-2 md:w-2 h-[0.4rem] w-[0.4rem] rounded-full"></div>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col items-center">
          <h1 class="md:text-7xl text-5xl font-thin">{{ seconds }}</h1>
          <h3 class="mt-2 md:text-2xl textxl">Seconds</h3>
        </div>

      </VueCountdown>
    </client-only>
  </div>
</template>

<script setup>
  import VueCountdown from '@chenfengyuan/vue-countdown';

  function transformSlotProps(props) {
    const formattedProps = {};

    Object.entries(props).forEach(([key, value]) => {
      formattedProps[key] = value < 10 ? `0${value}` : String(value);
    });

    return formattedProps;
  }
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
