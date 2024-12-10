import counterLogic, { addTwoNumbers } from './counterLogic';

test('La logique du compteur fonctionne correctement', () => {
  const counter = counterLogic();

  expect(counter.getCount()).toBe(0); // Valeur initiale

  counter.increment();
  expect(counter.getCount()).toBe(1); // Après incrémentation

  counter.decrement();
  expect(counter.getCount()).toBe(0); // Après décrémentation

  counter.reset();
  expect(counter.getCount()).toBe(0); // Après réinitialisation
});

test('La logique de la fonction add two numbers', () => {
  const result1 = addTwoNumbers(10,20);

  expect(result1).toBe(30);

  const result2 = addTwoNumbers(-10,20);
  expect(result2).toBe(10);
});
