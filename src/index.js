import readlineSync from 'readline-sync';

const check = (userName, answerGame) => {
  let n = 0;
  while (n !== 3) {
    const rightAnswer = answerGame();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == rightAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (n === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default check;
