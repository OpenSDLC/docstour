import jwt from 'jsonwebtoken';
import db from '../models/Document';
import {Request, Response, NextFunction} from 'express';
// xyz_ need to import
import {  } from '../types'; 

class DocController {
  // xyz_ need types
  static postDocument() {

  }
  // xyz_ need types
  static async getDocuments(req: Request, res: Response, next: NextFunction) {
    try {
      const getAll = `SELECT * FROM documents_table`;
      const result = await db.query(getAll);
      console.log(result.rows)
      const allDocuments = result.rows;
      res.locals.allDocuments = allDocuments;
      return next();
    } catch(err) {
      console.log('better luck next time. - Controller');
      console.log(err)
    }
  }
  // xyz_ need types
  static updateDocument() {

  }
  // xyz_ need types
  static deleteDocument() {// update state
    // return updated state

  }
}

export default DocController;