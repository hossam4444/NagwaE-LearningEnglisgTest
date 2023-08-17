import express from 'express';
const router = express.Router();
import { getMyRank } from '../controllers/rankControllers';

router.post('/', getMyRank);

export default router;
