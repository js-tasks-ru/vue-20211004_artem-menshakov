/**
 * Функция, возвращающая сумму двух чисел
 *
 * @param {number} a - первое число
 * @param {number} b - второе целое
 * @return {number} сумма чисел a и b
 */
export function sum(a, b) {
  // Решение
  if (isNaN(a) || isNaN(b)) {
    throw new Error('a or b is not a number!');
  } else {
    return a + b;
  }
}
