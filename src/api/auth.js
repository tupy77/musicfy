import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Auth {
  async register(email, password) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      throw error;
    }
  }
}