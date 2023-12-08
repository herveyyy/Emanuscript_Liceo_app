import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../data/userData";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import AdvanceSearch from "../components/AdvanceSearch";
import { Input, Select, Typography,Option } from "@material-tailwind/react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { database } from "../../firebaseConfig";
import ResultsPage from "./ResultsPage";
import LoadingModal from "../components/Loading";
const Search = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateManuscripts = (newManuscripts) => {
    setSearchResults(newManuscripts);
  }

  useEffect(() => {
    if (!currentUser) {
      navigate("/Home");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [currentUser, searchResults]);
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    const parsedKeywords = splitSearchQuery(query.toLowerCase()); // Convert the query to lowercase
    setKeywords(parsedKeywords);
  };
  const splitSearchQuery = (searchData) => {
    return searchData.split(" ").filter((keyword) => keyword.trim() !== "");
  };
  const handleSearch = async () => {
    try {
      setIsLoading(true)
      console.log(keywords);
  
      const manuscriptRef = collection(database, "Manuscript");
      const querySnapshot = await getDocs(
        query(
          manuscriptRef,
          where("keywords", "array-contains-any", keywords)
        )
      );
  
      const results = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          docID: doc.id,
          title: data.title,
          abstract: data.abstract,
          frontPageURL: data.frontPageURL,
          department: data.department,
          keywords: data.keywords,

        };
      });
      setSearchResults(results);
      console.log("Search results:", results); // Log the results to the console
    } catch (error) {
      console.error("Error searching manuscripts:", error);
    }finally{
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };
  if (!currentUser) {
    return <Home />;
  } else {
    if(searchResults.length  === 0){
    return (
      <>
  
    {isLoading && <LoadingModal/>}
      <div className="absolute top-0  bottom-0 -z-10  h-screen bg-black">
        <img
          src="/static/images/LiceoBG.jpg"
          className="blur-sm object-cover h-screen w-screen"
          alt="background"
        />
        <div className=" w-full  top-0 absolute flex items-center justify-center">
<div className=" h-[9rem] z-10 w-full flex items-end justify-center">
  <div className="flex items-center gap-2 border-2  rounded-xl px-2">
    <div className="flex">
<select className="bg-transparent border-2 rounded-lg p-2 text-white ">
  <option className="text-black" selected  >Select Department</option>
  <option className="text-black" value="US">United States</option>
  <option className="text-black" value="CA">Canada</option>
  <option className="text-black" >France</option>
  <option className="text-black">Germany</option>
</select>
</div>
  <div className="w-24 overflow-hidden flex items-end">
  <Typography className="px-2" color="white" variant="small">Year:
  </Typography>
  <Input variant="standard" className="h-36" color="white" placeholder="" />
  </div> 
   <div className="w-24 overflow-hidden flex items-end">
  <Typography className="px-2" color="white" variant="small">To
  </Typography>
  <Input variant="standard" className="h-36" color="white" placeholder="" />
  </div>

          <button className={`m-2 px-2 py-1 border-2 rounded-lg text-white duration-500 hover:bg-white hover:text-black hover:font-semibold`}>
            Filter
          </button>
          </div>
        </div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            className="sm:w-44 md:w-32 w-44"
            src="/static/images/libraryLogo.png"
            alt="Liceo Logo"
          />
          <label className="flex justify-center">
            <h1 className="text-gray-100 text-lg font-bold sm:text-1xl lg:text-1xl italic mt-8">
              Hi, {currentUser.displayName}
            </h1>
          </label>
          <div className="flex border-2 rounded ">
            <button onClick={handleSearch} className="hidden sm:flex items-center justify-center px-4 border-r ">
              <svg
                className="w-6 h-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                ></path>
              </svg>
            </button>
            <input
              type="text"
              className="px-3 py-2  sm:w-full md:w-60 "
              placeholder="Search Manuscript..."
              onChange={handleSearchInputChange}
              value={search}
            />
            <AdvanceSearch updatedManuscripts={updateManuscripts} />
          </div>
          <button
            onClick={() => handleSearch()}
            className={`m-2 px-2 py-1 border-2 rounded-lg ${
              search.length === 0 ? "blur-lg collapse" : "blur-0"
            } text-white duration-500`}
          >
            Search
          </button>
        </div>
      </div>
      </>
    );
  }else{
    return(
      
      <ResultsPage results={searchResults} inputSearch={search}/>
    )
  }
}
};

export default Search;
