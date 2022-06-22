import startGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';

const maxStep = 9;
const minStep = 1;
const maxLength = 15;
const minLength = 5;
const getProgression = () => {
  const progression = [];
  const step = getRandomNumber(maxStep, minStep);
  const length = getRandomNumber(maxLength, minLength);
  const firstNumber = getRandomNumber();
  for (let i = 0; i < length; i += 1) {
    progression.push(firstNumber + step * i);
  }
  return progression;
};

const getQuestion = (progression, indexHide) => {
  const result = progression.slice();
  result[indexHide] = '..';
  return result.join(' ');
};

const getTask = () => {
  const progressions = getProgression();
  const indexHide = getRandomIndex(progressions);
  const answer = progressions[indexHide];
  const question = getQuestion(progressions, indexHide);
  return [question, answer.toString()];
};

export default () => startGame(rule, getTask);
