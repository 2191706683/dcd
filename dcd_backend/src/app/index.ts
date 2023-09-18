const koa = require('koa');
// const cors = require('cors') /
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const userRouter = require('../user/user.router') ;
const authRouter = require('../auth/auth.router') ;
const teaRouter = require('../tea/tea.router') ;
const json = require('koa-json');


// import userRouter from '../user/user.router';
import { defaultErrorHandler } from './app.middleware';
import { currentUser } from '../auth/auth.middleware';
import cors from './crossDomain';


const app = new koa();

app.keys = ['some secret hurr'];
const sessionConfig = {
    key: 'USER_SID',
    maxAge: 864000000,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    secure: false,
    sameSite: null
}

/**
 * 跨域资源共享
 */
app.use(cors);

/**
 * 处理json
 */
app.use(json())

app.use(session(sessionConfig, app));


/**
 * 通过调用body-parser中间件来解析HTTP请求中的请求体。
 * 其中，formLimit参数指定了请求体的大小限制为1MB。
 */
app.use(bodyParser({
    formLimit: '1mb'
}));

/**
 * 当前用户
 */
// app.use(currentUser);


// app.use(userRouter.routes());
// app.use(authRouter.routes() );
app.use(teaRouter.routes());

/**
 * 错误处理
 */
app.use(defaultErrorHandler);



export default app;

