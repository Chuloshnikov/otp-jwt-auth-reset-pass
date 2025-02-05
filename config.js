import dotenv from 'dotenv';
dotenv.config();

export default {
    JWT_SECRET: process.env.JWT_SECRET,
    MAILER_EMAIL: process.env.MAILER_EMAIL,
    MAILER_PASSWORD: process.env.MAILER_PASSWORD
}