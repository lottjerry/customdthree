<template>
  <div>
    <h1 class="text-5xl text-white flex flex-col md:inline">
      Something <span class="md:text-5xl text-7xl">Awesome</span> Is Coming
    </h1>
  </div>
</template>

<script setup></script>

<style scoped>
  span {
    animation: gradientAnimation 25s linear infinite;
    background: linear-gradient(
      90deg,
      rgba(145, 209, 241, 1) 5%,
      rgba(37, 165, 230, 1) 16%,
      rgba(37, 47, 255, 1) 29%,
      rgba(245, 245, 247, 1) 41%,
      rgba(95, 95, 99, 1) 62%,
      rgba(240, 167, 47, 1) 73%,
      rgba(236, 108, 51, 1) 82%,
      rgba(227, 69, 52, 1) 93%,
      rgba(205, 24, 194, 1) 95%,
      rgba(145, 209, 241, 1) 99%
    );
    background-size: 400% auto;
    background-clip: text;
    color: transparent;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 400% 100%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
</style>
