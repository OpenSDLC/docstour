import jwt from 'jsonwebtoken';
import { Role, Payload } from '../../types'; 


class AuthController {
  constructor() {

  }
  static authenticate(payload: Payload) {

  }
  static authorize(role: Role) {

  }
  static verifyUser(username: string, password: string, hashedPassword: string) {

  }
}

export default AuthController;