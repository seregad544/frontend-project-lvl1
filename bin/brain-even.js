#!/usr/bin/env node
import even from '../games/even.js';
import helloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = helloMan();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
check(userName, even);
