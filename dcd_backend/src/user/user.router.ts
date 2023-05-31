import * as userController from './user.controller';
const routers = require('koa-router')();
import { defaultErrorHandler } from '../app/app.middleware';

import {
    hashPassword,
    validateUserData
} from './user.middleware';

/**
 * restful/
 * users post 新增
 */
routers.post('/users/register', validateUserData, defaultErrorHandler, hashPassword , userController.store);
// routers.get('/users/:userId', userController.show);
routers.post('/users/login', userController.show);
routers.get('/user', userController.userGrid);

/**
 * 导出路由
 */
module.exports = routers;