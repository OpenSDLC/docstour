import express, { Request, Response, NextFunction } from 'express';
import DocController from '../controllers/DocController';
import AuthController from '../controllers/AuthController';

// deconstruct methods from controller
// [] xyz_need to update types
const { postDocument: any, getDocuments: any,  updateDocument: any, deleteDocument: any } = DocController;
const { authenticateUser: any } = AuthController;

const apiRouter = express.Router();

// add methods to router object
apiRouter.post('/', authenticateUser, postDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.get('/', authenticateUser, getDocuments, (req, res) => {
  res.status(200).json(res.locals.allDocument);
});

apiRouter.put('/:id', authenticateUser, updateDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.delete('/:id', authenticateUser, deleteDocument, (req, res) => {
  res.status(200).json(res.locals.deletedMessage);
});
