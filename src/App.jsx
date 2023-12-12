import React, { useContext, useEffect, Suspense } from "react";
import NavBar from "./components/NavBar";
const Home  =  React.lazy(() => import("./pages/Home"))
const WhatsNew  =  React.lazy(() => import("./pages/whatsNew"))
const Bookmark  =  React.lazy(() => import("./pages/Bookmark"))
const Search  =  React.lazy(() => import("./pages/Search"))
const AccountSettings  =  React.lazy(() => import("./pages/AccountSettings"))
const History = React.lazy(() => import("./pages/History"))
const Rated = React.lazy(() => import("./pages/Rated"))
const Manuscript = React.lazy(() => import("./pages/Manuscript"))
const AboutUs = React.lazy(() => import("./pages/AboutUs"))
import LoadingModal from "./components/Loading";
import { Route, Routes, Navigate} from "react-router-dom";
import { UserContext } from "./data/userData";
import { getAuth,deleteUser } from "firebase/auth";
import { useState } from "react";
import {database} from "../firebaseConfig";
import {collection,getDocs,query,where,doc,setDoc,updateDoc} from 'firebase/firestore'
import LoadingPage from "./pages/LoadingPage";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
function App() {
  const { currentUser, logout } = useContext(UserContext);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [displayName, setDisplayName] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [remainingTime, setRemainingTime] = useState(60);  // 5 minutes in seconds

  let inactivityTimeout;

  // Function to reset the inactivity timer
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      console.log('Logging out due to inactivity');
      handleLogout();
    }, remainingTime * 1000);
  };

  // Function to handle user activity events (e.g., mousemove, keydown)
  const handleUserActivity = () => {
    setRemainingTime(60);  // Reset remaining time on activity
    resetInactivityTimer();
  };

  // Function to perform logout on inactivity
  const handleLogout = async () => {
    console.log(inactivityTimeout);

    if (currentUser) {
      console.log(currentUser.uid);
      const userRef = doc(database, 'Users', currentUser.uid);

      try {
        // Update user status to "offline"
        await updateDoc(userRef, {
          status: 'offline'
        });
        logout();
        console.log('User status updated to offline');
      } catch (error) {
        console.error('Error updating user status:', error.message);
      }
    }
  };

  // Attach event listeners for user activity
  useEffect(() => {
    document.addEventListener('mousemove', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);

    // Cleanup event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  // Start the inactivity timer
  useEffect(() => {
    resetInactivityTimer();

    // Update the remaining time every second
    const timerInterval = setInterval(() => {
      setRemainingTime(prev => (prev > 0 ? prev - 1 : prev));
    }, 1000);

    // Cleanup the inactivity timer and interval when the component unmounts
    return () => {
      clearTimeout(inactivityTimeout);
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

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
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  if(!currentUser){
    return<Home/>
  }
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
        <Suspense fallback={<LoadingPage/>}>
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
          <Route path="/AboutUs" element={<AboutUs/>} />
            {/* <Route path="/Loadingpage" element={<LoadingPage/>} /> */}
        </Routes>
                  
        </Suspense>
      </div>
    </>
  );
}

export default App;
