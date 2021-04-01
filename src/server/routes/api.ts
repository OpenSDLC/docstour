import express, { Request, Response, NextFunction } from 'express';
import DocController from '../controllers/DocController';
import AuthController from '../controllers/AuthController';

// deconstruct methods from controller
// [] xyz_need to update types
//????
const apiRouter = express.Router();

// add methods to router object
apiRouter.post('/', AuthController.verifyUser, DocController.postDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.get('/', DocController.getDocuments, (req: Request, res: Response) => {
  const { allDocuments } = res.locals;
  res.status(200).json(allDocuments);
});

apiRouter.put('/:id', AuthController.verifyUser, DocController.updateDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});

apiRouter.delete('/:id', AuthController.verifyUser, DocController.deleteDocument, (req, res) => {
  res.status(200).json(res.locals.deletedMessage);
});

export default apiRouter;