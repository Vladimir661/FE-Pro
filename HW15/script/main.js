import {getFetchUser, getFetchFilm, } from "./asyncFunction.js";
import {uppercaseFn, reverseFn} from  "./stringUtilities.js"
import { createCanvasFn } from "./canvas.js";
import { createSVGLineFN } from "./svg.js";

//Task 1
getFetchUser(2);
getFetchUser(6);
getFetchUser(10);
//Task 2
getFetchFilm(1);
getFetchFilm(3);
getFetchFilm(5);
getFetchFilm(6);
//Task 3
console.log(`=== Uppercase ===`)
console.log(uppercaseFn ('hello uppercase fn!'));

console.log(`=== Reverse ===`)
console.log(reverseFn('!nf esrever olleH'));
console.log(`=== ----- ===`)
//Task 4
createCanvasFn();
//Task 5
createSVGLineFN(10, 20, 200, 150, 'blue', 4);
createSVGLineFN(20, 30, 210, 180, 'yellow', 6);
