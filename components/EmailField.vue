<template>
  <div class="flex w-full flex-col items-center gap-2">
    <h3 class="w-3/4 text-lg">Email *</h3>
    <div
      class="border-colors flex h-14 w-3/4 items-center justify-between rounded-3xl border bg-transparent px-1"
    >
      <input
        id="email"
        v-model="email"
        type="text"
        class="ml-5 h-8 w-72 bg-transparent text-lg outline-none"
        placeholder="example@domain.com"
      />
      <button
        class="mr-3 h-12 w-32 rounded-3xl border text-lg transition-transform duration-700 ease-in-out hover:translate-x-3"
      >
        <span>Notify Me!</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  const email = ref('');
</script>

<style scoped>
  button:hover {
    animation: gradientAnimation 15s linear infinite;
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

  .border-colors {
    transition: all 0.5s ease-in-out;
  }

  .border-colors:focus-within {
    transition: all 0.5s ease-in-out;
    border-color: rgba(240, 167, 47, 0.5) rgba(145, 209, 241, 0.5)
      rgba(37, 165, 230, 0.5) rgba(227, 69, 52, 0.5);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }
</style>
