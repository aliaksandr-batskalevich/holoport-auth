import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {DAL} from './db/dal.js';

dotenv.config();

const PORT = process.env.APP_PORT || 7000;
const app = express();

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
    } catch (e) {
        console.log(e);
    }
};

start();