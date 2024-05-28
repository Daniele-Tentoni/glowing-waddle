<template>
  <VDialog>
    <template #activator="{ props }">
      <VBtn v-bind="props" prepend-icon="mdi-cash">Checkout</VBtn>
    </template>
    <template #default="{ isActive }">
      <VCard>
        <VCardTitle>Checkout</VCardTitle>
        <VCardText
          ><VRow><VCol>You receive it here.</VCol></VRow
          ><VRow><VCol>You will pay something.</VCol></VRow></VCardText
        >
        <VCardActions>
          <VBtn @click="isActive.value = false">Close</VBtn>
        </VCardActions>
      </VCard>
    </template>
  </VDialog>
</template>
