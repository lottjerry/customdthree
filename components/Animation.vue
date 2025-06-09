<template>
  <div class="h-[72px] md:h-[112px]">
    <div class="loader-wrapper">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<style scoped>
  .loader-wrapper {
    display: flex;
    align-items: center; /* align to center vertically */
    gap: 5px;
    width: max-content;
    height: 50px;
  }

  .bar {
    transform: scaleY(0.06);
    transform-origin: center center;
    background-color: #white;
    width: 10px;
    height: 50px;
  }

  .bar:nth-child(1) {
    animation:
      spike1 0.65s linear infinite alternate,
      colorShift1 4s linear infinite;
  }
  .bar:nth-child(2) {
    animation:
      spike2 0.65s linear infinite alternate,
      colorShift2 4s linear infinite;
  }
  .bar:nth-child(3) {
    animation:
      spike3 0.65s linear infinite alternate,
      colorShift3 4s linear infinite;
  }
  .bar:nth-child(4) {
    animation:
      spike4 0.65s linear infinite alternate,
      colorShift4 4s linear infinite;
  }
  .bar:nth-child(5) {
    animation:
      spike5 0.65s linear infinite alternate,
      colorShift5 4s linear infinite;
  }
  .bar:nth-child(6) {
    animation:
      spike6 0.65s linear infinite alternate,
      colorShift6 4s linear infinite;
  }

  @keyframes spike1 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(1);
    }
    33% {
      transform: scaleY(0.6);
    }
    50% {
      transform: scaleY(0.2);
    }
    66% {
      transform: scaleY(0.06);
    }
    83% {
      transform: scaleY(0.06);
    }
    100% {
      transform: scaleY(0.06);
    }
  }
  @keyframes spike2 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(0.06);
    }
    33% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.6);
    }
    66% {
      transform: scaleY(0.2);
    }
    83% {
      transform: scaleY(0.06);
    }
    100% {
      transform: scaleY(0.06);
    }
  }
  @keyframes spike3 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(0.06);
    }
    33% {
      transform: scaleY(0.06);
    }
    50% {
      transform: scaleY(1);
    }
    66% {
      transform: scaleY(0.6);
    }
    83% {
      transform: scaleY(0.2);
    }
    100% {
      transform: scaleY(0.06);
    }
  }
  @keyframes spike4 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(0.06);
    }
    33% {
      transform: scaleY(0.06);
    }
    50% {
      transform: scaleY(0.06);
    }
    66% {
      transform: scaleY(1);
    }
    83% {
      transform: scaleY(0.6);
    }
    100% {
      transform: scaleY(0.2);
    }
  }
  @keyframes spike5 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(0.06);
    }
    33% {
      transform: scaleY(0.06);
    }
    50% {
      transform: scaleY(0.06);
    }
    66% {
      transform: scaleY(0.06);
    }
    83% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(0.6);
    }
  }
  @keyframes spike6 {
    0% {
      transform: scaleY(0.06);
    }
    16% {
      transform: scaleY(0.06);
    }
    33% {
      transform: scaleY(0.06);
    }
    50% {
      transform: scaleY(0.06);
    }
    66% {
      transform: scaleY(0.06);
    }
    83% {
      transform: scaleY(0.6);
    }
    100% {
      transform: scaleY(1);
    }
  }

  @keyframes colorShift1 {
    0% {
      background-color: #91d1f1;
    }
    33.33% {
      background-color: #f0a72f;
    }
    66.66% {
      background-color: #f5f5f7;
    }
    100% {
      background-color: #91d1f1;
    }
  }
  @keyframes colorShift2 {
    0% {
      background-color: #91d1f1;
    }
    33.33% {
      background-color: #f0a72f;
    }
    66.66% {
      background-color: #f5f5f7;
    }
    100% {
      background-color: #91d1f1;
    }
  }
  @keyframes colorShift3 {
    0% {
      background-color: #25a5e6;
    }
    33.33% {
      background-color: #ec6c33;
    }
    66.66% {
      background-color: #f5f5f7;
    }
    100% {
      background-color: #25a5e6;
    }
  }
  @keyframes colorShift4 {
    0% {
      background-color: #25a5e6;
    }
    33.33% {
      background-color: #e34534;
    }
    66.66% {
      background-color: #5f5f63;
    }
    100% {
      background-color: #25a5e6;
    }
  }
  @keyframes colorShift5 {
    0% {
      background-color: #252fff;
    }
    33.33% {
      background-color: #e34534;
    }
    66.66% {
      background-color: #5f5f63;
    }
    100% {
      background-color: #252fff;
    }
  }
  @keyframes colorShift6 {
    0% {
      background-color: #252fff;
    }
    33.33% {
      background-color: #cd18c2;
    }
    66.66% {
      background-color: #5f5f63;
    }
    100% {
      background-color: #252fff;
    }
  }
</style>
