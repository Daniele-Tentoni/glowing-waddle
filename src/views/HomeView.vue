<script setup lang="ts">
import { useCal } from '@/stores/cal';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const cal = useCal();
const route = useRoute();
const router = useRouter();
onMounted(() => {
  if (route.name !== 'calendar' || !route.params.id) {
    router.push({ name: 'calendar', params: { id: cal.cal.id } });
  }
});
</script>

<template>
  <VRow>
    <VCol cols="2">
      <VSheet rounded="lg">
        <VList rounded="lg">
          <VListSubheader>Available calendars</VListSubheader>
          <VListItem
            :title="`Calendar ${cal.cal.name}`"
            link
            :to="{ name: 'calendar', params: { id: cal.cal.id } }"
          ></VListItem>
          <VListItem v-for="n in 5" :key="n" :title="`List Item ${n}`" link></VListItem>

          <VDivider class="my-2"></VDivider>

          <VListItem
            color="grey-lighten-4"
            prepend-icon="mdi-store"
            title="Get more"
            link
            :to="{ name: 'store' }"
          ></VListItem>
        </VList>
      </VSheet>
    </VCol>

    <VCol>
      <RouterView></RouterView>
    </VCol>
  </VRow>
</template>
