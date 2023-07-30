import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUHfrVARP9Aom7y1L1G5XPMJMl8B9Gj9Q",
  authDomain: "musicfy-v1-a394c.firebaseapp.com",
  projectId: "musicfy-v1-a394c",
  storageBucket: "musicfy-v1-a394c.appspot.com",
  messagingSenderId: "252492090801",
  appId: "1:252492090801:web:ae732f080be833061dc190",
};

export const initFirebase = initializeApp(firebaseConfig);
