import bcrypt from 'bcryptjs';
import * as userService from './user.service';

/**
 * 把用户注册的密码转成HASH密码
 */
export const hashPassword = async (
    ctx: any,
    next: any
) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = bcrypt.hashSync(password, 10);
    console.log(ctx.request.body, '-0s-df')
    next();
}

/**
 * 检查用户填写是否为空以及用户名是否存在
 */
export const validateUserData = async (
    ctx: any,
    next: any
) => {
    const { name, password } = ctx.request.body;
    // 使用错误中间件
    if (!name) return next(ctx.error = 'NAME_IS_REQUIRED');
    if (!password) return next(ctx.error = 'PASSWORD_IS_REQUIRED');

    // name 是否重名
    const user = await userService.getUserByName(name);
    if (user) {
        return next(ctx.error = 'NAME_ALERADY_EXIST');
    }
    next();
}