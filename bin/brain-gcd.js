#!/usr/bin/env node
import gcd from '../games/gcd.js';
import HelloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = HelloMan();
console.log('Find the greatest common divisor of given numbers.');
check(userName, gcd);
