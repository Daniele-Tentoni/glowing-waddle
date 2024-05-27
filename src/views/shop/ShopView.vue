<script setup lang="ts">
import { useCart, type CartItem } from '@/stores/cart';
import { useShop, type Listing } from '@/stores/shop';
import { useDebounce } from '@vueuse/core';
import { computed, ref } from 'vue';

const shop = useShop();

const cart = useCart();

function addToCart(shopItem: Listing) {
  cart.add({ name: shopItem.name, price: shopItem.price } as CartItem);
}

function removeFromCart() {}
function info() {}

const textFilter = ref<string>('');
const textToFilter = useDebounce(textFilter, 500)

const filtered = computed(() => {
  if (!textFilter.value) {
    return shop.shop;
  }

  return shop.shop.filter((f) => f.name.includes(textToFilter.value));
});
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <VCheckbox></VCheckbox>
      </VCol>
      <VSpacer></VSpacer>
      <VCol>
        <VTextField label="Filter" v-model="textFilter"></VTextField>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="3" v-for="(item, i) in filtered" :key="i">
        <VCard>
          <VCardTitle>{{ item.name }}</VCardTitle>
          <VCardSubtitle>{{ item }}</VCardSubtitle>
          <VCardText>{{ item.price }}</VCardText>
          <VCardActions>
            <VBtn
              v-if="!cart.inCart(item.name)"
              @click="addToCart(item)"
              prepend-icon="mdi-cart-arrow-down"
              >To Cart</VBtn
            >
            <VBtn v-else @click="removeFromCart" prepend-icon="mdi-cart-arrow-up">Remove</VBtn>
            <VBtn @click="info" icon="mdi-information-symbol"></VBtn>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
