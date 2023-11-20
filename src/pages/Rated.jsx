import { Avatar } from "@material-tailwind/react";
import AccountTabs from "../components/AccountTabs";
import RatedCards from "../components/RatedCards";
import { database } from "../../firebaseConfig";
import { collection,query,where,getDocs} from "firebase/firestore";
import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../data/userData";
import LoadingModal from "../components/Loading";
function Rated() {
  const [ratingsList,setRatingsList] = useState([])
  const {currentUser} = useContext(UserContext)
  const fetchUserRatings = async () => {
    try {
      const q = query(collection(database, "Ratings"), where("UserID", "==", currentUser.uid));
      const snapshot = await getDocs(q);
      const rating = snapshot.docs.map((doc) => {
        const ratingData = doc.data();
        return {
          id: doc.id,
          ...ratingData,
        };
      });
      setRatingsList(rating);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (currentUser) {
      fetchUserRatings()
      console.log(ratingsList)
    }
  }, [currentUser]);
  
  if(!currentUser){
    return <LoadingModal/>
  }
    return ( 
        <div className=" justify-center mt-6 min-h-screen">
      <div className=" flex justify-center items-center">
          <div className="bg-red-800 rounded-full mb-[1rem] py-1 px-1">
              <Avatar src={currentUser.photoURL} alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>{currentUser.displayName}</h1>
              <h2>{currentUser.email}</h2>
          </div>
      </div>
      <div className="">
      <div className=" justify-center my-4 hidden md:flex">
        <AccountTabs/>
        </div>
        <div className="flex justify-center items-center my-4 gap-x-2 px-2 w-full">
       <div className="border-t   border-gray-400 h-1 w-full"></div>
        <p className="uppercase text-center w-96">Rated Manuscripts</p>
        <div className="border-t  border-gray-400 h-1 w-full"></div>
        </div>
        <div className="flex flex-wrap gap-x-3 justify-center">
         {ratingsList.map((ratingsData, index) => {
    if (ratingsData.ManuscriptName && ratingsData.Abstract && ratingsData.ManuscriptPicture && ratingsData.ManuscriptDepartment) {
      return (
        <RatedCards
          key={index}
          id={ratingsData.ManuscriptID}
          title={ratingsData.ManuscriptName}
          abstract={ratingsData.Abstract}
          frontPage={ratingsData.ManuscriptPicture}
          department={ratingsData.ManuscriptDepartment}
          rate={ratingsData.Rating}
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

export default Rated;