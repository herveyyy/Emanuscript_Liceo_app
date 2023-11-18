import { Avatar, Typography, Card, CardHeader,CardBody, Button } from "@material-tailwind/react";
import AccountTabs from "../components/AccountTabs";
import React,{useEffect, useState,useContext} from "react";
import { UserContext } from "../data/userData";
import BookmarkCard from "../components/BookmarkCards";
import LoadingModal from "../components/Loading";
import { database } from "../../firebaseConfig";
import { collection,where, getDocs,query} from "firebase/firestore";
import { async } from "@firebase/util";
const Bookmark = () => {
const [bookmarks, setBookmarks] = useState([])
const {currentUser,logout} = useContext(UserContext)
const fetchUserBookmark = async () => {
  try {
    const q = query(collection(database, "Bookmark"), where("UserID", "==", currentUser.uid));
    const snapshot = await getDocs(q);
    const bookmark = snapshot.docs.map((doc) => {
      const bookmarkData = doc.data();
      return {
        id: doc.id,
        ...bookmarkData,
      };
    });
    setBookmarks(bookmark);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (currentUser) {
    fetchUserBookmark();
    console.log(bookmarks);
  }
}, [currentUser]);

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
   
      <div className="md:mt-[8rem] mt-[6rem]">   
      <div className="flex justify-center my-4">
        <div className="sm:block hidden">
        <AccountTabs/>
        </div>
        </div>
        <div className="flex justify-center my-4 gap-x-2 px-2 w-full">
       <div className="border-t  mt-2.5  border-gray-400 h-1 w-full"></div>
        <p>BOOKMARKS</p>
        <div className="border-t mt-2.5 border-gray-400 h-1 w-full"></div>
        </div>
      
        <div className="flex flex-wrap gap-3 justify-center">
  {bookmarks.map((bookmarkData, index) => {
    if (bookmarkData.ManuscriptName && bookmarkData.ManuscriptAbstract && bookmarkData.ManuscriptPicture && bookmarkData.Department) {
      return (
        <BookmarkCard
          key={index}
          id={bookmarkData.id}
          title={bookmarkData.ManuscriptName}
          abstract={bookmarkData.ManuscriptAbstract}
          frontPage={bookmarkData.ManuscriptPicture}
          department={bookmarkData.Department}
        />
      );
    } else {
      // Handle missing bookmark data
      console.error(`Missing bookmark data for bookmark with ID ${bookmarkData.id}`);
      return null;
    }
  })}
        </div>
      </div>
    </div>
    );
}

export default Bookmark;