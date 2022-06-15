#!/usr/bin/env node
import calc from '../games/calc.js';
import helloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = helloMan();
console.log('What is the result of the expression?');
check(userName, calc);
