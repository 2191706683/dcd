import * as teaController from './tea.controller';
const routers = require('koa-router')();
import { defaultErrorHandler } from '../app/app.middleware';

import {
    hashPassword,
    validateUserData
} from './tea.middleware';

/**
 * restful/
 * users post 新增
 */

routers.get('/teaHouse/getArticleList', teaController.getArticleList);
routers.post('/teaHouse/getArticleDetail', teaController.getArticleDetailById);

routers.get('/teaHouse/getProductIndex', teaController.getProductIndex);
routers.get('/teaHouse/getProductIcon', teaController.getProductIcon);
routers.get('/teaHouse/getProductTag', teaController.getProductTag);
routers.post('/teaHouse/getProductList', teaController.getProductList);
routers.post('/teaHouse/getProductDetail', teaController.getProductDetail);
routers.post('/teaHouse/insertSaleForm', teaController.insertSaleForm);

routers.get('/teaHouse/getCircleTabList', teaController.getCircleTabList);
routers.get('/teaHouse/getCircleList', teaController.getCircleList);
routers.post('/teaHouse/getCircleDetail', teaController.getCircleDetail);
routers.post('/teaHouse/addCircleComments', teaController.addCircleComments);
routers.post('/teaHouse/addCircleReplys', teaController.addCircleReplys);


routers.post('/teaHouse/login', teaController.show);
routers.post('/teaHouse/putUserInfo', teaController.putUserInfo);
routers.post('/teaHouse/register', validateUserData, defaultErrorHandler, hashPassword ,  teaController.store);
routers.get('/teaHouse/getUserList', teaController.getUserList);
routers.get('/teaHouse/test', teaController.user1);
routers.get('/teaHouse/evaluate', teaController.evaluate1);

/**
 * 导出路由
 */
module.exports = routers;