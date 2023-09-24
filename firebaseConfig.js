import { initializeApp } from "firebase/app";
import {getFirestore } from "@firebase/firestore";
import { signInWithRedirect, getAuth, GoogleAuthProvider, signOut, deleteUser } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBrRWaQiYXjRdjPpC4dICUh63bm1sy7a88",
  authDomain: "mls-liceo-app.firebaseapp.com",
  databaseURL: "https://mls-liceo-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mls-liceo-app",
  storageBucket: "mls-liceo-app.appspot.com",
  messagingSenderId: "484911625936",
  appId: "1:484911625936:web:6566ce09391e38fb3ed0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});


const handleLogin = async () => {
    try {
      const result = await signInWithRedirect(auth, googleProvider);
  
      // Wait for a short period (e.g., 3 seconds) to allow for potential caching to clear
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      // Check if the user's email contains "@liceo.edu.ph"
      if (result?.user?.email && !result.user.email.endsWith("@liceo.edu.ph")) {  
        // Delete the user from Firebase Authentication
        while(auth.currentUser){
            await deleteUser(auth.currentUser);
            console.log("deleted")
            await signOut(auth);
        }
        return;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

export { handleLogin };