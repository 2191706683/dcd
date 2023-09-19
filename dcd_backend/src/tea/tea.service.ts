import { connection } from '../app/database/mysql'
// import { UserModel } from './user.model';

export const getArticleList = async () => {
    const statement = `
        SELECT
            *
        FROM
            articleList
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

// 根据文章ID获取文章详情
export const getArticleDetailById = async (articleId) => {
    const statement = `
      SELECT
          *
      FROM
          articledetail
      WHERE
        article_id = ?
    `;
    const [data] = await connection.promise().query(statement, articleId);
    return data[0];
}

export const getProductIndex = async () => {
    const statement = `
        SELECT
            *
        FROM
            productindex
    `;
    const [data] = await connection.promise().query(statement);
    return data;
}

export const getProductCell = async (carindex_id) => {
    const statement = `
        SELECT
            *
        FROM
            productcell
        where 
            carindex_id = ?

    `;
    const [data] = await connection.promise().query(statement, carindex_id);

    return data;
}

export const getProductIcon = async () => {
    const statement = `
        SELECT
           *
        FROM
            producticon
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const getProductTag = async () => {
    const statement = `
        SELECT
            *
        FROM
            producttag
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const getProductList = async (category_id) => {
    const statement = `
        SELECT
            *
        FROM
            productlist
        where 
            category_id = ?
    `;
    const [data] = await connection.promise().query(statement, category_id);

    return data;
}

export const getProductDetail = async (product_id) => {
    const statement = `
        SELECT
            *
        FROM
            product_detail
        where 
            product_id = ?
    `;
    const [data] = await connection.promise().query(statement, product_id);

    return data[0];
}

export const insertSaleForm = async (order) => {
    const statement = `
        INSERT INTO product_sale_form
        SET ?
    `;

    const [data] = await connection.promise().query(statement, order);
    return data;
}

export const getProductDetailComments = async (product_id) => {
    const statement = `
        SELECT
            *
        FROM
            product_detail_comments 
        where 
            product_id = ?
    `;
    const [data] = await connection.promise().query(statement, product_id);

    return data;
}

export const getProductDetailSwipeImg = async (product_id) => {
    const statement = `
        SELECT
            *
        FROM
            product_detail_swipeimg
        where 
            product_id = ?
    `;
    const [data] = await connection.promise().query(statement, product_id);

    return data;
}

export const getCircleTabList = async () => {
    const statement = `
        SELECT
            *
        FROM
            circletablist
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const getCircleList = async () => {
    const statement = `
        SELECT
            *
        FROM
            circlelist
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const getCircleImg = async (circle_id) => {
    const statement = `
        SELECT
            *
        FROM
            circleimg
        where 
            circle_id = ?

    `;
    const [data] = await connection.promise().query(statement, circle_id);

    return data;
}

export const getCircleCommentList = async (circle_id) => {
    const statement = `
        SELECT
            *
        FROM
            circle_comment_list
        where 
            circle_id = ?
    `;
    const [data] = await connection.promise().query(statement, circle_id);

    return data;
}

export const getCircleReplyList = async (comment_id) => {
    const statement = `
        SELECT
            *
        FROM
            circle_reply_list
        where
            comment_id = ?
    `;
    const [data] = await connection.promise().query(statement, comment_id);

    return data;
}

export const insertCircleComments = async (order) => {
    const statement = `
        INSERT INTO circle_comment_list
        SET ?
    `;

    const [data] = await connection.promise().query(statement, order);
    return data;
}

export const insertCircleReplys = async (order) => {
    const statement = `
        INSERT INTO circle_reply_list
        SET ?
    `;

    const [data] = await connection.promise().query(statement, order);
    return data;
}


export const getUserList = async () => {
    const statement = `
        SELECT
            *
        FROM
            user_info1
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const user2 = async () => {
    const statement = `
        SELECT
            *
        FROM
            user_info1
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const evaluate2 = async () => {
    const statement = `
        SELECT
            *
        FROM
            evaluation_product
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

/**
 * 获取用户ID
 */
export const getUser = (condition: string) => {
    // user.name  user.id user.name
    // sql模板 ？ WHERE 分支/
    return async (param: string | number) => {

        const statement = `
            SELECT
                user_info1.id,
                user_info1.name,
                user_info1.password,
                user_info1.avatar,
                user_info1.nickname,
                user_info1.introduction,
                user_info1.address
            FROM
                user_info1
            WHERE
                ${condition} = ?
        `;
        const [data] = await connection.promise().query(statement, param);
        return data[0]?.id ? data[0] : null;
    }
}

/**
 * 按用户名获取
 */
export const getUserByName = getUser('user_info1.name')

export const getUserById = getUser('user_info1.id')


/**
 * 创建用户
 */
export const createUser = async (user) => {
    const statement = `
        INSERT INTO user_info1
        SET ?
    `;

    const [data] = await connection.promise().query(statement, user);

    return data;
}

export const putUserInfo = async (detail) => {
    const statement = `
        UPDATE user_info1
            SET introduction = '${detail.introduction}', address = '${detail.address}'
        WHERE id = ${detail.id}
    `;

    const [data] = await connection.promise().query(statement, detail);
    return data;
}

// export const getDetail = async () => {
//     const statement = `
//         SELECT * FROM details;
//     `;
//     const [data] = await connection.promise().query(statement);

//     return data;
// }
// export const getDetailHeader = async () => {
//     const statement = `
//         SELECT
//             details.name,
//             details.img
//         FROM details;
//     `;
//     const [data] = await connection.promise().query(statement);

//     return data;
// }

// export const insertDetail = async (detail) => {
//     const statement = `
//         INSERT INTO details
//         SET ?
//     `;

//     const [data] = await connection.promise().query(statement, detail);
//     return data;
// }

// export const deleteDetail = async (id) => {
//     const statement = `
//         DELETE FROM details WHERE id = ${id}
//     `;

//     const [data] = await connection.promise().query(statement, id);
//     return data;
// }

// export const getAllUser = async () => {
//     const statement = `
//         SELECT
//             *
//         FROM
//             user
//     `;
//     const [data] = await connection.promise().query(statement);
//     return data
// }

// export const deleteUser = async (id) => {
//     const statement = `
//         DELETE FROM user WHERE id = ${id}
//     `;

//     const [data] = await connection.promise().query(statement, id);
//     return data;
// }


