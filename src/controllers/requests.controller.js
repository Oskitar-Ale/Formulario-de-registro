import  { pool } from '../db/connection.js'; //== Import DB ==

export const ping = async  (req, res) => {
    const result = await pool.query('SELECT "pong" AS result')
    res.json(result[0])
}