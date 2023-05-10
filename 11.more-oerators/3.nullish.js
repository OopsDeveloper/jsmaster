// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined 인 경우만 쓰고싶다.
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1');
console.log(num ?? '-1');
