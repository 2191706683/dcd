import { Context, Next } from 'koa'
import * as userService from './user.service'
import { signToken } from '../auth/auth.service';
import bcrypt from 'bcryptjs';

/**
 * 注册功能，把用户信息存入数据库
 */
export const store = (
    ctx: any,
    next: any
) => {
    // 请求体中解出用户名 密码
    const { name, password, isGM } = ctx.request.body;
    // sql 数据库和node 服务器 一定是分离
    console.log(name, password, isGM, '////');
    try {
        const data = userService.createUser({ name, password, isGM });
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

/**
 * 返回登录信息和token
 */
export const show = async (
    ctx: any,
    next: any
) => {
    const { name, password } = ctx.request.body;
    try {
        const user = await userService.getUserByName(name);
        // 经验
        if (!user) {
            return next(ctx.error = 'USER_NOT_FOUND');
        }
        let isValid = await bcrypt.compareSync(password, user.password);
        console.log(isValid, '密码正确')
        if (isValid) {
            // 签发令牌
            const payload = user;
            const token = signToken({ payload });
            ctx.body = {
                statusCode: 200,
                data: token,
                isGM: user.isGM,
                message: '密码正确'
            }
        } else {
            return next(ctx.error = 'PASSWORD_DOES_NOT_MATCH')
        }
    } catch (error) {
        return next(ctx.error = error);
    }
    next();
}

/**
 * 获取用户界面数据
 */
export const userGrid = async (
    ctx: any,
    next: any
) => {
    console.log(ctx.user?.id, 1234)
    const gridList = await userService.getUserGrid();
    ctx.body = {
        statusCode: 200,
        data: gridList
    }
    next();
};

export const getDetail = async (
    ctx: any,
    next: any
) => {
    const detail = await userService.getDetail();
    let detailHeader = await userService.getDetailHeader();
    detailHeader = detailHeader[0]
    ctx.body = {
        statusCode: 200,
        data: { detail, detailHeader }
    }
    next();
}

export const addDetail = async (
    ctx: any,
    next: any
) => {
    const isChecked = false;
    const num = 0;
    const name = '雪铁龙C6';
    const img = "https://p6-dcd.byteimg.com/img/tos-cn-i-0000c0030/05807adce3e142fdb7497a1d805e1fd3~tplv-resize:1200:0.webp"
    const { id, description, title, price, guide_price } = ctx.request.body;
    const data = await userService.insertDetail({ id, isChecked, num, description, title, price, guide_price, name, img });
    ctx.body = {
        statusCode: 200,
        message: '添加成功'
    }
    next();
}
export const deleteDetail = async (
    ctx: any,
    next: any
) => {
    const { id } = ctx.request.body;
    const data = await userService.deleteDetail(id);
    ctx.body = {
        statusCode: 200,
        message: '删除成功'
    }
    next();
}
export const putDetail = async (
    ctx: any,
    next: any
) => {
    const { id, description, title, price, guide_price } = ctx.request.body;
    const data = await userService.putDetail({ id, description, title, price, guide_price });
    ctx.body = {
        statusCode: 200,
        message: '修改成功'
    }
    next();
}

export const getUser = async (
    ctx: any,
    next: any
) => {
    try {
        const user = await userService.getAllUser();
        console.log(user)
        ctx.body = {
            statusCode: 200,
            data: user,
            message: '密码正确'
        }
    } catch (error) {
        return next(ctx.error = error);
    }
    next();
}
export const deleteUser = async (
    ctx: any,
    next: any
) => {
    try {
        const { id } = ctx.request.body;
        // console.log(id);
        const data = await userService.deleteUser(id);
        console.log(data)
        ctx.body = {
            statusCode: 200,
            message: '删除成功'
        }
    } catch (err) {
        return next(err);
    }
    next();
}
export const addForm = async (
    ctx: any,
    next: any
) => {
    try {
        const { order_time, car_id, car_name, car_price, username, user_tel, user_idcard } = ctx.request.body;
        const user_id = ctx.user.id;
        const data = await userService.insertForm({ order_time, car_id, car_name, car_price, user_id, username, user_tel, user_idcard });
        ctx.body = {
            statusCode: 200,
            message: '添加成功'
        }
    } catch (error) {
        console.log(error)
        return next(ctx.error = error);
    }
    return next();
    
}


