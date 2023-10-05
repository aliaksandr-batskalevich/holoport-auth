import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const Pool = pg.Pool;

const user = process.env.DB_USERNAME || 'postgres';
const password = process.env.DB_USER_PASSWORD || '123';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT && +process.env.DB_PORT || 5432;
const database = process.env.DB_NAME || 'hp_auth';

export const db = new Pool({user, password, host, port, database});