<script setup lang="ts">
import { ref } from 'vue';

const newAddress = ref('');

const addresses = ref<string[]>([]);

function addAddress() {
  addresses.value.push(newAddress.value);
}
</script>
<template>
  <VDialog>
    <template #activator="{ props }">
      <VBtn v-bind="props" prepend-icon="mdi-cash" data-test="checkout-button">Checkout</VBtn>
    </template>
    <template #default="{ isActive }">
      <VCard>
        <VCardTitle>Checkout</VCardTitle>
        <VCardText
          ><VRow
            ><VCol
              >Select your address:
              <VList>
                <VListItem v-for="(address, i) in addresses" :key="i" :title="address"></VListItem>
              </VList> </VCol></VRow
          ><VRow
            ><VCol>
              Or add a new one:
              <VTextField v-model="newAddress"></VTextField>
              <VBtn @click="addAddress" prepend-icon="mdi-plus">Add</VBtn>
            </VCol></VRow
          ></VCardText
        >
        <VCardActions>
          <VBtn @click="isActive.value = false">Close</VBtn>
        </VCardActions>
      </VCard>
    </template>
  </VDialog>
</template>
