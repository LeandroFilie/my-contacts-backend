const { Pool } = require('pg');

const pool = new Pool({
  connectionString: `${process.env.POSTGRES_URL}?sslmode=require`,
});

pool.connect();

exports.query = async (query, values) => {
  const { rows } = await pool.query(query, values);
  return rows;
};
