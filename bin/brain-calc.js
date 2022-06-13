#!/usr/bin/env node
import calc from '../games/calc.js';
import HelloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = HelloMan();
console.log('What is the result of the expression?');
check(userName, calc);
