import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoVTcUp1h7cRRkXxOJdDVVBPeVeLHizV0",
  authDomain: "grocerymart-2210.firebaseapp.com",
  projectId: "grocerymart-2210",
  storageBucket: "grocerymart-2210.firebaseapp.com",
  messagingSenderId: "881803293653",
  appId: "1:881803293653:web:9d5334cd2f9a1725b1835c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, createUserWithEmailAndPassword };
