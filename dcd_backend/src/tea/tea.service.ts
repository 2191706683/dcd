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
 * 按用户名获取
 */
// export const getUserByName = getUser('user.name')

// export const getUserById = getUser('user.id')



export const getDetail = async () => {
    const statement = `
        SELECT * FROM details;
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}
export const getDetailHeader = async () => {
    const statement = `
        SELECT
            details.name,
            details.img
        FROM details;
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

export const insertDetail = async (detail) => {
    const statement = `
        INSERT INTO details
        SET ?
    `;

    const [data] = await connection.promise().query(statement, detail);
    return data;
}

export const deleteDetail = async (id) => {
    const statement = `
        DELETE FROM details WHERE id = ${id}
    `;

    const [data] = await connection.promise().query(statement, id);
    return data;
}

export const putDetail = async (detail) => {
    const statement = `
        UPDATE details
        SET description = '${detail.description}', title = '${detail.title}', price = '${detail.price}', guide_price = '${detail.guide_price}'
        WHERE id = ${detail.id}
    `;

    const [data] = await connection.promise().query(statement, detail);
    return data;
}

export const getAllUser = async () => {
    const statement = `
        SELECT
            *
        FROM
            user
    `;
    const [data] = await connection.promise().query(statement);
    return data
}

export const deleteUser = async (id) => {
    const statement = `
        DELETE FROM user WHERE id = ${id}
    `;

    const [data] = await connection.promise().query(statement, id);
    return data;
}


