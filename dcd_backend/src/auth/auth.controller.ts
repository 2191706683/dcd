/**
 * 验证登录
 */
export const validate = (
    ctx: any,
    next: any,
) => {
    console.log(ctx.user);
    ctx.status = 200;
    next();
};