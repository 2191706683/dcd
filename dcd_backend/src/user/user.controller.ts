import { Context, Next } from 'koa'
import * as userService from './user.service'
import { signToken } from '../auth/auth.service';
import bcrypt from 'bcryptjs';

export const store = (
    ctx: any,
    next: any
) => {
    // 请求体中解出用户名 密码
    const { name, password } = ctx.request.body;
    // sql 数据库和node 服务器 一定是分离
    console.log(name, password, '////');
    try {
        const data = userService.createUser({name, password});
        // const data = await userService.createUser({name, password});
        ctx.body = {
            statusCode: 200,
            message: '注册成功'
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
        // 签发令牌
        const payload = user;
        const token = signToken({ payload });
        // 经验
        if (!user) {
            return next(ctx.error = 'USER_NOT_FOUND');
        }
        let isValid = await bcrypt.compareSync(password, user.password);
        console.log(isValid,'密码正确')
        if (isValid) {
            ctx.body = {
                statusCode: 200,
                data: token,
                message: '密码正确'
            }  
        }
    } catch (error) {
        return next(ctx.error = error);
    }
    next();
}

export const userGrid = async (
    ctx: any,
    next: any
) => {
    console.log(ctx.user.id);
    const gridList = await userService.getUserGrid();
    ctx.body = {
        statusCode: 200,
        data: gridList
    }
    next();
};