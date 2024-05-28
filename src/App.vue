<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useCart } from './stores/cart';
import { onMounted } from 'vue';
import { useTitle } from '@vueuse/core';

const links = [
  { title: 'home', icon: 'mdi-home' },
  { title: 'store', icon: 'mdi-store' },
];

const cart = useCart();

onMounted(() => {
  const title = useTitle();
  title.value = 'Glowing Waddle';
});
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <VAppBarTitle>Glowing Waddle</VAppBarTitle>
      <VBtn
        v-for="link in links"
        :key="link.title"
        :text="link.title"
        :to="{ name: link.title }"
        :prepend-icon="link.icon"
        variant="text"
      ></VBtn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-responsive>
      <VBtn :to="{ name: 'cart' }" stacked data-test="cart-icon-button">
        <VBadge :content="cart.itemNum"> <VIcon>mdi-cart-variant</VIcon></VBadge>
      </VBtn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <RouterView></RouterView>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
