/**
 * Функция сложения двух чисел
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} Сумма a и b
 */
 function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Оба аргумента должны быть числами');
  }
  return a + b;
}

/**
 * Функция вычитания
 * @param {number} a - Уменьшаемое
 * @param {number} b - Вычитаемое
 * @returns {number} Разность
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Оба аргумента должны быть числами');
  }
  return a - b;
}

/**
 * Функция умножения
 * @param {number} a - Первый множитель
 * @param {number} b - Второй множитель
 * @returns {number} Произведение
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Оба аргумента должны быть числами');
  }
  return a * b;
}

/**
 * Функция деления
 * @param {number} a - Делимое
 * @param {number} b - Делитель
 * @returns {number} Частное
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Оба аргумента должны быть числами');
  }
  if (b === 0) {
    throw new Error('Деление на ноль невозможно');
  }
  return a / b;
}

/**
 * Функция вычисления факториала
 * @param {number} n - Число
 * @returns {number} Факториал числа
 */
function factorial(n) {
  if (typeof n !== 'number') {
    throw new TypeError('Аргумент должен быть числом');
  }
  if (n < 0) {
    throw new Error('Факториал отрицательного числа не определен');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  factorial
};