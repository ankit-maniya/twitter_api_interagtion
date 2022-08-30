import express, { NextFunction, Request, Response } from 'express'
import { fetchHashtagsByTopic, fetchTweetsbyHashtag } from '../controllers';

const router = express.Router();

router.get('/tweets', fetchTweetsbyHashtag);
router.get('/hashtags/:search_keyword', fetchHashtagsByTopic);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Twitter Router Called!' });
});

export { router as TwitterRoute }
