import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import ModalRegister from "../components/ModalRegister";
import { Footer } from "../components/Footer";
import { FcGoogle } from "react-icons/fc";
import { database, handleLogin } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { UserContext } from "../data/userData";
import { useState } from "react";
import LoadingModal from "../components/Loading";
import Search from "./Search";
const Home = () => {
  const { currentUser, logout } = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const hasSchoolID = async (currentUser) => {
    try {
      setIsLoading(true);
      if (!currentUser) {
        // currentUser is not available, return false
        return false;
      }

      // Reference to the "Users" collection in Firestore
      const usersCollectionRef = collection(database, "Users");

      // Get the user's document from the collection using the user's UID
      const userDocRef = doc(usersCollectionRef, currentUser.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // Check if the user document has a schoolID field
        const userData = userDocSnapshot.data();

        if (userData && userData.schoolID) {
          if (userData && userData.status == "block") {
            alert("You have been blocked");
            return logout();
          }
          return true; // User has a schoolID
        }
      }

      return false; // User does not have a schoolID
    } catch (error) {
      console.error("Error checking for schoolID:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/Home");
    } else {
      navigate("/Search");
    }

    const checkSchoolID = async () => {
      const userHasSchoolID = await hasSchoolID(currentUser);
      if (userHasSchoolID) {
        console.log(userHasSchoolID);
        setNewUser(false);
      } else {
        // User does not have a schoolID, you can handle this case as needed
        setNewUser(true);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Hide the loading screen after 1000 milliseconds (1 second)
    };

    if (currentUser) {
      checkSchoolID();
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [currentUser]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div className="absolute top-0  bottom-0 -z-10  h-screen w-screen">
        <div className="absolute top-0  bg-black h-screen">
          <img
            src="/static/images/LiceoBG.jpg"
            className="blur-sm object-cover h-screen w-screen bg-black"
          />
        </div>

        <div className="px-8 w-full flex justify-center mt-40 bg-transparent">
          <Card className="mt-6 mr-2 lg:w-[25%] xl:w-[35%] md:w-full sm:w-full w-full lg:gap-y-64 md:gap-y-12 p-4 bg-transparent">
            <div className="  flex w-full justify-center">
              <div className="h-48 w-48">
                <img src="/static/images/liceo.png" />
              </div>
            </div>
            {currentUser && (
              <ModalRegister user={currentUser} userNew={newUser} />
            )}
            {!currentUser && (
              <Button
                onClick={handleLogin}
                color="blue"
                className="flex justify-center gap-2 items-center "
              >
                <FcGoogle className="w-8 h-8" />
                Login
              </Button>
            )}
          </Card>
        </div>
        <div className="text-center fixed bottom-0 w-full">
          <div className="py-3 pb-1 justify-center -py-2 bg-red-900">
            <p className="text-xs pb-2 opacity-50 text-white">
              &copy; {new Date().getFullYear()} Liceo de Cagayan University. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
