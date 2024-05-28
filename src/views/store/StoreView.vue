<script setup lang="ts">
import type { Listing } from '@/models/listing';
import { useCart, type CartItem } from '@/stores/cart';
import { useShop } from '@/stores/shop';
import { useDebounce } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const shop = useShop();

const cart = useCart();

function addToCart(shopItem: Listing) {
  cart.add({ name: shopItem.name, price: shopItem.price } as CartItem);
}

function removeFromCart(shopItem: Listing) {
  cart.remove(shopItem.name);
}

const router = useRouter()
function info(id: string) {
  router.push({name: "listing-details", params: { id }})
}

const excludeOwned = ref<boolean>(false);

const textFilter = ref<string>('');
const textToFilter = useDebounce(textFilter, 500);

const filtered = computed(() => {
  let output = shop.shop;
  if (excludeOwned.value) {
    output = shop.shop.filter((f) => !cart.inCart(f.name));
  }

  if (textFilter.value) {
    output = shop.shop.filter((f) => f.name.includes(textToFilter.value));
  }

  return output;
});
</script>

<template>
  <VContainer>
    <VRow>
      <VCol>
        <VCheckbox
          data-test="owned-filter"
          v-model="excludeOwned"
          label="Exclude owned"
        ></VCheckbox>
      </VCol>
      <VSpacer></VSpacer>
      <VCol>
        <VTextField
          prepend-inner-icon="mdi-magnify"
          data-test="text-filter"
          label="Filter"
          v-model="textFilter"
        ></VTextField>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="4" lg="3" v-for="(item, i) in filtered" :key="i">
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
            <VBtn v-else @click="removeFromCart(item)" prepend-icon="mdi-cart-arrow-up"
              >Remove</VBtn
            >
            <VSpacer></VSpacer>
            <VTooltip text="More info">
              <template #activator="{ props }">
                <VBtn v-bind="props" @click="info(item.id)" icon="mdi-information-symbol" data-test="info-icon"></VBtn>
              </template>
            </VTooltip>
          </VCardActions>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
