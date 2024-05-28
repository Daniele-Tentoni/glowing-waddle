<script setup lang="ts">
import { useCart } from '@/stores/cart';
import { computed } from 'vue';
import CheckoutDialog from '@/components/checkout/CheckoutDialog.vue';

const cart = useCart();

const total = computed(() => cart.cart.items.reduce((a, b) => a + b.price, 0));
</script>
<template>
  <VList>
    <VListItem
      v-for="(item, i) in cart.cart.items"
      :key="i"
      :title="item.name"
      :subtitle="item.price"
    >
      <VBtn prepend-icon="mdi-cart-arrow-up">Remove</VBtn>
    </VListItem>
  </VList>
  <VRow>
    <VCol>Total: {{ total }}</VCol>
    <VCol>
      <CheckoutDialog></CheckoutDialog>
    </VCol>
  </VRow>
</template>
