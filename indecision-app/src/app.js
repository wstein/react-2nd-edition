console.log("app is running!")

import {add, square} from './utils';

console.log(square(4));
console.log(add(100, 23));

import {isAdult,canDrink} from "./person";

const age = 19;
console.log(`adult: ${isAdult(age)}`)
console.log(`can drink: ${canDrink(age)}`)
