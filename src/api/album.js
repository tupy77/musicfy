import {
  doc,
  setDoc,
  getDocs,
  collection,
  getDoc,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
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

  async getAlbum(id) {
    try {
      const docRef = doc(db, this.collectionName, id);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        return snapshot.data();
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  async getAlbumsByArtist(idArtist) {
    try {
      const whereRef = where("artist", "==", idArtist);
      const collectionRef = collection(db, this.collectionName);
      const queryRef = query(collectionRef, whereRef);

      const snapshot = await getDocs(queryRef);
      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }

  async getLastAlbums(limitAlbums = 20) {
    try {
      const collectionRef = collection(db, this.collectionName);
      const limitRef = limit(limitAlbums);
      const orderByRef = orderBy("created_at", "desc");
      const queryRef = query(collectionRef, orderByRef, limitRef);

      const snapshot = await getDocs(queryRef);
      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }
}
// try {
//   const collectionRef = collection(db, this.collectionName);
//   const query = collectionRef.where("artist", "==", artist);
//   const snapshot = await getDocs(query);
//   const data = [];
//   snapshot.forEach((doc) => {
//     data.push(doc.data());
//   });
//   return data;
// } catch (error) {
//   throw error;
// }
