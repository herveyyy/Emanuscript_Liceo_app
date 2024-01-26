import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../data/userData";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import AdvanceSearch from "../components/AdvanceSearch";
import { Input, Select, Typography, Option } from "@material-tailwind/react";
import colleges from "../colleges";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
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
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const collegeNames = Object.keys(colleges["List of Colleges"]);
  const handleFromYearChange = (event) => {
    const input = event.target.value;

    // Check if input is a number and has 4 digits
    if (/^\d{0,4}$/.test(input)) {
      setFromYear(input);
    }
  };

  const handleToYearChange = (event) => {
    const input = event.target.value;

    // Check if input is a number and has 4 digits
    if (/^\d{0,4}$/.test(input)) {
      setToYear(input);
    }
  };
  const updateManuscripts = (newManuscripts) => {
    setSearchResults(newManuscripts);
  };
  const handleFilterSearch = async () => {
    console.log("selectedDepartment: ", selectedDepartment);
    console.log("fromYear: ", fromYear);
    console.log("toYear: ", toYear);
    if (selectedDepartment == "" && fromYear == "" && toYear == "") {
      return alert("Please fill if you want to use that function. :))))");
    }
    if (Number(fromYear) > Number(toYear)) {
      setFromYear("");
      setToYear("");
      return alert("Please fill the date properly");
    }
    const manuscriptData = await fetchManuscriptData();
    setSearchResults(manuscriptData);
    console.log(searchResults, "result");
  };
  const fetchManuscriptData = async () => {
    try {
      const db = database;
      const manuscriptCollection = collection(db, "Manuscript");
      let manuscriptQuery = query(manuscriptCollection);

      if (fromYear && toYear && selectedDepartment) {
        console.log("dunno");
        const fromYearTimestamp = Timestamp.fromDate(
          new Date(`${fromYear}-01-01`)
        );
        const toYearTimestamp = Timestamp.fromDate(new Date(`${toYear}-12-31`));
        manuscriptQuery = query(
          manuscriptCollection,
          where("yearCompleted", ">=", fromYearTimestamp),
          where("yearCompleted", "<=", toYearTimestamp),
          where("department", "==", selectedDepartment)
        );
      }
      if (selectedDepartment) {
        manuscriptQuery = query(
          manuscriptCollection,
          where("department", "==", selectedDepartment)
        );
      }
      if (fromYear && toYear) {
        const fromYearTimestamp = Timestamp.fromDate(
          new Date(`${fromYear}-01-01`)
        );
        const toYearTimestamp = Timestamp.fromDate(new Date(`${toYear}-12-31`));
        manuscriptQuery = query(
          manuscriptCollection,
          where("yearCompleted", ">=", fromYearTimestamp),
          where("yearCompleted", "<=", toYearTimestamp)
        );
      }

      const querySnapshot = await getDocs(manuscriptQuery);
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
      return results;
    } catch (error) {
      console.error("Error fetching manuscript data:", error);
    }
  };

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
      setIsLoading(true);
      console.log(keywords);
      const manuscriptRef = collection(database, "Manuscript");
      if (search) {
        const searchQuery = query(
          manuscriptRef,
          where("title", ">=", search.toUpperCase())
        );
        const querySnapshot = await getDocs(searchQuery);
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
      }

      if (keywords.length > 2) {
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
      }

      console.log("Search results:", results); // Log the results to the console
    } catch (error) {
      console.error("Error searching manuscripts:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };
  if (!currentUser) {
    return <Home />;
  } else {
    if (searchResults.length === 0) {
      return (
        <>
          {isLoading && <LoadingModal />}
          <div className="absolute top-0  bottom-0 -z-10  h-screen bg-black">
            <img
              src="/static/images/LiceoBG.jpg"
              className="blur-sm object-cover h-screen w-screen"
              alt="background"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Typography
                variant="h1"
                color="white"
                className="lg:text-8xl md:text-6xl italic uppercase"
              >
                E-Manuscript
              </Typography>
              <Typography color="white" className="mt-2 italic">
                DIGITAL ARCHIVAL PLATFORM FOR ACCESSING UNPUBLISHED STUDENT
                RESEARCH MANUSCRIPT{" "}
              </Typography>
              <div className="hidden w-full  md:flex items-center justify-center">
                <div className=" my-2 z-10 w-full flex items-end justify-center ">
                  <div className="flex items-center gap-2  bg-maroon-700 rounded-xl px-2 ">
                    <div className="flex">
                      <select
                        className="bg-transparent   rounded-lg p-2 text-white
                         w-52 overflow-hidden"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                      >
                        <option className="text-black" selected>
                          Select Department
                        </option>
                        {collegeNames.map((college, index) => (
                          <option
                            className="text-black"
                            key={index}
                            value={college}
                          >
                            {college}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="w-24 overflow-hidden flex items-end">
                      <Typography
                        className="px-2"
                        color="white"
                        variant="small"
                      >
                        Year:
                      </Typography>
                      <Input
                        variant="standard"
                        className="h-36"
                        color="white"
                        placeholder=""
                        value={fromYear}
                        onChange={handleFromYearChange}
                      />
                    </div>
                    <div className="w-24 overflow-hidden flex items-end">
                      <Typography
                        className="px-2"
                        color="white"
                        variant="small"
                      >
                        To
                      </Typography>
                      <Input
                        variant="standard"
                        className="h-36"
                        color="white"
                        placeholder=""
                        value={toYear}
                        onChange={handleToYearChange}
                      />
                    </div>
                    <button
                      onClick={handleFilterSearch}
                      className={`m-2 px-2 py-1 border-2 rounded-lg text-white duration-500 hover:bg-white hover:text-black hover:font-semibold`}
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              <label className="flex justify-center">
                <h1 className="text-white text-lg font-bold sm:text-1xl lg:text-1xl italic mt-8">
                  Hi, {currentUser.displayName}
                </h1>
              </label>
              <div className="flex border-2 rounded ">
                <button
                  onClick={handleSearch}
                  className="hidden sm:flex items-center justify-center px-4 border-r "
                >
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                  </svg>
                </button>
                <input
                  type="text"
                  className="px-3 py-2  sm:w-full md:w-60 "
                  placeholder="Search Manuscript..."
                  onChange={handleSearchInputChange}
                  value={search}
                />
                <AdvanceSearch
                  className=""
                  updatedManuscripts={updateManuscripts}
                />
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
    } else {
      return <ResultsPage results={searchResults} inputSearch={search} />;
    }
  }
};

export default Search;
