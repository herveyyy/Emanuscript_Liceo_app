import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { doc, collection } from "firebase/firestore";
import {
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
  signOut,
  deleteUser,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrRWaQiYXjRdjPpC4dICUh63bm1sy7a88",
  authDomain: "mls-liceo-app.firebaseapp.com",
  databaseURL:
    "https://mls-liceo-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mls-liceo-app",
  storageBucket: "mls-liceo-app.appspot.com",
  messagingSenderId: "484911625936",
  appId: "1:484911625936:web:6566ce09391e38fb3ed0d5",
};

// Initialize Firebase  e
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const handleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (result?.user?.email && !result.user.email.endsWith("@liceo.edu.ph")) {
      // Delete the user from Firebase Authentication
      while (auth.currentUser) {
        await deleteUser(auth.currentUser);
        console.log("deleted");
        await signOut(auth);
      }
      return;
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
const checkAndCreateUser = async (user) => {
  try {
    const usersRef = collection(database, "Users");
    const userDoc = doc(usersRef, user.uid);
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      // User already exists in the Users collection
      console.log("User already exists");
    } else {
      // User does not exist, create a new document with user data
      const userData = {
        uid: user.uid,
        email: user.email,
        // Add other user data as needed
      };
      await setDoc(userDoc, userData);
      console.log("User created in Users collection");
    }
  } catch (error) {
    console.error("Error checking/creating user:", error);
  }
};
export { handleLogin, checkAndCreateUser };
