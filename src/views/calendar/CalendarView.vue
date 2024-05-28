<script setup lang="ts">
import { useCal } from '@/stores/cal';
import { computed } from 'vue';

const cal = useCal();
const day = computed(() => cal.firstUnwrappedDay);
</script>

<template>
  <VCard v-if="!day"> No day selected {{ cal.day }} </VCard>
  <VCard v-else max-width="500" class="ma-auto" elevation="20">
    <VCardTitle>
      <VRow>
        <VCol> Sabato </VCol>
        <VSpacer> </VSpacer>
        <VCol> Maggio 2024 </VCol>
      </VRow>
    </VCardTitle>
    <VCardText>
      <span class="text-h4">{{ day?.num }}</span>
      <br />
      <i>{{ day?.text }}</i>
    </VCardText>
    <VCardActions>
      <VBtn @click="cal.takeAway(day?.num)">Strappa</VBtn>
    </VCardActions>
  </VCard>
</template>
