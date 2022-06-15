#!/usr/bin/env node
import prime from '../games/prime.js';
import helloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = helloMan();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
check(userName, prime);
