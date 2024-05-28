import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export type CartItem = {
  name: string;
  price: number;
};

export type Cart = {
  items: CartItem[];
};

export const useCart = defineStore('cart', () => {
  const cart = ref<Cart>({ items: [] });

  function add(item: CartItem) {
    cart.value?.items.push(item);
  }

  function remove(id: string) {
    cart.value.items = cart.value.items.filter(f => f.name !== id)
  }

  const itemNum = computed(() => cart.value?.items.length ?? 0);

  const inCart = computed(() => (id: string) => cart.value?.items.find((f) => f.name === id));

  return { cart, add, itemNum, inCart, remove };
});
