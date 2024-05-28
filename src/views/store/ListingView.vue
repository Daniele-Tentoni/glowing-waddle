<script setup lang="ts">
import { useShop } from '@/stores/shop';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const shop = useShop();
const route = useRoute();

const id = computed(() => route.params.id.toString());
const listing = computed(() => {
  return shop.shop.find((f) => f.id === id.value);
});
</script>
<template>
  <span>Listing {{ listing?.name }}</span>
</template>
