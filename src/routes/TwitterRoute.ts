import express, { NextFunction, Request, Response } from 'express'
import { getTweets } from '../controllers';

const router = express.Router();

router.get('/tweet', getTweets)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'Twitter Router Called!' })
});

export { router as TwitterRoute }
