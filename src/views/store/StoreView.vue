<script setup lang="ts">
import ListingCard from '@/components/store/ListingCard.vue';
import { useCart } from '@/stores/cart';
import { useShop } from '@/stores/shop';
import { useDebounce } from '@vueuse/core';
import { computed, ref } from 'vue';

const shop = useShop();

const cart = useCart();

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
        <ListingCard :item="item"></ListingCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
