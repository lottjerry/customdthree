<template>
  <div>
    <Loader v-if="showLoader" @loaded="showLoader = false" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const showLoader = ref(true);
</script>