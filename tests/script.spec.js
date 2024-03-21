const calculateBonus = require('../scripts/script.js')

/** Проверка суммы двух положительных чисел */
describe("Suite for sum of two postive numbers", () => {
  test("Sum of two postive numbers which under to 50", () => {
    expect(calculateBonus(19, 30)).toBe(49);
  });

  test("Sum of two postive numbers which equal to 50", () => {
    expect(calculateBonus(25, 25)).toBe(50);
  });

  test("Sum of two postive numbers which over than 50", () => {
    expect(calculateBonus(26, 25)).toBe(50);
  });
});

/** Проверка суммы двух отрицательных чисел */
describe("Suite for sum of two negative numbers", () => {
  test("Sum of two negative numbers", () => {
    expect(calculateBonus((-1), (-48))).toBe((-49));
  });
});

/** Проверка суммы двух нолей */
describe("Sum of two zeros", () => {

  test("Sum of two zeros", () => {
    expect(calculateBonus(0, 0)).toBe(0);
  });
});

/** Проверка суммы нуля и положительного числа */
describe("Suite for sum zero and positive number", () => {
  test("Sum of zero and positive number which under to 50", () => {
    expect(calculateBonus(0, 49)).toBe(49);
  });

  test("Sum of zero and positive number which equal to 50", () => {
    expect(calculateBonus(0, 50)).toBe(50);
  });

  test("Sum of zero and positive number which over to 50", () => {
    expect(calculateBonus(0, 51)).toBe(50);
  });
});

/** Проверка суммы нуля и отрицательного числа */
describe("Suite for sum zero and negative number", () => {
  test("Sum of zero and negative number", () => {
    expect(calculateBonus(0, (-49))).toBe((-49));
  });

});

/** Проверка суммы двух дробных чисел */
describe("Sum of two float numbers", () => {
  test("Sum of two float numbers which under to 50", () => {
    expect(calculateBonus(1.98, 48.01)).toBe(49.99);
  });

  test("Sum of two float numbers which equal to 50", () => {
    expect(calculateBonus(1.99, 48.01)).toBe(50);
  });

  test("Sum of two float numbers which over to 50", () => {
    expect(calculateBonus(1.99, 48.02)).toBe(50);
  });
});

/** Проверка суммы дробного и положительного числа */
describe("Sum of positive number and float number", () => {
  test("Sum of positive number and float number which under to 50", () => {
    expect(calculateBonus(0.99, 49)).toBe(49.99);
  });

  test("Sum of positive number and float number which over to 50", () => {
    expect(calculateBonus(0.99, 49.02)).toBe(50);
  });
});

/** Проверка суммы дробного и отрицательного числа */
describe("Sum of negative number and float number", () => {
  test("Sum of negative number and float number which under to 50", () => {
    expect(calculateBonus(50.99, (-1))).toBe(49.99);
  });

  test("Sum of negative number and float number which over to 50", () => {
    expect(calculateBonus(51.99, (-1))).toBe(50);
  });
});
