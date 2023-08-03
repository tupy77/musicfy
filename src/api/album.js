import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { map } from "lodash";
import { db } from "../utils";

export class Album {
  collectionName = "albums";

  async create(name, image, artist) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, image, artist, created_at };

      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async obtainAll() {
    try {
      const collectionRef = collection(db, this.collectionName);
      const snapshot = await getDocs(collectionRef);
      const data = [];
      // snapshot.forEach((doc) => {
      //   data.push(doc.data());
      // });
      // return data;

      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }
}
