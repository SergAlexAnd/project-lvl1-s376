import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { welcome, nameQuestion } from '.';

export default (description, questionAndRightAnswer) => {
  welcome(description);
  const name = nameQuestion();
  const rounds = 3;
  const iter = (round) => {
    if (round === rounds) {
      console.log(`Congratulations, ${name}!`);
      return null;
    }
    const questionAndRightAnsw = questionAndRightAnswer();
    const question = car(questionAndRightAnsw);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = cdr(questionAndRightAnsw);
    if (answer.toString() === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${name}!`);
      return null;
    }
    return iter(round + 1);
  };
  return iter(0);
};
