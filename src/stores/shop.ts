import { Listing, calendariFilosofici } from '@/models/listing';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useShop = defineStore('shop', () => {
  const shop = ref<Listing[]>(calendariFilosofici);

  return { shop };
});
