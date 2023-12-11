// Items       Total
// A            60
// A B          90
// C D B A      145
// A A          120
// A A A        150
// A A A A      210
// A A A A A    270
// A A A A A A  300
// A A A B      180
// A A A B B    195
// A A A B B D  220
// D A B A B A  220

const Checkout = require("./checkoutt");

const pricingRules = {
  A: { unitPrice: 60, specialPriceString: "3 for 150" },
  B: { unitPrice: 30, specialPriceString: "2 for 45" },
  C: { unitPrice: 30 },
  D: { unitPrice: 25 },
  E: {unitPrice:20},
  F: {unitPrice:20, specialPriceString: "3 for 50"},
  G: {unitPrice:35, specialPriceString: "2 for 60"},
  I: {unitPrice:40, specialPriceString: "2 for 70"},
  J: {unitPrice:45, specialPriceString: "2 for 80"},
};

test("A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(60);
});

test("A B", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("B");
  const total = checkout.Total;
  expect(total).toBe(90);
});

test("C D B A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("C");
  checkout.Scan("D");
  checkout.Scan("B");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(145);
});

test("A A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(120);
});

test("A A A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(150);
});

test("A A A A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(210);
});

test("A A A A A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(270);
});

test("A A A A A A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(300);
});

test("A A A B", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("B");
  const total = checkout.Total;
  expect(total).toBe(180);
});

test("A A A B B", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("B");
  checkout.Scan("B");
  const total = checkout.Total;
  expect(total).toBe(195);
});

test("A A A B B D", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("A");
  checkout.Scan("B");
  checkout.Scan("B");
  checkout.Scan("D");
  const total = checkout.Total;
  expect(total).toBe(220);
});

test("D A B A B A", () => {
  const checkout = new Checkout(pricingRules);
  checkout.Scan("D");
  checkout.Scan("A");
  checkout.Scan("B");
  checkout.Scan("A");
  checkout.Scan("B");
  checkout.Scan("A");
  const total = checkout.Total;
  expect(total).toBe(220);
});