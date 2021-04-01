import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

// const myURI = `${process.env.PG_URI}`;
const myURI = 'postgres://yzplplpy:80efOzUz0OOTYoDxvNwPBCCTSh5BJTSd@queenie.db.elephantsql.com:5432/yzplplpy';
const connectionString = 'postgres://yzplplpy:80efOzUz0OOTYoDxvNwPBCCTSh5BJTSd@queenie.db.elephantsql.com:5432/yzplplpy';
// console.log(myURI);
 
// const pool: Pool = new Pool({
//   host: myURI
// });

const pool: Pool = new Pool({
  connectionString: myURI,
});

export default {
  query: (text: string, params?: any, callback?: any): any => {
    console.log('Query String: ', text);
    return pool.query(text, params, callback);
  },
};
