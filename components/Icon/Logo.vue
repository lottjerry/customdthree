<template>
  <svg
    ref="icon"
    width="68"
    height="65"
    viewBox="0 0 68 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @mouseenter="show = true"
    @mouseleave="show = false"
    class="h-4rem w-[6rem] cursor-pointer p-2 md:h-[5rem] opacity-0"
  >
    <!-- 3 - Fill -->
    <transition
      enter-active-class="transition ease-out duration-[1s]"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-500"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <path
        v-if="show"
        d="M56.627 12.8609L58.3477 16.5924L51.3604 20.3189L45.255 19.2652L44.1153 19.068L44.753 20.0328L46.6143 22.8492L39.5089 26.6393L31.671 25.6119L23.4327 21.2184L27.5831 19.0045L35.9649 23.4742L36.2003 23.5992L36.4356 23.4742L41.4727 20.7877L42.2999 20.3463L41.4727 19.9049L33.6837 15.7506L37.6143 13.6549L45.9952 18.1246L46.2306 18.2506L46.4659 18.1246L51.6798 15.3443L52.5069 14.9039L51.6798 14.4625L43.8897 10.3082L47.8643 8.18906L56.627 12.8609ZM18.7892 11.0621L16.5675 12.2477L15.7403 12.6881L16.5675 13.1295L24.3565 17.2828L20.2052 19.4967L11.4366 14.8209L9.55576 10.9928L14.1075 8.56601L18.7892 11.0621ZM34.3868 11.9342L30.4561 14.0299L25.9503 11.6275L29.881 9.53183L34.3868 11.9342ZM36.3956 2.07285L44.6378 6.46738L40.6632 8.58652L32.2823 4.11777L32.047 3.99277L31.8116 4.11777L28.9972 5.61777L24.4923 3.21542L28.5606 1.04648L36.3956 2.07285Z"
        fill="url(#paint0_linear_13_51)"
      />
    </transition>
    >
    <!-- 3 - Outline -->
    <path
      d="M56.627 12.8609L58.3477 16.5924L51.3604 20.3189L45.255 19.2652L44.1153 19.068L44.753 20.0328L46.6143 22.8492L39.5089 26.6393L31.671 25.6119L23.4327 21.2184L27.5831 19.0045L35.9649 23.4742L36.2003 23.5992L36.4356 23.4742L41.4727 20.7877L42.2999 20.3463L41.4727 19.9049L33.6837 15.7506L37.6143 13.6549L45.9952 18.1246L46.2306 18.2506L46.4659 18.1246L51.6798 15.3443L52.5069 14.9039L51.6798 14.4625L43.8897 10.3082L47.8643 8.18906L56.627 12.8609ZM18.7892 11.0621L16.5675 12.2477L15.7403 12.6881L16.5675 13.1295L24.3565 17.2828L20.2052 19.4967L11.4366 14.8209L9.55576 10.9928L14.1075 8.56601L18.7892 11.0621ZM34.3868 11.9342L30.4561 14.0299L25.9503 11.6275L29.881 9.53183L34.3868 11.9342ZM36.3956 2.07285L44.6378 6.46738L40.6632 8.58652L32.2823 4.11777L32.047 3.99277L31.8116 4.11777L28.9972 5.61777L24.4923 3.21542L28.5606 1.04648L36.3956 2.07285Z"
      stroke="url(#paint0_linear_13_51)"
    />
    <!-- C - Fill  -->
    <transition
      enter-active-class="transition ease-out duration-[1s]"
      enter-from-class="opacity-0 -translate-x-4"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-500"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-4"
    >
      <path
        v-if="show"
        d="M24.4463 56.3014L25.1748 56.7067L25.1895 55.8727L25.2324 53.2516L29.9326 55.8619L29.8467 61.028L25.2627 61.5241L16.7773 56.8112L16.8564 52.0875L24.4463 56.3014ZM14.1035 27.4137L14.0283 31.9391L6.26465 27.6285L5.53516 27.2233L5.52148 28.0573L5.23242 45.3307L5.22754 45.6305L5.48926 45.776L13.5449 50.2496L13.4668 54.9733L5.39355 50.4918L0.50293 44.4576L0.859375 23.1471L5.44434 22.6061L14.1035 27.4137ZM25.3145 33.6383L30.2031 39.7194L30.125 44.4137L25.4248 41.8043L25.4785 38.5993L25.4834 38.2994L25.2207 38.1539L16.9902 33.5836L17.0654 29.0582L25.3145 33.6383Z"
        fill="url(#paint1_linear_13_51)"
      />
    </transition>
    <!-- C - Outline  -->
    <path
      d="M24.4463 56.3014L25.1748 56.7067L25.1895 55.8727L25.2324 53.2516L29.9326 55.8619L29.8467 61.028L25.2627 61.5241L16.7773 56.8112L16.8564 52.0875L24.4463 56.3014ZM14.1035 27.4137L14.0283 31.9391L6.26465 27.6285L5.53516 27.2233L5.52148 28.0573L5.23242 45.3307L5.22754 45.6305L5.48926 45.776L13.5449 50.2496L13.4668 54.9733L5.39355 50.4918L0.50293 44.4576L0.859375 23.1471L5.44434 22.6061L14.1035 27.4137ZM25.3145 33.6383L30.2031 39.7194L30.125 44.4137L25.4248 41.8043L25.4785 38.5993L25.4834 38.2994L25.2207 38.1539L16.9902 33.5836L17.0654 29.0582L25.3145 33.6383Z"
      stroke="url(#paint1_linear_13_51)"
    />
    <!-- D - Fill -->
    <transition
      enter-active-class="transition ease-out duration-[1s]"
      enter-from-class="opacity-0 translate-x-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-500"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-x-4"
    >
      <path
        v-if="show"
        d="M51.0405 33.4723L42.7436 37.9166L42.477 38.0592L42.4799 38.361L42.6264 55.6373L42.6332 56.4635L43.3618 56.0738L51.1967 51.8766L51.2368 56.6061L38.1059 63.6383L37.8715 35.9752L51.0024 28.943L51.0405 33.4723ZM67.3168 23.2711L67.4985 44.5992L62.7162 50.4586L54.395 54.9147L54.3549 50.1852L62.6528 45.7418L62.9194 45.5992L62.9174 45.2975L62.7709 28.0221L62.7641 27.1949L62.0346 27.5856L54.1987 31.7809L54.1606 27.2516L62.8842 22.5797L67.3168 23.2711Z"
        fill="url(#paint2_linear_13_51)"
      />
    </transition>
    <!-- D - Outline -->
    <path
      d="M51.0405 33.4723L42.7436 37.9166L42.477 38.0592L42.4799 38.361L42.6264 55.6373L42.6332 56.4635L43.3618 56.0738L51.1967 51.8766L51.2368 56.6061L38.1059 63.6383L37.8715 35.9752L51.0024 28.943L51.0405 33.4723ZM67.3168 23.2711L67.4985 44.5992L62.7162 50.4586L54.395 54.9147L54.3549 50.1852L62.6528 45.7418L62.9194 45.5992L62.9174 45.2975L62.7709 28.0221L62.7641 27.1949L62.0346 27.5856L54.1987 31.7809L54.1606 27.2516L62.8842 22.5797L67.3168 23.2711Z"
      stroke="url(#paint2_linear_13_51)"
    />

    <defs>
      <linearGradient
        id="paint0_linear_13_51"
        x1="21.2315"
        y1="462.177"
        x2="72.0524"
        y2="460.735"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F5F5F7" />
        <stop offset="1" stop-color="#5F5F63" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_13_51"
        x1="0"
        y1="42.0651"
        x2="30.7066"
        y2="42.0651"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F0A72F" />
        <stop offset="0.316" stop-color="#EC6C33" />
        <stop offset="0.6981" stop-color="#E34534" />
        <stop offset="1" stop-color="#CD18C2" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_13_51"
        x1="37.3696"
        y1="43.2651"
        x2="68"
        y2="43.2651"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#91D1F1" />
        <stop offset="0.4667" stop-color="#25A5E6" />
        <stop offset="1" stop-color="#252FFF" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
  import { useAppStore } from '~/stores/appStore';

  const gsap = useGSAP();

  const icon = ref(null);

  const appStore = useAppStore();
  const { pageLoaded } = storeToRefs(appStore);
  const show = ref(false);

  watch(pageLoaded, () => {
    gsap.fromTo(
      icon.value,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
    );
  });
</script>
