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
  id: string;
  name: string;
  days: Day[];
};

export const first: Cal = {
  id: 'first',
  name: 'Primo calendario',
  days: [
    { num: 1, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 2,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    { num: 3, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 4,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 5, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    {
      num: 6,
      text: 'Il solo limite alle nostre realizzazioni di domani sono i nostri dubbi di oggi. - Franklin D. Roosevelt',
    },
    { num: 7, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    {
      num: 8,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    { num: 9, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    { num: 10, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 11,
      text: "La vita è come andare in bicicletta. Per mantenere l'equilibrio devi muoverti. - Albert Einstein",
    },
    {
      num: 12,
      text: "L'unico modo per fare un ottimo lavoro è amare quello che fai. - Steve Jobs",
    },
    { num: 13, text: "La misura dell'intelligenza è la capacità di cambiare. - Albert Einstein" },
    { num: 14, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    {
      num: 15,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    {
      num: 16,
      text: "Non puoi attraversare il mare semplicemente stando in piedi e fissando l'acqua. - Rabindranath Tagore",
    },
    {
      num: 17,
      text: 'La vita è davvero semplice, ma insistiamo nel renderla complicata. - Confucio',
    },
    {
      num: 18,
      text: 'Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. - Eleanor Roosevelt',
    },
    { num: 19, text: 'Non puoi battere la persona che non si arrende mai. - Babe Ruth' },
    { num: 20, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 21, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 22,
      text: 'La cosa più difficile è la decisione di agire, il resto è solo tenacia. - Amelia Earhart',
    },
    {
      num: 23,
      text: "Il successo è la capacità di passare da un fallimento all'altro senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 24, text: 'Non puoi cambiare il vento, ma puoi regolare le vele. - Seneca' },
    {
      num: 25,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    {
      num: 26,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    {
      num: 27,
      text: 'Il modo migliore per iniziare è smettere di parlare e iniziare a fare. - Walt Disney',
    },
    { num: 28, text: 'Il solo vero errore è quello da cui non impariamo nulla. - Henry Ford' },
    { num: 29, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    { num: 30, text: "Il potere dell'immaginazione ci rende infiniti. - John Muir" },
    { num: 31, text: "Non c'è ascensore per il successo, devi prendere le scale. - Zig Ziglar" },
    {
      num: 32,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    {
      num: 33,
      text: 'La felicità non è qualcosa di già pronto. Viene dalle tue azioni. - Dalai Lama',
    },
    { num: 34, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 35,
      text: 'Il successo è trovare ciò che ti piace fare e poi offrire a tutti il meglio di te stesso. - Anonimo',
    },
    { num: 36, text: 'Se puoi sognarlo, puoi farlo. - Walt Disney' },
    { num: 37, text: 'Non smettere mai di sognare, solo chi sogna può volare. - Peter Pan' },
    { num: 38, text: 'Ogni grande sogno inizia con un sognatore. - Harriet Tubman' },
    { num: 39, text: 'La vita è 10% ciò che ti accade e 90% come reagisci. - Charles R. Swindoll' },
    { num: 40, text: 'Le grandi cose non vengono mai da zone di comfort. - Anonimo' },
    {
      num: 41,
      text: 'Il successo è ottenere ciò che vuoi. La felicità è volere ciò che ottieni. - Dale Carnegie',
    },
    { num: 42, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    { num: 43, text: 'Non puoi cambiare quello che sei, solo quello che fai. - Philip Pullman' },
    {
      num: 44,
      text: 'Non è mai troppo tardi per essere ciò che avresti potuto essere. - George Eliot',
    },
    { num: 45, text: "Non importa quanto vai piano, l'importante è non fermarsi. - Confucio" },
    {
      num: 46,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 47,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 48, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    {
      num: 49,
      text: 'Il segreto della felicità non è fare ciò che si ama, ma amare ciò che si fa. - James M. Barrie',
    },
    { num: 50, text: 'La miglior vendetta è un successo clamoroso. - Frank Sinatra' },
    {
      num: 51,
      text: "Il fallimento è semplicemente l'opportunità di ricominciare, questa volta in modo più intelligente. - Henry Ford",
    },
    { num: 52, text: 'Non è mai troppo tardi per diventare quello che vuoi essere. - Anonimo' },
    {
      num: 53,
      text: 'Non sono i più forti della specie a sopravvivere, né i più intelligenti, ma quelli più reattivi ai cambiamenti. - Charles Darwin',
    },
    {
      num: 54,
      text: 'Le grandi menti discutono di idee; le menti mediocri discutono di eventi; le menti piccole discutono di persone. - Eleanor Roosevelt',
    },
    {
      num: 55,
      text: 'Le persone non sono prigioniere del destino, ma solo delle proprie menti. - Franklin D. Roosevelt',
    },
    { num: 56, text: 'Se puoi sognarlo, puoi farlo. - Walt Disney' },
    {
      num: 57,
      text: 'Il più grande pericolo nella vita è che puoi prendere troppe precauzioni. - Alfred Adler',
    },
    {
      num: 58,
      text: 'Non è la specie più forte a sopravvivere, né la più intelligente, ma quella che si adatta meglio al cambiamento. - Charles Darwin',
    },
    { num: 59, text: 'Credi di poterlo fare e sei già a metà strada. - Theodore Roosevelt' },
    { num: 60, text: "Non importa quanto vai piano, l'importante è non fermarsi. - Confucio" },
    {
      num: 61,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 62,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 63,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 64,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 65, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 66, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 67,
      text: 'Il segreto della felicità non è fare ciò che si ama, ma amare ciò che si fa. - James M. Barrie',
    },
    {
      num: 68,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    {
      num: 69,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    { num: 70, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    { num: 71, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    {
      num: 72,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 73,
      text: 'Il solo limite alle nostre realizzazioni di domani sono i nostri dubbi di oggi. - Franklin D. Roosevelt',
    },
    { num: 74, text: "Non c'è ascensore per il successo, devi prendere le scale. - Zig Ziglar" },
    { num: 75, text: 'Non puoi cambiare il vento, ma puoi regolare le vele. - Seneca' },
    {
      num: 76,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 77, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 78,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    {
      num: 79,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 80, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 81,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 82, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    {
      num: 83,
      text: 'Il successo è trovare ciò che ti piace fare e poi offrire a tutti il meglio di te stesso. - Anonimo',
    },
    { num: 84, text: 'Non smettere mai di sognare, solo chi sogna può volare. - Peter Pan' },
    {
      num: 85,
      text: "La vita è come andare in bicicletta. Per mantenere l'equilibrio devi muoverti. - Albert Einstein",
    },
    { num: 86, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    { num: 87, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 88,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 89, text: "La misura dell'intelligenza è la capacità di cambiare. - Albert Einstein" },
    { num: 90, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 91, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 92,
      text: 'Non è mai troppo tardi per essere ciò che avresti potuto essere. - George Eliot',
    },
    {
      num: 93,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 94, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 95, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 96, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 97,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 98,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 99,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 100, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 101, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 102,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 103, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 104,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 105,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 106,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 107, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 108,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 109, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 110,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 111, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 112, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 113,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 114, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 115, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 116,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 117, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 118, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 119,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 120,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 121,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 122, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 123, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 124, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 125,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 126,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 127,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 128, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 129, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 130,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 131, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 132,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 133,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 134,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 135, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 136,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 137, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 138,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 139, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 140, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 141,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 142, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 143, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 144,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 145, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 146, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 147,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 148,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 149,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 150, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 151, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 152, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 153,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 154,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 155,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 156, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 157, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 158,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 159, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 160,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 161,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 162,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 163, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 164,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 165, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 166,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 167, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 168, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 169,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 170, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 171, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 172,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 173, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 174, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 175,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 176,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 177,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 178, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 179, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 180, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 181,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 182,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 183,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 184, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 185, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 186,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 187, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 188,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 189,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 190,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 191, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 192,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 193, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 194,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 195, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 196, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 197,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 198, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 199, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 200,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 201, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 202, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 203,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 204,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 205,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 206, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 207, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 208, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 209,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 210,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 211,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 212, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 213, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 214,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 215, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 216,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 217,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 218,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 219, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 220,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 221, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 222,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 223, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 224, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 225,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 226, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 227, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 228,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 229, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 230, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 231,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 232,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 233,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 234, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 235, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 236, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 237,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 238,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 239,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 240, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 241, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 242,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 243, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 244,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 245,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 246,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 247, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 248,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 249, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 250,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 251, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 252, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 253,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 254, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 255, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 256,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 257, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 258, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 259,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 260,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 261,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 262, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 263, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 264, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 265,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 266,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 267,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 268, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 269, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 270,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 271, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 272,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 273,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 274,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 275, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 276,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 277, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 278,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 279, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 280, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 281,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 282, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 283, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 284,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 285, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 286, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 287,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 288,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 289,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 290, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 291, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 292, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 293,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 294,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 295,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 296, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 297, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 298,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 299, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 300,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 301,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 302,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 303, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 304,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 305, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 306,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 307, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 308, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 309,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 310, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 311, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 312,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 313, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 314, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 315,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 316,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 317,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 318, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 319, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 320, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 321,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 322,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 323,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 324, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 325, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 326,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 327, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 328,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 329,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 330,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 331, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 332,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    { num: 333, text: 'Il cambiamento è la legge della vita. - John F. Kennedy' },
    {
      num: 334,
      text: 'Il mondo è pieno di persone disposte a fare grandi cose, ma pochissime disposte a fare le piccole cose. - John C. Maxwell',
    },
    { num: 335, text: 'La felicità non è qualcosa di fatto. Viene dalle tue azioni. - Dalai Lama' },
    { num: 336, text: 'Non aspettare. Non sarà mai il momento giusto. - Napoleon Hill' },
    {
      num: 337,
      text: 'La vita è troppo breve per sprecarla a realizzare i sogni degli altri. - Oscar Wilde',
    },
    { num: 338, text: 'La mente è tutto. Ciò che pensi, diventi. - Buddha' },
    { num: 339, text: 'Non sognare la tua vita, vivi il tuo sogno. - Anonimo' },
    {
      num: 340,
      text: 'Il successo non è finale, il fallimento non è fatale: è il coraggio di continuare che conta. - Winston Churchill',
    },
    { num: 341, text: 'Non trovare colpa, trova un rimedio. - Henry Ford' },
    { num: 342, text: 'La tua vita è la tua storia, scrivi bene, modifica spesso. - Anonimo' },
    {
      num: 343,
      text: 'Il vero segreto della felicità è prendersi un genuino interesse per tutti i dettagli della vita quotidiana. - William Morris',
    },
    {
      num: 344,
      text: "La felicità è un rischio. Se non hai un po' di coraggio, è meglio che chiudi il libro adesso. - Paulo Coelho",
    },
    {
      num: 345,
      text: "Il coraggio non è l'assenza di paura, ma la consapevolezza che qualcosa è più importante della paura. - Ambrose Redmoon",
    },
    { num: 346, text: 'Le opportunità non accadono, le crei tu. - Chris Grosser' },
    { num: 347, text: "Il segreto del successo è costanza nell'intento. - Benjamin Disraeli" },
    { num: 348, text: 'Credi di poterlo fare e sei a metà strada. - Theodore Roosevelt' },
    {
      num: 349,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 350,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 351,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 352, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 353, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 354,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
    { num: 355, text: 'Non contare i giorni, fai in modo che i giorni contino. - Muhammad Ali' },
    {
      num: 356,
      text: 'La vita è ciò che accade mentre siamo impegnati a fare altri piani. - John Lennon',
    },
    {
      num: 357,
      text: 'Le difficoltà spesso preparano le persone comuni a un destino straordinario. - C.S. Lewis',
    },
    {
      num: 358,
      text: 'Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno. - Robert Collier',
    },
    { num: 359, text: 'Il miglior modo per predire il futuro è inventarlo. - Alan Kay' },
    {
      num: 360,
      text: 'Il coraggio non è avere la forza di andare avanti, è andare avanti quando non hai forza. - Napoleon Bonaparte',
    },
    {
      num: 361,
      text: "Il vero segno dell'intelligenza non è la conoscenza ma l'immaginazione. - Albert Einstein",
    },
    {
      num: 362,
      text: "Non c'è nulla di nobile nell'essere superiore a qualche altro uomo. La vera nobiltà sta nell'essere superiore alla persona che eravamo fino a ieri. - Ernest Hemingway",
    },
    {
      num: 363,
      text: "Il successo è inciampare di fallimento in fallimento senza perdere l'entusiasmo. - Winston Churchill",
    },
    { num: 364, text: 'Sii il cambiamento che vuoi vedere nel mondo. - Mahatma Gandhi' },
    { num: 365, text: 'Non aspettare il momento opportuno: crealo. - George Bernard Shaw' },
    {
      num: 366,
      text: 'Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer',
    },
  ],
};
