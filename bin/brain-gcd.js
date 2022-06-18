#!/usr/bin/env node
import { gcd, conditionsGame } from '../src/games/gcd.js';
import startGame from '../src/index.js';

startGame(conditionsGame, gcd);
