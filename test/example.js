// This program translates SMoL programs to JavaScript
//   and will do so for Python in the future.

import * as SMoL from '../src/SMoL.mjs';
import fs from "fs";


const program = `
(defvar v (mvec 1 2 3))
(defvar vv (mvec v v))
(vec-set! (vec-ref vv 1) 0 6)
(vec-ref vv 0)
`;

const parsedProgram = SMoL.Parser.parseProgram(program);

console.log("== print JAVA ==");
console.log(SMoL.JavaPrinter.printProgram(true, parsedProgram));