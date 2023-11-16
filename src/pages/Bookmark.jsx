import { Avatar, Typography, Card, CardHeader,CardBody, Button } from "@material-tailwind/react";
import AccountTabs from "../components/AccountTabs";
import React,{useEffect, useState,useContext} from "react";
import SearchCard from "../components/SearchCards";
import { UserContext } from "../data/userData";
import LoadingModal from "../components/Loading";
import { database } from "../../firebaseConfig";
import { collection,where, getDocs,query} from "firebase/firestore";
import { async } from "@firebase/util";
const Bookmark = () => {
const [bookmark, setBookmark] = useState([])
const {currentUser,logout} = useContext(UserContext)
  useEffect(()=> {
  const fetchUserBookmark = async () => {
    const q = query(collection(database, "Bookmark"),where("userID", "==", currentUser.uid))
try {

} catch (error) {
  
}
  }
  },[bookmark])
  if(!currentUser){
    return <LoadingModal/>
  }
    return ( 
    <div className="flex justify-center mt-6 min-h-screen">
      <div className="absolute flex justify-center items-center mb-[20rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src={currentUser.photoURL} alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>{currentUser.displayName}</h1>
              <h2>{currentUser.email}</h2>
          </div>
      </div>
   
      <div className="mt-[8rem]">   
      <div className="flex justify-center my-4">
        <div className="sm:block hidden">
        <AccountTabs/>
        </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <SearchCard
          key={""}
          title={"HEHE"}
          abstract={"HEHEHE"}
          frontPage={"hehe"}
          keywords={["1","2","3"]}
          department={"department1111"}
          />
        </div>
      </div>
    </div>
    );
}

export default Bookmark;