import express, { Application } from 'express'
import cors from 'cors'
import { TwitterRoute } from '../routes';

export default async (app: Application) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/twitter', TwitterRoute)
}
