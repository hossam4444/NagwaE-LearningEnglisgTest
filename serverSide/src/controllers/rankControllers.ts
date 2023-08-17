import fs from 'fs/promises';
import { Request, Response, NextFunction } from 'express'; // Import Request, Response, and NextFunction types
import AppError from '../utils/AppError';
import { dataPath } from '../config';
import { calcRank } from '../utils/helpers';

const getMyRank = async (req: Request, res: Response, next: NextFunction) => {
  const finalScore = Number(req.body.finalScore);
  if (!finalScore || finalScore < 0 || isNaN(finalScore)) {
    return next(
      new AppError(
        `Bad Request: Must Provide 0 or a positive Final Score In The Request Body`,
        400
      )
    );
  }

  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const scoresList: number[] = JSON.parse(data).scoresList;
    const rank = calcRank(finalScore, scoresList);
    console.log({ finalScore, rank });
    res.send({ rank });
  } catch (err) {
    next(new AppError('That Error Occurred 👉🏼 ' + err, 404));
  }
};

export { getMyRank };
