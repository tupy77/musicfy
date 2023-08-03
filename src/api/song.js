import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils";

import { v4 as uuidv4 } from "uuid";

export class Song {
  collectionName = "songs";

  async create(name, album, file) {
    try {
      const id = uuidv4();
      const createdAt = new Date();
      const data = { name, album, file, id, createdAt };

      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }
}
