#!/usr/bin/env node
import gcd from '../games/gcd.js';
import helloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = helloMan();
console.log('Find the greatest common divisor of given numbers.');
check(userName, gcd);
