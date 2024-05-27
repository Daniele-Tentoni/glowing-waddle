<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useCart } from './stores/cart';

const links = ['home', 'shop'];

const cart = useCart();
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <VBtn
          v-for="link in links"
          :key="link"
          :text="link"
          :to="{ name: link }"
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
        <VBtn :to="{ name: 'cart' }" stacked>
          <VBadge :content="cart.itemNum"> <VIcon>mdi-cart-variant</VIcon></VBadge>
        </VBtn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item v-for="n in 5" :key="n" :title="`List Item ${n}`" link></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item color="grey-lighten-4" title="Refresh" link></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

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
