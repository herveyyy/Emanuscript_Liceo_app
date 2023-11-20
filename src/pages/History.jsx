import { Avatar, Typography, Card, CardHeader,CardBody, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AccountTabs from "../components/AccountTabs";
import HistoryCard from "../components/HistoryCard";
import React,{useContext,useState,useEffect} from "react";
import {UserContext} from "../data/userData"
import LoadingModal from "../components/Loading";
import { database } from "../../firebaseConfig";
import { collection,where, getDocs,query} from "firebase/firestore";
function History() {
  const [historyList,setHistoryList] = useState([])
  const {currentUser} = useContext(UserContext)

  const fetchUserHistory = async () => {
    try {
      const q = query(collection(database, "History"), where("UserID", "==", currentUser.uid));
      const snapshot = await getDocs(q);
      const history = snapshot.docs.map((doc) => {
        const historyData = doc.data();
        return {
          id: doc.id,
          ...historyData,
        };
      });
      setHistoryList(history)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (currentUser) {
      fetchUserHistory();
      console.log(historyList);
    }
  }, [currentUser])
  
  if(!currentUser){
    return <LoadingModal/>
  }
  
    return ( 
        <div className=" min-h-screen">
      <div className=" flex justify-center items-center mb-[2rem] px-1">
          <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
              <Avatar src={currentUser.photoURL} alt='profile' size="xl"/>
          </div>
          <div className="px-3 italic">
              <h1>{currentUser.displayName}</h1>
              <h2>{currentUser.email}</h2>
      </div>
      </div>
      <div className="md:flex w-full justify-center my-4 hidden">
        <AccountTabs/>
        </div>
        <div className="flex justify-center my-4 gap-x-2 px-2 w-full">
       <div className="border-t  mt-2.5  border-gray-400 h-1 w-full"></div>
        <p>HISTORY</p>
        <div className="border-t mt-2.5 border-gray-400 h-1 w-full"></div>
        </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap  gap-3 justify-center">

        {historyList.map((historyData, index) => {
    if (historyData.ManuscriptName && historyData.ManuscriptAbstract && historyData.ManuscriptPicture && historyData.Department) {
      return (
        <HistoryCard
          key={index}
          id={historyData.id}
          manuscriptID={historyData.ManuscriptID}
          title={historyData.ManuscriptName}
          abstract={historyData.ManuscriptAbstract}
          frontPage={historyData.ManuscriptPicture}
          department={historyData.Department}
        />
      );
    } else {
      // Handle missing history data
      console.error(`Missing history data for history with ID ${historyData.id}`);
      return null;
    }
  })}
        </div>
      </div>
    </div>
);
}
export default History;