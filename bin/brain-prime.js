#!/usr/bin/env node
import { prime, conditionsGame } from '../src/games/prime.js';
import startGame from '../src/index.js';

startGame(conditionsGame, prime);
