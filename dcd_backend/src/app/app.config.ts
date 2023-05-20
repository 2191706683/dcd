import dotenv from 'dotenv' // 私密数据保险箱 

dotenv.config()  // 根目录下 .env 执行 process.env 对象中

export const { APP_PORT } = process.env

export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = process.env

export const { ALLOW_ORIGIN } = process.env

export let { PUBLIC_KEY } = process.env;

PUBLIC_KEY = Buffer.from(PUBLIC_KEY, 'base64').toString();

