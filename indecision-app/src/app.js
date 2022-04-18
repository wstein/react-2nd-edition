console.log("app is running!")

import subtract, {add, square} from './utils';

console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 20));

import senior, {isAdult,canDrink} from "./person";

const age = 19;
console.log(`adult: ${isAdult(age)}`)
console.log(`can drink: ${canDrink(age)}`)
console.log(`senior: ${senior(age)}`)
