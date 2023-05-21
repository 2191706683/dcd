import { Context, Next } from 'koa'
import * as userService from './user.service'
import bcrypt from 'bcryptjs';

export const store = (
    ctx: any,
    next: any
) => {
    // 请求体中解出用户名 密码
    const { name, password } = ctx.request.body
    // sql 数据库和node 服务器 一定是分离
    console.log(name, password, '////')
    try {
        const data = userService.createUser({name, password});
        ctx.body = {
            statusCode: 200
        };
    } catch (error) {
        return next(ctx.error = error);
    }
    next();
}

export const show = async (
    ctx: any,
    next: any
) => {
    const { name, password } = ctx.request.body;
    try {
        const user = await userService.getUserByName(name);
        // // 经验
        if (!user) {
            return next(ctx.error = 'USER_NOT_FOUND');
        }
        let isValid = bcrypt.compare(password, user.password);
        if (isValid) {
            ctx.body = {
                statusCode: 200
            }  
        }
    } catch (error) {
        next(ctx.error = error);
    }
    next();
}