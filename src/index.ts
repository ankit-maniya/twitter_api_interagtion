import express from 'express'

import App from './services/ExpressApp.Service'
import connectDb from './services/Database.Service'

import { PORT } from './configs';

const StartServer = async () => {
    const app = express();

    await connectDb()

    await App(app);

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/`)
    })
}

StartServer();
