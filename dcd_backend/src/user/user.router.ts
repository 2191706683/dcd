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
routers.get('/detail', userController.getDetail);
routers.post('/detail/put', userController.putDetail);
routers.post('/detail/delete', userController.deleteDetail);
routers.post('/detail/add', userController.addDetail);
routers.get('/yonghu', userController.getUser);
routers.post('/yonghu/delete', userController.deleteUser);
routers.post('/form/add', userController.addForm);

/**
 * 导出路由
 */
module.exports = routers;