import { defineStore } from 'pinia';
import { ref } from 'vue';

export type Listing = {
  name: string;
  price: number;
};

export const useShop = defineStore('shop', () => {
  const shop = ref<Listing[]>([
    { name: 'Calendario Italiano', price: 10 },
    { name: 'Calendario Inglese', price: 100 },
    { name: 'Calendario Tedesco', price: 100 },
  ]);

  return { shop };
});
