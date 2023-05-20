import { Context, Next } from 'koa'
import * as userService from './user.service'

export const store = async (
    ctx: any,
    next: any
) => {
    // 请求体中解出用户名 密码
    const { name, password } = ctx.request.body
    // sql 数据库和node 服务器 一定是分离
    if (!name || !password) return next();
    console.log(name, password, '////')
    try {
        // const data = await userService.createUser({name, password});
        ctx.body = {
            statusCode: 201,
            // data
        }
        console.log('ps')
    } catch (error) {
        console.log('error')
        next(ctx.error = error);
    }
    next();
}

export const show = async (
    ctx: any,
    next: any
) => {
    const { userId } = ctx.request.params;
    try {
        const user = await userService.getUserById(parseInt(userId, 10));
        // // 经验
        if (!user) {
            return next(ctx.error = 'USER_NOT_FOUND');
        }
        console.log(user);
        ctx.body = {
            statusCode: 200,
            user
        }
    } catch (error) {
        next(ctx.error = error);
    }
    next();
}