import express, { Request, Response, NextFunction } from 'express';
import DocController from '../controllers/DocController';
import AuthController from '../controllers/AuthController';

// deconstruct methods from controller
// [] xyz_need to update types

const apiRouter = express.Router();
//
// add methods to router object
// apiRouter.post('/', AuthController.verifyUser, DocController.postDocument, (req, res) => {
//   res.status(200).json(res.locals.document);
// });

// apiRouter.get('/', AuthController.verifyUser, DocController.getDocuments, (req, res) => {
//   res.status(200).json(res.locals.allDocument);
// });

// apiRouter.put('/:id', AuthController.verifyUser, DocController.updateDocument, (req, res) => {
//   res.status(200).json(res.locals.document);
// });

// apiRouter.delete('/:id', AuthController.verifyUser, DocController.deleteDocument, (req, res) => {
//   res.status(200).json(res.locals.deletedMessage);
// });

export default apiRouter;