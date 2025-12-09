const { add, subtract, multiply, divide, factorial } = require('../src/math');

describe('Math functions', () => {
  // Тесты для сложения
  describe('add function', () => {
    test('должна складывать два положительных числа', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 5)).toBe(15);
      expect(add(0, 0)).toBe(0);
    });

    test('должна складывать отрицательные числа', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-5, 10)).toBe(5);
    });

    test('должна складывать десятичные числа', () => {
      expect(add(2.5, 3.1)).toBeCloseTo(5.6);
    });

    test('должна выбрасывать ошибку для нечисловых аргументов', () => {
      expect(() => add('2', 3)).toThrow(TypeError);
      expect(() => add(2, '3')).toThrow(TypeError);
      expect(() => add(null, 3)).toThrow(TypeError);
    });
  });

  // Тесты для вычитания
  describe('subtract function', () => {
    test('должна вычитать числа', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 15)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    test('должна работать с отрицательными числами', () => {
      expect(subtract(-2, -3)).toBe(1);
      expect(subtract(-5, 10)).toBe(-15);
    });
  });

  // Тесты для умножения
  describe('multiply function', () => {
    test('должна умножать числа', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(-2, 6)).toBe(-6);
    });

    test('должна умножать десятичные числа', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });
  });

  // Тесты для деления
  describe('divide function', () => {
    test('должна делить числа', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
      expect(divide(5, 2)).toBe(2.5);
    });

    test('должна выбрасывать ошибку при делении на ноль', () => {
      expect(() => divide(10, 0)).toThrow('Деление на ноль невозможно');
    });

    test('должна делить отрицательные числа', () => {
      expect(divide(-10, 2)).toBe(-5);
      expect(divide(10, -2)).toBe(-5);
      expect(divide(-10, -2)).toBe(5);
    });
  });

  // Тесты для факториала
  describe('factorial function', () => {
    test('должна вычислять факториал', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(5)).toBe(120);
      expect(factorial(7)).toBe(5040);
    });

    test('должна выбрасывать ошибку для отрицательных чисел', () => {
      expect(() => factorial(-1)).toThrow('Факториал отрицательного числа не определен');
    });

    test('должна выбрасывать ошибку для нечисловых аргументов', () => {
      expect(() => factorial('5')).toThrow(TypeError);
    });
  });

  // Интеграционные тесты
  describe('complex calculations', () => {
    test('должна выполнять сложные выражения', () => {
      const result = divide(add(10, multiply(2, 3)), subtract(5, 1));
      expect(result).toBe(4);
    });

    test('факториал суммы', () => {
      const result = factorial(add(3, 2));
      expect(result).toBe(120);
    });
  });
});