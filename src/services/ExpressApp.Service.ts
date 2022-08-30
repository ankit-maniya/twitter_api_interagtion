import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { TwitterRoute } from '../routes';

export default async (app: Application) => {
    app.use(cors());
    app.use(morgan('dev'))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/twitter', TwitterRoute)
}
