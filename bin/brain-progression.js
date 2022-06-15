#!/usr/bin/env node
import progression from '../games/progression.js';
import helloMan from '../src/cli.js';
import check from '../src/index.js';

const userName = helloMan();
console.log('What number is missing in the progression?');
check(userName, progression);
