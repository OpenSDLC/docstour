import jwt from 'jsonwebtoken';
import db from '../models/Document';
import { Request, Response, NextFunction } from 'express';
// xyz_ need to import
import { } from '../types';

class DocController {
  // xyz_ need types
  static async postDocument(req: Request, res: Response, next: NextFunction) {
    // destructure body
    const {
      document_name, url, notes,
    } = req.body;

    // create values
    const values = [document_name, url, notes];

    // query db
    const sqlQuery = `
                      INSERT INTO documents_table (document_name, url, notes)
                      VALUES ($1, $2, $3)
    `;
    // run query 
    const result = await db.query(sqlQuery, values);
    console.log(result.rows)
  }
  // xyz_ need types
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
  // xyz_ need types
  static updateDocument(req: Request, res: Response, next: NextFunction) {

  }
  // xyz_ need types
  static deleteDocument() {// update state
    // return updated state

  }
}

export default DocController;