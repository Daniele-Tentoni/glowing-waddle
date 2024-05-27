import { calendariFilosofici } from '@/models/listing';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Listing = {
  name: string;
  price: number;
};

export const useShop = defineStore('shop', () => {
  const shop = ref<Listing[]>(calendariFilosofici);

  return { shop };
});
