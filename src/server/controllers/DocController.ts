import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import db from '../models/Document';
// xyz_ need to import
// import { } from '../types';

class DocController {
  // xyz_ need types
  static async postDocument(req: Request, res: Response, next: NextFunction) {
    // destructure body
    try {
      const { document_name, url, notes } = req.body;
      // create values
      const values = [document_name, url, notes];
      // query db
      const sqlQuery = `
                        INSERT INTO documents_table (document_name, url, notes)
                        VALUES ($1, $2, $3)
      `;
      // run query
      const result = await db.query(sqlQuery, values);
      console.log(result.rows);
      // set result to res.locals
      res.locals.document = result[0];
      return next();
    } catch (err) {
      console.log('Error in postDocument - Controller');
      console.log(err);
    }
  }

  static async getDocuments(req: Request, res: Response, next: NextFunction) {
    try {
      const sqlQuery = `SELECT * FROM documents_table`;
      const result = await db.query(sqlQuery);
      console.log(result.rows)
      const allDocuments = result['rows'];
      res.locals.allDocuments = allDocuments;
      return next();
    } catch (err) {
      console.log('better luck next time. - Controller');
      console.log(err)
    }
  }

  static async updateDocument(req: Request, res: Response, next: NextFunction) {
    try {
      // destructure id from params
      const { id } = req.params;
      // destructure variables from body
      const { name, url, notes } = req.body;
      // create values
      const values = [ id, name, url, notes ];
      // query db
      // xyz_check
      const sqlQuery = `UPDATE documents_table SET name = $2, url = $3, notes = $4 WHERE document_id = $1`;
      // run query
      const result = await db.query(sqlQuery, values);
      // console.log(result.rows);
      // set result to res.locals
      res.locals.document = `Data for imdb_film_id = ${values} successfully deleted.`;
      return next();
    } catch (err) {
      console.log('Error in deleteDocument - Controller');
      console.log(err);
    }
    }

  static async deleteDocument(req: Request, res: Response, next: NextFunction) {// update state
    try {
      // destructure id from params
      const { id } = req.params;
      // create values
      const values = [ id ];
      // query db
      // xyz_check
      const sqlQuery = `DELETE FROM documents_table WHERE document_id = $1`;
      // run query
      const result = await db.query(sqlQuery, values);
      // console.log(result.rows);
      // set result to res.locals
      res.locals.deletedMessage = `Data for imdb_film_id = ${values} successfully deleted.`;
      return next();
    } catch (err) {
      console.log('Error in deleteDocument - Controller');
      console.log(err);
    }
  }
}

export default DocController;