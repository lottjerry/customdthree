<template>
  <div class="text-white opacity-0" ref="countdown_timer">
    <client-only>
      <VueCountdown
        class="flex items-start justify-center gap-3 md:gap-8"
        :time="remainingTime"
        :transform="transformSlotProps"
        v-slot="{ days, hours, minutes, seconds }"
      >
        <!-- Days -->
        <div class="w-15 flex flex-col items-center">
          <h1 class="text-4xl font-thin md:text-7xl">{{ days }}</h1>
          <h3 class="mt-2 md:text-2xl">Days</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div class="first-colon dot"></div>
          <div class="first-colon dot"></div>
        </div>

        <!-- Hours -->
        <div class="w-15 flex flex-col items-center">
          <h1 class="text-4xl font-thin md:text-7xl">{{ hours }}</h1>
          <h3 class="mt-2 md:text-2xl">Hours</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div class="second-colon dot"></div>
          <div class="second-colon dot"></div>
        </div>

        <!-- Minutes -->
        <div class="w-15 flex flex-col items-center">
          <h1 class="text-4xl font-thin md:text-7xl">{{ minutes }}</h1>
          <h3 class="mt-2 md:text-2xl">Minutes</h3>
        </div>

        <!-- Colon -->
        <div class="mt-3 flex flex-col justify-center gap-2 md:mt-6 md:gap-3">
          <div class="third-colon dot"></div>
          <div class="third-colon dot"></div>
        </div>

        <!-- Seconds -->
        <div class="w-15 flex flex-col items-center">
          <h1 class="text-4xl font-thin md:text-7xl">{{ seconds }}</h1>
          <h3 class="mt-2 md:text-2xl">Seconds</h3>
        </div>
      </VueCountdown>
    </client-only>
  </div>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'
import { useAppStore } from '~/stores/appStore'

const gsap = useGSAP()
const countdown_timer = ref(null)

const appStore = useAppStore()
const { pageLoaded } = storeToRefs(appStore)

/**
 * 🔒 AUTHORITATIVE END DATE (UTC)
 */
const END_DATE = new Date('2026-06-09T00:00:00Z').getTime()

/**
 * 🕒 Server-synced current time
 */
const currentTime = ref(Date.now())
let interval = null

/**
 * Fetch server time (Nuxt API)
 */
async function syncServerTime() {
  try {
    const { now } = await $fetch('/api/time')
    currentTime.value = now
  } catch (e) {
    // fallback (never breaks countdown)
    currentTime.value = Date.now()
  }
}

/**
 * Countdown remaining time
 */
const remainingTime = computed(() =>
  Math.max(END_DATE - currentTime.value, 0)
)

/**
 * Slot formatting
 */
function transformSlotProps(props) {
  const formatted = {}
  for (const [key, value] of Object.entries(props)) {
    formatted[key] = value < 10 ? `0${value}` : String(value)
  }
  return formatted
}

/**
 * Lifecycle
 */
onMounted(async () => {
  await syncServerTime()

  // Tick every second
  interval = setInterval(() => {
    currentTime.value += 1000
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

/**
 * Animation
 */
watch(pageLoaded, () => {
  gsap.fromTo(
    countdown_timer.value,
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1, delay: 1 }
  )
})
</script>

<style scoped>
.dot {
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 9999px;
}

@media (min-width: 768px) {
  .dot {
    height: 0.5rem;
    width: 0.5rem;
  }
}

.first-colon {
  background: linear-gradient(90deg, #91d1f1, #25a5e6, #252fff);
}

.second-colon {
  background: linear-gradient(90deg, #f0a72f, #ec6c33, #e34534, #cd18c2);
}

.third-colon {
  background: linear-gradient(90deg, #f5f5f7, #5f5f63);
}
</style>
