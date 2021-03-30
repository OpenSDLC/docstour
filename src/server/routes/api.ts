import express, { Request, Response, NextFunction } from 'express';
import DocController from '../controllers/DocController';
import AuthController from '../controllers/AuthController';

// deconstruct methods from controller
// [] xyz_need to update types
const { postDocument: any, getDocuments: any,  updateDocument: any, deleteDocument: any } = DocController;
const { verifyUser: any } = AuthController;

const apiRouter = express.Router();

// add methods to router object
apiRouter.post('/', verifyUser, postDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.get('/', verifyUser, getDocuments, (req, res) => {
  res.status(200).json(res.locals.allDocument);
});

apiRouter.put('/:id', verifyUser, updateDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.delete('/:id', verifyUser, deleteDocument, (req, res) => {
  res.status(200).json(res.locals.deletedMessage);
});
