import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed } from 'vue';

export type CartItem = {
  name: string;
  price: number;
};

export type Cart = {
  items: CartItem[];
};

export const useCart = defineStore('cart', () => {
  const cart = useLocalStorage('cart', { items: [] as CartItem[] }, { mergeDefaults: true });

  function add(item: CartItem) {
    cart.value?.items.push(item);
  }

  function remove(id: string) {
    cart.value.items = cart.value.items.filter((f) => f.name !== id);
  }

  const itemNum = computed(() => cart.value?.items.length ?? 0);

  const inCart = computed(() => (id: string) => cart.value?.items.find((f) => f.name === id));

  return { cart, add, itemNum, inCart, remove };
});
