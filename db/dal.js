import {db} from  './db.js';
import {snakeToCamelObj} from '../utils/snakeToCamel.js';
import {defaultNameMaker} from '../utils/defaultNameMaker.js';
import {dateNowUTC} from '../utils/dateNowUTC.js';

export class DAL {

    static async addUser(email, hashPassword) {

        const firstName = defaultNameMaker(email);
        const registerDate = dateNowUTC();

        const result = await db.query(`INSERT INTO users (email, password, first_name, register_date) VALUES ($1, $2, $3, $4) RETURNING *`, [email, hashPassword, firstName, registerDate]);

        return snakeToCamelObj(result.rows[0]);
    }

    // async getUserByName(username) {
    //     const result = await db.query(`SELECT * FROM users WHERE username = $1`, [username]);
    //     return result.rows[0];
    // }
    //
    // async getUserById(id) {
    //     const result = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    //     return result.rows[0];
    // }
    //
    // async getUserByEmail(email) {
    //     const result = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
    //     return result.rows[0];
    // }
    //
    // async getUserByActivationLink(activationLink) {
    //     const result = await db.query(`SELECT * FROM users WHERE activation_link = $1`, [activationLink]);
    //     return result.rows[0];
    // }
    //
    // async getAllUsers(count = 4, page = 1) {
    //     const totalCountResult = await db.query(`SELECT count(*) FROM users`);
    //     const totalCount = totalCountResult.rows[0].count;
    //
    //     const offset = count * (page - 1);
    //
    //     const result = await db.query(`SELECT * FROM users ORDER BY id DESC OFFSET $1 LIMIT $2`, [offset, count]);
    //
    //     return {totalCount, users: result.rows};
    // }
    //
    // async getUsersByIdArr(usersIdArr) {
    //     const result = await db.query(`SELECT * FROM users WHERE id = ANY($1::int[])`, [usersIdArr]);
    //
    //     return result.rows;
    // }
    //
    // async activateAccount(activationLink) {
    //     await db.query(`UPDATE users SET is_activated = true WHERE activation_link = $1`, [activationLink]);
    // }
    //
    // async deleteUserById(id) {
    //     const result = await db.query(`DELETE FROM users WHERE id = $1 RETURNING *`, [id]);
    //     return result.rows[0];
    // }
    //
    // async refreshUsersToken(userId, refreshToken) {
    //     await db.query(`UPDATE users SET refresh_token = $2 WHERE id = $1`, [userId, refreshToken]);
    // }
    //
    // async removeUsersToken(id) {
    //     await db.query(`UPDATE users SET refresh_token = null WHERE id = $1`, [id]);
    // }
}