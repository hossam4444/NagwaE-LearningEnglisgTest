import express from 'express';
import { Router } from 'express';
import { getWords, isCorrect } from '../controllers/wordsControllers';

const router: Router = express.Router();

router.get('/', getWords);
router.post('/', isCorrect);

export default router;
