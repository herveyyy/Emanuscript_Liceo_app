import React, { useContext, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import WhatsNew from "./pages/whatsNew";
import Bookmark from "./pages/Bookmark";
import Search from "./pages/Search";
import AccountSettings from "./pages/AccountSettings";
import History from "./pages/History";
import Rated from "./pages/Rated";
import LoadingModal from "./components/Loading";
import { Route, Routes, Navigate} from "react-router-dom";
import { UserContext } from "./data/userData";
import { getAuth,deleteUser } from "firebase/auth";
import { useState } from "react";
import {database} from "../firebaseConfig";


import {collection,getDocs,query,where,doc,setDoc} from 'firebase/firestore'
import Manuscript from "./pages/Manuscript";
function App() {
  const { currentUser, logout } = useContext(UserContext);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [displayName, setDisplayName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsLoading(true)
    const isEmailExistsInUsersCollection = async (email) => {
      setIsLoading(true);

      const usersCollectionRef = collection(database, "Users");
      const querySnapshot = await getDocs(
        query(usersCollectionRef, where("email", "==", email))
      );
      return !querySnapshot.empty;
    };

    const handleRegister = async () => {
      if (currentUser.email) {
        setIsLoading(true);

        const emailExists = await isEmailExistsInUsersCollection(email);
        if (!emailExists) {
          const userData = {
            displayName: currentUser.displayName,
            email: currentUser.email,
            profilePictureURL: currentUser.photoURL,
          };
          const usersCollectionRef = collection(database, "Users");
          const userDocRef = doc(usersCollectionRef, auth.currentUser.uid);
          await setDoc(userDocRef, userData);
          console.log("Registration successful!");
        }
      }
    };

    const login = async (email) => {
      const emailExists = await isEmailExistsInUsersCollection(email);
      setDisplayName(currentUser.displayName);
      setEmail(currentUser.email);
      setProfile(currentUser.photoURL);
      if (!emailExists) {
        handleRegister();
        setIsLoading(true);

      }
    };

    if (currentUser && currentUser.email) {
      login(currentUser.email);
          setIsLoading(true)

      if (!currentUser.email.endsWith("@liceo.edu.ph")) {
        window.alert("Please use a valid @liceo.edu.ph email address.");
        const deleteUserAccount = async () => {
          try {
            setIsLoading(true);

            await deleteUser(auth.currentUser);
          } catch (error) {
            console.error("Error deleting user account:", error);
          }
        };
        deleteUserAccount();
        logout();
      }
    } else {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [currentUser, logout]);

  return (
    <>
     {isLoading && <LoadingModal />}
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
          <Route path="/Manuscript/:id" Component={Manuscript} />
          <Route path="/*" element={<Navigate to="/Home" />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
