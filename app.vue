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

  useHead({
    title: 'Custom D3',
    meta: [{ name: "Custom D3", content: "Coming soon page for a web design and development company.", keywords: "Coming soon, web, development, deployment, design, custom", robots: "noindex, nofollow", Language: "english", author: "Jerry Lott" }],
  })

  useSeoMeta({
  title: 'Custom D3',
  ogTitle: 'Custom D3',
  description:  "Coming soon page for a web design and development company.",
  ogDescription:  "Coming soon page for a web design and development company.",
})
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>
