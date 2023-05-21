import { ALLOW_ORIGIN } from '../app.config';

export default async (ctx: any, next: any) => {
    // 允许来自所有域名请求（不携带 Cookie，如果要携带 Cookie 的话，要制定域名）
    ctx.set('Access-Control-Allow-Origin', ALLOW_ORIGIN);
    // 设置所允许的 HTTP请求方法
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
    // 表明服务器支持的所有头信息字段   服务器收到请求以后，请求 Origin，Access-Control-Request-Method 和 Access-Control-Request-Headers 字段以后，确认允许跨域请求，做出回应
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type, Authorization, token');
    // Content-Type 表示具体请求中的媒体类型信息
    ctx.set('Content-Type', 'application/json;charset=utf-8');
    // ctx.set('Content-Type', 'application/x-www-form-urlencoded');
    // 表示是否允许发送 Cookie ，默认情况下 Cookie 不包括在 CORS 请求中 
    ctx.set('Access-Control-Allow-Credentials', true);
    // 指定本次本次预检查的请求的有效期
    // ctx.set('Access-Control-Max-Age', 3000);
    // 需要获取其他字段的时候设计的
    // ctx.set('Access-Control-Expose-Headers', 'myData');

    // 解决 OPTIONS 请求
    if (ctx.method === 'OPTIONS') {
        ctx.body = '';
        ctx.status = 204;
    } else {
        await next();
    }

}