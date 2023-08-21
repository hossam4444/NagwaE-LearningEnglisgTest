import fs from 'fs/promises';
import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError';
import { dataPath } from '../config';
import { getRandomWords } from '../utils/helpers';

const getWords = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const wordsList = JSON.parse(data).wordList;

    const selectedWords = getRandomWords(wordsList, 10).map((wordObj) => {
      return { id: wordObj.id, word: wordObj.word };
    });

    res.send(selectedWords);
  } catch (err) {
    next(new AppError('That Error Occurred 👉🏼 ' + err, 404));
  }
};

const isCorrect = async (req: Request, res: Response, next: NextFunction) => {
  // request data
  const { answer } = req.body;
  let wordId = parseInt(req.body.wordId);

  console.log({ answer, wordId });
  try {
    if (!wordId || !answer) {
      throw new AppError(
        'Bad Request 🧐 Please provide a valid word ID number and answer',
        400
      );
    }

    // get the words list from the DB
    const wordsList = JSON.parse(await fs.readFile(dataPath, 'utf-8')).wordList;

    // get the required Word usind wordId from the request
    const currentWord = wordsList.find(
      (word: { id: number }) => word.id === wordId
    );

    if (!currentWord) {
      throw new AppError('Bad Request Wrong word ID', 400);
    }

    console.log(currentWord);
    const isCorrect = currentWord.pos === answer ? true : false;
    if (isCorrect) {
      res.send('Correct');
    } else {
      res.send('Not Correct');
    }
  } catch (error) {
    next(error);
  }
};

export { getWords, isCorrect };
