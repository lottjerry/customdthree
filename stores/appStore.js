import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', () => {
  const pageLoaded = ref(false);

  return {
    pageLoaded,
  };
});
