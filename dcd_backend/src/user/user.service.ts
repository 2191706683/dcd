import { connection } from '../app/database/mysql'
import { UserModel } from './user.model';

/**
 * 获取用户ID
 */
export const getUser = (condition: string) => {
    // user.name  user.id user.name
    // sql模板 ？ WHERE 分支/
    return async (param: string | number) => {

        const statement = `
            SELECT
                user.id,
                user.name,
                user.password,
                user.isGM
            FROM
                user
            WHERE
                ${condition} = ?
        `;
        const [data] = await connection.promise().query(statement, param);
        return data[0]?.id ? data[0] : null;
    }
}

/**
 * 创建用户
 */
export const createUser = async (user: UserModel) => {
    const statement = `
        INSERT INTO user
        SET ?
    `;

    const [data] = await connection.promise().query(statement, user);

    return data;
}

export const getUserGrid = async () => {
    const statement = `
        SELECT
            gridList.id,
            gridList.icon,
            gridList.name
        FROM
            gridList
    `;
    const [data] = await connection.promise().query(statement);

    return data;
}

/**
 * 按用户名获取
 */
export const getUserByName = getUser('user.name')

export const getUserById = getUser('user.id')



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

export const insertForm = async (order) => {
    const statement = `
        INSERT INTO order_form
        SET ?
    `;

    const [data] = await connection.promise().query(statement, order);
    return data;
}





