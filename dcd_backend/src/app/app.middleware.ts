/**
 * 错误验证
 */
export const defaultErrorHandler = (
    ctx: any,
    next: any
) => {
    let statusCode: number, message: string;
    if (ctx.error) {

        console.log(ctx.error, '/sdf有错/');

        /**
         * 
         */

        switch (ctx.error) {
            // 登录注册表单 后端重新注册
            case 'NAME_IS_REQUIRED':
                statusCode = 400;
                message = '请提供用户名';
                break;
            case 'PASSWORD_IS_REQUIRED':
                statusCode = 400;
                message = '请提供密码';
                break;
            case 'NAME_ALERADY_EXIST':
                statusCode = 409;
                message = '用户名已存在';
                break;
            case 'USER_DOES_NOT_EXIST':
                statusCode = 400;
                message = '用户名不存在';
                break;
            case 'PASSWORD_DOES_NOT_MATCH':
                statusCode = 400;
                message = '密码不正确';
                break;
            case 'UNAUTHORIZED':
                statusCode = 401;
                message = '请先登录';
                break;
            case 'USER_DOES_NOT_OWN_RESOURCE':
                statusCode = 403;
                message = '您没有权限处理这个内容';
                break;
            case 'FILE_NOT_FOUND':
                statusCode = 404;
                message = '文件不存在';
                break;
            case 'USER_NOT_FOUND':
                statusCode = 404;
                message = '用户不存在';
                break;
            default:
                statusCode = 500;
                message = '服务器暂时出了点小问题 ~~ 程序员小哥哥正在抢救';
                break;
        }
        console.log(statusCode, message)

        ctx.body = {
            statusCode,
            message
        }
    } else {
        console.log('没有错误哦')
        next();
    }
}   