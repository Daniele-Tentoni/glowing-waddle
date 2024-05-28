import { getRandomPrice } from './utils';

export enum TagEnum {
  filosofico = 'Filosofico',
  buffo = 'Buffo',
}

export type Tag = keyof typeof TagEnum;

export class Listing {
  name: string;
  price: number;
  tags: TagEnum[];

  constructor(name: string, price: number, tags: TagEnum[] = []) {
    this.name = name;
    this.price = price;
    this.tags = tags;
  }
}

export const calendariFilosofici: Listing[] = [
  new Listing('Calendario di Aristotele', getRandomPrice(10, 100)),
  new Listing('Calendario di Platone', getRandomPrice(10, 100)),
  new Listing('Calendario di Socrate', getRandomPrice(10, 100)),
  new Listing('Calendario di Epicuro', getRandomPrice(10, 100)),
  new Listing('Calendario di Zenone', getRandomPrice(10, 100)),
  new Listing('Calendario di Eraclito', getRandomPrice(10, 100)),
  new Listing('Calendario di Parmenide', getRandomPrice(10, 100)),
  new Listing('Calendario di Anassimandro', getRandomPrice(10, 100)),
  new Listing('Calendario di Pitagora', getRandomPrice(10, 100)),
  new Listing('Calendario di Talete', getRandomPrice(10, 100)),
  new Listing('Calendario di Anassagora', getRandomPrice(10, 100)),
  new Listing('Calendario di Democrito', getRandomPrice(10, 100)),
  new Listing('Calendario di Empedocle', getRandomPrice(10, 100)),
  new Listing('Calendario di Gorgia', getRandomPrice(10, 100)),
  new Listing('Calendario di Protagora', getRandomPrice(10, 100)),
  new Listing('Calendario di Diogene', getRandomPrice(10, 100)),
  new Listing('Calendario di Cratilo', getRandomPrice(10, 100)),
  new Listing('Calendario di Pirrone', getRandomPrice(10, 100)),
  new Listing('Calendario di Plotino', getRandomPrice(10, 100)),
  new Listing('Calendario di Porfirio', getRandomPrice(10, 100)),
  new Listing('Calendario di Giamblico', getRandomPrice(10, 100)),
  new Listing('Calendario di Proclo', getRandomPrice(10, 100)),
  new Listing('Calendario di Anselmo', getRandomPrice(10, 100)),
  new Listing('Calendario di Agostino', getRandomPrice(10, 100)),
  new Listing("Calendario di Tommaso d'Aquino", getRandomPrice(10, 100)),
  new Listing('Calendario di Abelardo', getRandomPrice(10, 100)),
  new Listing('Calendario di Ockham', getRandomPrice(10, 100)),
  new Listing('Calendario di Duns Scoto', getRandomPrice(10, 100)),
  new Listing('Calendario di Roscellino', getRandomPrice(10, 100)),
  new Listing('Calendario di Machiavelli', getRandomPrice(10, 100)),
  new Listing('Calendario di Hobbes', getRandomPrice(10, 100)),
  new Listing('Calendario di Spinoza', getRandomPrice(10, 100)),
  new Listing('Calendario di Locke', getRandomPrice(10, 100)),
  new Listing('Calendario di Leibniz', getRandomPrice(10, 100)),
  new Listing('Calendario di Berkeley', getRandomPrice(10, 100)),
  new Listing('Calendario di Hume', getRandomPrice(10, 100)),
  new Listing('Calendario di Kant', getRandomPrice(10, 100)),
  new Listing('Calendario di Fichte', getRandomPrice(10, 100)),
  new Listing('Calendario di Schelling', getRandomPrice(10, 100)),
  new Listing('Calendario di Hegel', getRandomPrice(10, 100)),
  new Listing('Calendario di Schopenhauer', getRandomPrice(10, 100)),
  new Listing('Calendario di Kierkegaard', getRandomPrice(10, 100)),
  new Listing('Calendario di Marx', getRandomPrice(10, 100)),
  new Listing('Calendario di Nietzsche', getRandomPrice(10, 100)),
  new Listing('Calendario di Husserl', getRandomPrice(10, 100)),
  new Listing('Calendario di Heidegger', getRandomPrice(10, 100)),
  new Listing('Calendario di Sartre', getRandomPrice(10, 100)),
  new Listing('Calendario di Camus', getRandomPrice(10, 100)),
  new Listing('Calendario di Merleau-Ponty', getRandomPrice(10, 100)),
  new Listing('Calendario di Levinas', getRandomPrice(10, 100)),
  new Listing('Calendario di Deleuze', getRandomPrice(10, 100)),
  new Listing('Calendario di Foucault', getRandomPrice(10, 100)),
  new Listing('Calendario di Derrida', getRandomPrice(10, 100)),
  new Listing('Calendario di Adorno', getRandomPrice(10, 100)),
  new Listing('Calendario di Horkheimer', getRandomPrice(10, 100)),
  new Listing('Calendario di Marcuse', getRandomPrice(10, 100)),
  new Listing('Calendario di Habermas', getRandomPrice(10, 100)),
  new Listing('Calendario di Popper', getRandomPrice(10, 100)),
  new Listing('Calendario di Kuhn', getRandomPrice(10, 100)),
  new Listing('Calendario di Feyerabend', getRandomPrice(10, 100)),
  new Listing('Calendario di Rawls', getRandomPrice(10, 100)),
  new Listing('Calendario di Nozick', getRandomPrice(10, 100)),
  new Listing('Calendario di Rorty', getRandomPrice(10, 100)),
  new Listing('Calendario di Putnam', getRandomPrice(10, 100)),
  new Listing('Calendario di Quine', getRandomPrice(10, 100)),
  new Listing('Calendario di Kripke', getRandomPrice(10, 100)),
  new Listing('Calendario di Davidson', getRandomPrice(10, 100)),
  new Listing('Calendario di Anscombe', getRandomPrice(10, 100)),
  new Listing('Calendario di MacIntyre', getRandomPrice(10, 100)),
  new Listing('Calendario di Ricoeur', getRandomPrice(10, 100)),
  new Listing('Calendario di Taylor', getRandomPrice(10, 100)),
  new Listing('Calendario di Nussbaum', getRandomPrice(10, 100)),
  new Listing('Calendario di Sandel', getRandomPrice(10, 100)),
  new Listing('Calendario di Nagel', getRandomPrice(10, 100)),
  new Listing('Calendario di Chalmers', getRandomPrice(10, 100)),
  new Listing('Calendario di Dennett', getRandomPrice(10, 100)),
  new Listing('Calendario di Searle', getRandomPrice(10, 100)),
  new Listing('Calendario di Churchland', getRandomPrice(10, 100)),
  new Listing('Calendario di Harman', getRandomPrice(10, 100)),
  new Listing('Calendario di Plantinga', getRandomPrice(10, 100)),
  new Listing('Calendario di Van Inwagen', getRandomPrice(10, 100)),
  new Listing('Calendario di Williamson', getRandomPrice(10, 100)),
  new Listing('Calendario di Vattimo', getRandomPrice(10, 100)),
  new Listing('Calendario di Gadamer', getRandomPrice(10, 100)),
  new Listing('Calendario di Ricoeur', getRandomPrice(10, 100)),
  new Listing('Calendario di Badiou', getRandomPrice(10, 100)),
  new Listing('Calendario di Žižek', getRandomPrice(10, 100)),
  new Listing('Calendario di Agamben', getRandomPrice(10, 100)),
  new Listing('Calendario di Butler', getRandomPrice(10, 100)),
  new Listing('Calendario di Rancière', getRandomPrice(10, 100)),
  new Listing('Calendario di Nancy', getRandomPrice(10, 100)),
  new Listing('Calendario di Sloterdijk', getRandomPrice(10, 100)),
  new Listing('Calendario di Bauman', getRandomPrice(10, 100)),
  new Listing('Calendario di Han', getRandomPrice(10, 100)),
  new Listing('Calendario di Latour', getRandomPrice(10, 100)),
  new Listing('Calendario di Harman', getRandomPrice(10, 100)),
  new Listing('Calendario di Morton', getRandomPrice(10, 100)),
  new Listing('Calendario di Meillassoux', getRandomPrice(10, 100)),
  new Listing('Calendario di Brassier', getRandomPrice(10, 100)),
  new Listing('Calendario di Boghossian', getRandomPrice(10, 100)),
  new Listing('Calendario di Sokal', getRandomPrice(10, 100)),
];
