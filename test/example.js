// This program translates SMoL programs to JavaScript
//   and will do so for Python in the future.

import * as SMoL from '../src/SMoL.mjs';
import fs from "fs";


const program = `
(deffun (fact n)
  (if (<= n 1)
      1
      (* n (fact (- n 1)))))
(print (fact 5))
`;

const parsedProgram = SMoL.Parser.parseProgram(program);

console.log("== print JAVA ==");
console.log(SMoL.JavaPrinter.printProgram(true, parsedProgram));