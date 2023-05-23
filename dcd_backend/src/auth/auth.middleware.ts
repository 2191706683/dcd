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
    id: null
  };

  try {
    // 提取 Authorization
    const authorization = ctx.request.headers.authorization;
    // 安全性前缀 提取令牌环
    if (authorization) {
      const decoded = jwt.verify(authorization, PUBLIC_KEY, {
        algorithms: ['RS256']
      });
      user = decoded as TokenPayload;
      // 上下文对象
      ctx.user = user;
    }

  } catch (error) {
    console.log(error)
    return next(ctx.error = error);
  }
  return next();
}

/**
 * 验证用户身份
 */
export const authGuard = (
  ctx: any,
  next: any,
) => {
  console.log('👮🏼‍♀️ 验证用户身份');
  console.log(ctx.user,'sdjfo')
  if (ctx.user?.id) {
    next();
  } else {
    next(ctx.error = 'UNAUTHORIZED');
  }
};
