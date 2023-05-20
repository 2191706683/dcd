import * as userController from './user.controller';
const routers = require('koa-router')();

import {
    hashPassword,
    validateUserData
} from './user.middleware';

/**
 * restful
 * users post 新增
 */
routers.post('/users', validateUserData, hashPassword , userController.store);
routers.get('/users/:userId', userController.show);


/**
 * 导出路由
 */
module.exports = routers;