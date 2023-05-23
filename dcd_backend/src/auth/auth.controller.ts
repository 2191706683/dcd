/**
 * 验证登录
 */
export const validate = (
    ctx: any,
    next: any,
) => {
    ctx.status = 200;
    next();
};