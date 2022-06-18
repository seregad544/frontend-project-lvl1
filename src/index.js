import readlineSync from 'readline-sync';
import helloMan from './cli.js';

const startGame = (conditionsGame, getTask) => {
  const userName = helloMan();
  console.log(conditionsGame);
  const amountRounds = 3;
  let n = 0;
  while (n !== amountRounds) {
    const rightAnswer = getTask();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    n += 1;
  }
  if (n === amountRounds) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
