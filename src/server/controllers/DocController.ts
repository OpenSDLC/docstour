import jwt from 'jsonwebtoken';
import db from '../models/Document';
import {Request, Response, NextFunction} from 'express';
// xyz_ need to import
import {  } from '../types'; 

class DocController {
  // xyz_ need types
  static postDocument(req: Request, res: Response, next: NextFunction) {

  }
  // xyz_ need types
  static async getDocuments(req: Request, res: Response, next: NextFunction) {
    try {
      const getAll = `SELECT * FROM documents_table`;
      const result = await db.query(getAll);
      const allDocs = result.rows;
      res.locals.allDocs = allDocs;
      next();
    } catch(err) {
      console.log(err)
    }
  }
  // xyz_ need types
  static updateDocument(req: Request, res: Response, next: NextFunction) {

  }
  // xyz_ need types
  static deleteDocument(req: Request, res: Response, next: NextFunction) {

  }
}

export default DocController;