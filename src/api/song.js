import {
  setDoc,
  doc,
  where,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../utils";

import { v4 as uuidv4 } from "uuid";
import { map } from "lodash";

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

  async obtainAllByAlbum(idAlbum) {
    try {
      const whereRef = where("album", "==", idAlbum);
      const collectionRef = collection(db, this.collectionName);
      const q = query(collectionRef, whereRef);

      const snapshot = await getDocs(q);
      const data = map(snapshot.docs, (doc) => ({ ...doc.data() }));
      return data;
    } catch (error) {
      throw error;
    }
  }
}
