import { cons } from '@hexlet/pairs';
import playGame from '..';
import { getNum, minNum, maxNum } from '../utils';

const isEven = (num) => num % 2 === 0;

const prepareEvenGame = () => {
  const question = getNum(minNum, maxNum);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(prepareEvenGame, condition);
};
