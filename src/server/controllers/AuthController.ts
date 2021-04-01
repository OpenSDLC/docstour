import jwt from 'jsonwebtoken';
import { Role, Payload } from '../types'; 

/*
We want to run Authenticate before we allow users access to any of the CRUD functionality.
app.post(/createUser, (req, res) => { //create
  //check if username === valid && notTaken
    //onFail === "Input valid username"
    //onSuccess
      //hash password, send it to db
      //send username to db
      //res.send("good job, you get a cookie. literally")
})

    //////Composition of a JWT//////
      payload: Payload = {
        key1: val1,
        key2: val2
      }
      secret: string = "shhhh"

    const myNewJWT = jwt.sign(payload, secret);

app.post(/login, (req, res) => { //login
  //grab username and password off of the request object
    //if username && password === valid
      //onFail === "res.status(401).send(Input valid username please)"
      //onSuccess === {
        //issue credentials(JWT) upon successful login.
        //res.status(200).send(You did good.)
      }
  
  //
})

apiRouter.post('/', AuthController.verifyUser, DocController.postDocument, (req, res) => {
  res.status(200).json(res.locals.document);
});
*/


class AuthController {
  static async authenticate(payload: Payload) {
    
  }
  static async authorize(role: Role) {

  }
  static verifyUser(username: string, password: string, hashedPassword: string) {

  }
}

export default AuthController;