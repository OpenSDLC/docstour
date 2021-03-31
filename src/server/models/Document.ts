import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const myURI = `${process.env.PG_URI}`;

console.log(myURI);
 
const pool: Pool = new Pool({
  host: myURI
});

module.exports = {
  query: (text: string, params: Array<string | number>, callback: any) => {
    console.log('Query String: ', text);
    return pool.query(text, params, callback);
  }
};