import { Context, Next } from 'koa'
import * as teaService from './tea.service'
// import { signToken } from '../auth/auth.service';
// import bcrypt from 'bcryptjs';
export const getArticleList = async (
    ctx: any,
    next: any
) => {
    const articleList = await teaService.getArticleList();
    ctx.body = {
        statusCode: 200,
        data: articleList
    }
    next();
};

export const getArticleDetailById = async (
    ctx: any,
    next: any
) => {
    const { id } = ctx.request.body;
    console.log(ctx.request.body, '????')
    const articleDetail = await teaService.getArticleDetailById(id);
    ctx.body = {
        statusCode: 200,
        data: articleDetail
    }
    next();
};

export const getProductIndex = async (
    ctx: any,
    next: any
) => {
    const productionIcon: any = await teaService.getProductIndex();
    let result = await Promise.all(productionIcon.map(async (item) => {
        const res: any = await teaService.getProductCell(item?.carindex_id);
        item.cell = res
        return item;
    }));
    ctx.body = {
        statusCode: 200,
        data: result
    }
    next();
};

export const getProductIcon = async (
    ctx: any,
    next: any
) => {
    let result: any = await teaService.getProductIcon();
    result = result.concat(result.slice());
    ctx.body = {
        statusCode: 200,
        data: result
    }
    next();
};

export const getProductTag = async (
    ctx: any,
    next: any
) => {
    const productionIcon = await teaService.getProductTag();
    ctx.body = {
        statusCode: 200,
        data: productionIcon
    }
    next();
};

export const getProductList = async (
    ctx: any,
    next: any
) => {
    const { id } = ctx.request.body;
    const productionIcon = await teaService.getProductList(id);
    ctx.body = {
        statusCode: 200,
        data: productionIcon
    }
    next();
};

export const getProductDetail = async (
    ctx: any,
    next: any
) => {
    const { id } = ctx.request.body;
    const productionIcon: any = await teaService.getProductDetail(id);
    const res1 = await teaService.getProductDetailComments(id);
    productionIcon.comments = res1

    ctx.body = {
        statusCode: 200,
        data: productionIcon
    }
    next();
};

export const getCircleTabList = async (
    ctx: any,
    next: any
) => {
    const productionIcon = await teaService.getCircleTabList();
    ctx.body = {
        statusCode: 200,
        data: productionIcon
    }
    next();
};

export const getCircleList = async (
    ctx: any,
    next: any
) => {
    const productionIcon: any = await teaService.getCircleList();
    let result = await Promise.all(productionIcon.map(async (item) => {
        const res: any = await teaService.getCircleImg(item?.id);
        const imgArray = res.map(item => {
            return item.image_url;
        })
        item.circle_img = imgArray;
        return item;
    }));

    // console.log(result,'3213')

    // 复制 result 数组 numberOfCopies 次并合并到 result 中
    for (let i = 0; i < 2; i++) {
        result = result.concat(result.slice());
    }
    ctx.body = {
        statusCode: 200,
        data: result
    }
    next();
};

export const getCircleDetail = async (
    ctx: any,
    next: any
) => {
    const { id } = ctx.request.body;
    console.log(id, 43)
    const productionIcon: any = await teaService.getCircleCommentList(id);
    let result = await Promise.all(productionIcon.map(async (item) => {
        const res: any = await teaService.getCircleReplyList(item?.id);
        item.child = res;
        return item;
    }));

    ctx.body = {
        statusCode: 200,
        data: result
    }
    next();
};

export const addCircleComments = async (
    ctx: any,
    next: any
) => {
    try {
        const { circle_content, circle_id } = ctx.request.body;
        // console.log(circle_content, circle_id, 234)
        let avatar = "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        let nickname = "人在草上"
        let likes = 0
        let isLike = false
        const data = await teaService.insertCircleComments({ circle_id, avatar, nickname, circle_content, likes, isLike });
        ctx.body = {
            statusCode: 200,
            message: '添加成功'
        }
    } catch (error) {
        console.log(error)
        return next(ctx.error = error);
    }
    return next();
}

export const addCircleReplys = async (
    ctx: any,
    next: any
) => {
    try {
        let { circle_content, comment_id, replayName } = ctx.request.body;
        circle_content = '@' + replayName + ' ' + circle_content
        console.log(circle_content, comment_id, 234)
        let avatar = "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        let nickname = "人在草上"
        let likes = 0
        let isLike = false
        const data = await teaService.insertCircleReplys({ comment_id, avatar, nickname, circle_content, likes, isLike });
        ctx.body = {
            statusCode: 200,
            message: '添加成功'
        }
    } catch (error) {
        console.log(error)
        return next(ctx.error = error);
    }
    return next();
}


export const getUserList = async (
    ctx: any,
    next: any
) => {
    const articleList = await teaService.getUserList();

    ctx.body = {
        statusCode: 200,
        data: articleList
    }
    next();
};

export const user1 = async (
    ctx: any,
    next: any
) => {
    const articleList = await teaService.user2();

    ctx.body = {
        statusCode: 200,
        data: articleList
    }
    next();
};

export const evaluate1 = async (
    ctx: any,
    next: any
) => {
    const articleList = await teaService.evaluate2();

    ctx.body = {
        statusCode: 200,
        data: articleList
    }
    next();
};

// export const addDetail = async (
//     ctx: any,
//     next: any
// ) => {
//     const isChecked = false;
//     const num = 0;
//     const name = '雪铁龙C6';
//     const img = "https://p6-dcd.byteimg.com/img/tos-cn-i-0000c0030/05807adce3e142fdb7497a1d805e1fd3~tplv-resize:1200:0.webp"
//     const { id, description, title, price, guide_price } = ctx.request.body;
//     const data = await userService.insertDetail({ id, isChecked, num, description, title, price, guide_price, name, img });
//     ctx.body = {
//         statusCode: 200,
//         message: '添加成功'
//     }
//     next();
// }
// export const deleteDetail = async (
//     ctx: any,
//     next: any
// ) => {
//     const { id } = ctx.request.body;
//     const data = await userService.deleteDetail(id);
//     ctx.body = {
//         statusCode: 200,
//         message: '删除成功'
//     }
//     next();
// }
// export const putDetail = async (
//     ctx: any,
//     next: any
// ) => {
//     const { id, description, title, price, guide_price } = ctx.request.body;
//     const data = await userService.putDetail({ id, description, title, price, guide_price });
//     ctx.body = {
//         statusCode: 200,
//         message: '修改成功'
//     }
//     next();
// }

// export const getUser = async (
//     ctx: any,
//     next: any
// ) => {
//     try {
//         const user = await userService.getAllUser();
//         console.log(user)
//         ctx.body = {
//             statusCode: 200,
//             data: user,
//             message: '密码正确'
//         }
//     } catch (error) {
//         return next(ctx.error = error);
//     }
//     next();
// }
// export const deleteUser = async (
//     ctx: any,
//     next: any
// ) => {
//     try {
//         const { id } = ctx.request.body;
//         // console.log(id);
//         const data = await userService.deleteUser(id);
//         console.log(data)
//         ctx.body = {
//             statusCode: 200,
//             message: '删除成功'
//         }
//     } catch (err) {
//         return next(err);
//     }
//     next();
// }


