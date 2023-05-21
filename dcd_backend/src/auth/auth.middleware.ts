import jwt from 'jsonwebtoken'
import { PUBLIC_KEY } from '../app/app.config'
import { TokenPayload } from './auth.interface';

/**
 * 当前用户
 */
export const currentUser = (
  ctx: any,
  next: any
) => {
  let user: TokenPayload = {
    id: null,
    name: 'anonymous',
  };

  try {
    // 提取 Authorization
    console.log(ctx.request.headers,'sdfdsfd')
    const authorization = ctx.request.header['Authorization'];
    // 安全性前缀 提取令牌环
    const token = authorization.replace('Bearer', '');

    if (token) {
      const decoded = jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
      })
      user = decoded as TokenPayload;
    }


  } catch (error) {
    console.log(error)
    next(ctx.error = error);
  }
  // 上下文对象
  ctx.user = user;
  next();
}

/**
 * 验证用户身份
 */
export const authGuard = (
  ctx: any,
  next: any,
) => {
  console.log('👮🏼‍♀️ 验证用户身份');
  if (ctx.user.id) {
    next();
  } else {
    next(ctx.error = 'UNAUTHORIZED');
  }
};
