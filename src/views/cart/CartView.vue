<script setup lang="ts">
import { useCart, type CartItem } from '@/stores/cart';
import { computed } from 'vue';
import CheckoutDialog from '@/components/checkout/CheckoutDialog.vue';

const cart = useCart();

const empty = computed(() => cart.cart.items?.length === 0);

const total = computed(() => cart.cart.items.reduce((a, b) => a + b.price, 0));

function removeCartItem(item: CartItem) {
  cart.remove(item.name);
}
</script>
<template>
  <VSheet v-if="empty">
    <span>Your cart is empty.</span>
  </VSheet>
  <VContainer v-else>
    <VList>
      <VListItem
        v-for="(item, i) in cart.cart.items"
        :key="i"
        :title="item.name"
        :subtitle="item.price"
      >
        <VBtn
          prepend-icon="mdi-cart-arrow-up"
          data-test="remove-button"
          @click="removeCartItem(item)"
          >Remove</VBtn
        >
      </VListItem>
    </VList>
    <VRow>
      <VCol>Total: {{ total }}</VCol>
      <VCol>
        <CheckoutDialog></CheckoutDialog>
      </VCol>
    </VRow>
  </VContainer>
</template>
