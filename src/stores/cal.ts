import { first, type Cal } from '@/models/cals';
import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useDate } from 'vuetify';

export const useCal = defineStore('cal', () => {
  const lastWrapped = useLocalStorage('cal.lastWrapped', 0, { mergeDefaults: true });
  const cal = ref<Cal>(first);

  const adapter = useDate();

  const day = computed(() => {
    const now = new Date();
    let i = 0;
    for (let j = 0; j < now.getMonth(); j++) {
      const monthDate: Date = new Date(now.getFullYear(), j);
      const end: Date = adapter.endOfMonth(monthDate) as Date;
      i += Number(end.getDate());
    }

    return i + now.getDate();
  });

  const today = computed(() => {
    return cal.value.days.find((f) => f.num === day.value);
  });

  const firstUnwrappedDay = computed(() => {
    const sorted = cal.value.days.filter((f) => !f.thrown).sort((a, b) => a.num - b.num);
    return sorted.at(0);
  });

  function takeAway(id: number) {
    const day = cal.value.days.find((f) => f.num === id);
    if (day) {
      day.thrown = true;
    }
  }

  return { cal, day, today, firstUnwrappedDay, takeAway };
});
