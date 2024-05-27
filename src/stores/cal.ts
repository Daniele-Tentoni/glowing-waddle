import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useDate } from 'vuetify';

export interface Day {
  num: number;
  text: string;
  thrown?: boolean;
}

export class D implements Day {
  num: number;
  text: string;
  thrown?: boolean;

  constructor(num: number, text: string, thrown: boolean = false) {
    this.num = num;
    this.text = text;
    this.thrown = thrown;
  }
}

export type Cal = {
  name: string;
  days: Day[];
};

export const useCal = defineStore('cal', () => {
  const cal = ref<Cal>({
    name: 'first',
    days: [
      { num: 147, text: 'Questa è una massima' },
      { num: 148, text: 'Questa è una massima' },
      { num: 149, text: 'Questa è una massima' },
      { num: 150, text: 'Questa è una massima' },
    ],
  });

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
