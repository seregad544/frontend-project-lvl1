import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const loseRound = (userAnswer, answer, userName) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
  console.log(`Let's try again, ${userName}!`);
};

const winRound = () => console.log('Correct!');

const winGame = (userName) => console.log(`Congratulations, ${userName}!`);

const amountRounds = 3;
const startGame = (rule, getTask) => {
  const userName = getUserName();
  console.log(rule);
  for (let i = 0; i < amountRounds; i += 1) {
    const [question, answer] = getTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      loseRound(userAnswer, answer, userName);
      return;
    }
    winRound();
  }
  winGame(userName);
};

export default startGame;
