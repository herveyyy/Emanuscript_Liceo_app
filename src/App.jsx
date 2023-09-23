import React, { useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import WhatsNew from "./pages/whatsNew";
import Bookmark from "./pages/Bookmark";
import Search from "./pages/Search";
import AccountSettings from "./pages/AccountSettings";
import History from "./pages/History";
import Rated from "./pages/Rated";
import Errorpage from "./pages/Errorpage";
import { Route, Routes, Navigate} from "react-router-dom";
import { UserContext } from "./data/userData";
import { getAuth,deleteUser } from "firebase/auth";
import { useState } from "react";
import { database} from "../firebaseConfig";
import {collection,getDocs,query,where} from 'firebase/firestore'
function App() {
  const { currentUser, logout } = useContext(UserContext);
  const [displayName,setDisplayName] =useState("")
const [profile,setProfile] =useState("")
  const [email,setEmail] =useState("")
const auth = getAuth()
const isEmailExistsInUsersCollection = async (email) => {
  try {
    // Reference to the "Users" collection
    const usersCollectionRef = collection(database, "Users");

    // Query the collection to check if a document with the provided email exists
    const querySnapshot = await getDocs(
      query(usersCollectionRef, where("email", "==", email))
    );

    // Check if any documents match the query
    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking email existence:", error);
    throw error;
  }
};

  useEffect(() => {
    const login = async (email) => {
      // Check if the email exists in the "Users" collection
      const emailExists = await isEmailExistsInUsersCollection(email);
      setDisplayName(currentUser.displayName)
      setEmail(currentUser.email)
      setProfile(currentUser.photoURL)
      if (emailExists) {
        // Email exists, continue with the login process
        // Add your login code here
      } else {
        logout()
        console.log("Pag register gard")
        console.log("Email not found in the Users collection. Please register.");
      }
    };

    if (currentUser && currentUser.email) {
      login(currentUser.email)
      if (!currentUser.email.endsWith("@liceo.edu.ph")) {
        // The email is not from the "liceo.edu.ph" domain
        // You can perform actions here, like showing an alert or deleting the user
        window.alert("Please use a valid @liceo.edu.ph email address.");
        const deleteUserAccount = async () => {
          try {
            await deleteUser(auth.currentUser);
          } catch (error) {
            console.error("Error deleting user account:", error);
          }
        };
        
        deleteUserAccount(); // Call the function to delete the user
        logout(); // Log out the user
        return; // Exit the function to prevent further execution
      }
    
    }
  }, [currentUser, logout]);

  return (
    <>
      <div className="bg-transparent">
        <div className="m-4">
          {currentUser ? (
            <NavBar profilePic={profile} displayName={displayName} email={email} />
          ) : (
            <div className="flex justify-center w-full lg:justify-between gap-x-5">
              <img className="w-24 lg:w-32" src="/static/images/liceo.png" />
              <img
                className="w-24 lg:visible invisible lg:relative absolute"
                src="/static/images/libraryLogo.png"
              />
            </div>
          )}
        </div>
        <Routes >
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/WhatsNew" element={<WhatsNew />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/AccountSettings/Bookmark" element={<Bookmark />} />
          <Route path="/AccountSettings/History" element={<History />} />
          <Route path="/AccountSettings/Rated" element={<Rated />} />
          <Route path="/*" element={<Navigate to="/Home" />} />
         
        </Routes>
      </div>
    </>
  );
}

export default App;
