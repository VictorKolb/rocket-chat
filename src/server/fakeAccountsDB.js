function randomDate(start, end) {
  return Math.floor(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

export function r() {
  return randomDate(new Date(2012, 0, 1), new Date());
}

export const accounts = [
  {
    number: 45234623,
    currency: "ru",
    balance: 45000,
    annualInterestYear: 4.5,
    creationDate: r(),
  },
  {
    number: 45234625,
    currency: "en",
    balance: 3500,
    annualInterestYear: 8,
    creationDate: r(),
  },
  {
    number: 45234221,
    currency: "en",
    balance: -8200,
    annualInterestYear: 10,
    creationDate: r(),
  },
];

export const deposits = [
  {
    number: 45224629,
    currency: "ru",
    balance: 5000,
    annualInterestYear: 4.5,
    creationDate: r(),
  },
  {
    number: 45214620,
    currency: "en",
    balance: 35400,
    annualInterestYear: 8,
    creationDate: r(),
  },
  {
    number: 45234221,
    currency: "en",
    balance: 2500,
    annualInterestYear: 10,
    creationDate: r(),
  },
  {
    number: 45234226,
    currency: "ru",
    balance: 2500,
    annualInterestYear: 10,
    creationDate: r(),
  },
];

export const accountsOperations = [
  { date: r(), sum: 135, cardLastDigits: 4355, number: 45234623 },
  { date: r(), sum: -229, cardLastDigits: 4355, number: 45234623 },
  { date: r(), sum: 6335, cardLastDigits: 4355, number: 45234623 },
  { date: r(), sum: -332315, cardLastDigits: 4355, number: 45234623 },
  { date: r(), sum: -315, cardLastDigits: 4355, number: 45234221 },
];

export const depositsOperations = [
  { date: 1539669764140, sum: 135, cardLastDigits: 4355, number: 45224629 },
  { date: 1539669722141, sum: -229, cardLastDigits: 4355, number: 45234226 },
  { date: 1539669792142, sum: 6335, cardLastDigits: 4355, number: 45234221 },
  { date: 1539669362143, sum: -332315, cardLastDigits: 4355, number: 45234221 },
  { date: 1539669362143, sum: -315, cardLastDigits: 4355, number: 45234221 },
];
