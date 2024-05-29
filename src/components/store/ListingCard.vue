<script setup lang="ts">
import type { Listing } from '@/models/listing';
import { useCart, type CartItem } from '@/stores/cart';
import { useRouter } from 'vue-router';

const cart = useCart();

const router = useRouter();

defineProps<{ item: Listing }>();

function addToCart(shopItem: Listing) {
  cart.add({ name: shopItem.name, price: shopItem.price } as CartItem);
}

function removeFromCart(shopItem: Listing) {
  cart.remove(shopItem.name);
}

function info(id: string) {
  router.push({ name: 'listing-details', params: { id } });
}
</script>
<template>
  <VCard data-test="cart-item-card">
    <VImg
      class="align-end text-white"
      src="https://picsum.photos/350/165?random"
      height="125"
      cover
    >
    </VImg>
    <VCardTitle>{{ item.name }}</VCardTitle>
    <VCardSubtitle>{{ item }}</VCardSubtitle>
    <VCardText>{{ item.price }} </VCardText>
    <VCardActions>
      <VBtn
        v-if="!cart.inCart(item.name)"
        @click="addToCart(item)"
        prepend-icon="mdi-cart-arrow-down"
        data-test="to-chart"
        >To Cart</VBtn
      >
      <VBtn v-else @click="removeFromCart(item)" prepend-icon="mdi-cart-arrow-up">Remove</VBtn>
      <VSpacer></VSpacer>
      <VTooltip text="More info">
        <template #activator="{ props }">
          <VBtn
            v-bind="props"
            @click="info(item.id)"
            icon="mdi-information-symbol"
            data-test="info-icon"
          ></VBtn>
        </template>
      </VTooltip>
    </VCardActions>
  </VCard>
</template>
