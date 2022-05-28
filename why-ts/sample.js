/**
 * @param {number} a first num
 * @param {number} b second num
 */

// typescript 같은 효과를 주게된다.
// @ts-check

function add(a, b) {
  return a + b;
}

add(10, 20);

add(10, '20'); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

