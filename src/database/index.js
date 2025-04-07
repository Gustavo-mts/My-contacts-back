const { Client } = require('pg');

const client = new Client({

  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'postgres',

});

client.connect();

// client.query('SELECT * FROM contacts').then(console.log);

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};


