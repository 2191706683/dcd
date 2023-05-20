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
        name: 'anonymous'
    };

    try {
        // 提取 Authorization
        const authorization = ctx.request.header('Authorization');
        // 安全性前缀 提取令牌环
        const token = authorization.replace('Bearer', '');

        if (token) {
            const decoded = jwt.verify(token, PUBLIC_KEY, {
                algorithms: ['RS256']
            })
            user = decoded as TokenPayload
        }


    } catch (error) {

    }
    // 上下文对象
    // request.user = user
    next();
}
