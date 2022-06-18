#!/usr/bin/env node
import { calc, conditionsGame } from '../src/games/calc.js';
import startGame from '../src/index.js';

startGame(conditionsGame, calc);
