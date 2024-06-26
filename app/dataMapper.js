const client = require('./database');

const dataMapper = {

    getAllFigurines: async () => {
        const sql = "SELECT * FROM figurine";
        const result = await client.query(sql);
        return result.rows;
    }, 

    getOneFigurine: async (targetId) => {
        const sql = `SELECT * FROM figurine WHERE id = ${targetId}`;
        const result = await client.query(sql);
        return result.rows[0];
    },

    selectReview : async (targetId) => {
         const sql = `SELECT * FROM review WHERE figurine_id = ${targetId}`;
         const result = await client.query(sql);
         return result.rows;
    },

    selectCategory : async (targetCategory) => {
        const sql = `SELECT * FROM figurine WHERE category = '${targetCategory}'`;
        const result = await client.query(sql);
        return result.rows;
   }

};

module.exports = dataMapper;

