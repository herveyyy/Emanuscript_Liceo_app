// user.context.js
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
  logout: () => null,
});

export const UserProvider = ({ children }) => {
  // State to hold the current user
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle user logout
  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  // Use effect to check for the user's authentication data on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null); // No user is authenticated
      }
    });

    // Cleanup the observer
    return () => unsubscribe();
  }, []);

  const value = { currentUser, setCurrentUser, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
