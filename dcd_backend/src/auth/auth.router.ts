import * as authController from './auth.controller';
const routers = require('koa-router')();
import { authGuard } from './auth.middleware';

/**
 * /验证登录
 */
routers.post('/auth/validate', authGuard, authController.validate);

/**
 * 导出路由
 */
module.exports = routers;