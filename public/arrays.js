"use strict";
// arrays
let colors = ['red', 'green', 'blue'];
// prideti i spalvu masyva 5
colors.push('5');
let mixed = [1, 'blue', 2, 'green'];
mixed.push(5);
const upperColors = colors.map((color) => color.toUpperCase());
console.log('upperColors ===', upperColors);
const numsArr = [1, 5, -10, -5, 50, 10];
// atfiltruoti skaicius didesnius uz 3 i kintamaji largerThan3
const largerThan3 = numsArr.filter((obj) => obj > 3);
console.log('largerThan3 ===', largerThan3);
