import { getAuth, updateProfile } from "firebase/auth";

export class User {
  getMe() {
    try {
      return getAuth().currentUser;
    } catch (error) {
      throw error;
    }
  }

  async updateAvatarUser(url) {
    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, {
        photoURL: url,
      });
    } catch (error) {
      throw error;
    }
  }
}
