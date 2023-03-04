import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const loseRound = (userAnswer: string, answer: string, userName: string): void => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
  console.log(`Let's try again, ${userName}!`);
};

const winRound = (): void => console.log('Correct!');

const winGame = (userName: string): void => console.log(`Congratulations, ${userName}!`);

const amountRounds = 3;
const startGame = (rule: string, getTask: () => [string | number, string]) => {
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
