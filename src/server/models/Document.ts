// xyz require type
const { Pool } = require('pg');

// import from env to give access to MONGO_URI
// require('dotenv').config();
// xyz_ how to do for TypeScript
import dotenv from 'dotenv';
dotenv.config();

const myURI = `${process.env.PG_URI}`;
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connection: myURI
})

// what to do here for TypeScript ? ? ?

module.exports = {
  query: (text, params, callback) => {
    console.log('Query String: ', text);
    return pool.query(text, params, callback);
  }
};