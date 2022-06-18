#!/usr/bin/env node
import { progression, conditionsGame } from '../src/games/progression.js';
import startGame from '../src/index.js';

startGame(conditionsGame, progression);
