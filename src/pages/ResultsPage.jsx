import React, { useState } from 'react';
import SearchCard from '../components/SearchCards';
import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import AdvanceSearch from '../components/AdvanceSearch';
import LoadingModal from '../components/Loading';
import {Navigate, Link} from "react-router-dom";
const ResultsPage = ({ results, inputSearch }) => {
  const [search, setSearch] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 9; // Number of results to display per page
  const [open, setOpen] = useState(false);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    const parsedKeywords = splitSearchQuery(query.toLowerCase());
    setKeywords(parsedKeywords);
  };

  if (searchResults.length === 0) {
    setSearchResults(results);
    setSearch(inputSearch);
  }

  const splitSearchQuery = (searchData) => {
    return searchData.split(' ').filter((keyword) => keyword.trim() !== '');
  };

  const handleSearch = async () => {
    try {
      setOpen(true);
      console.log(keywords);
      const manuscriptRef = collection(database, 'Manuscript');
      const querySnapshot = await getDocs(
        query(manuscriptRef, where('keywords', 'array-contains-any', keywords))
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
      console.log('Search results:', results);
    } catch (error) {
      console.error('Error searching manuscripts:', error);
    } finally {
      setOpen(false);
    }
  };

  const maxPage = Math.ceil(searchResults.length / resultsPerPage);

  // Calculate the indexes of the results to display based on the current page
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = searchResults.slice(indexOfFirstResult, indexOfLastResult);

  // Update the page when the current page changes
  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= maxPage) {
      setCurrentPage(pageNumber);
    }
  };

  // Render pagination links
  const renderPaginationLinks = () => {
    const pages = [];
    for (let i = 1; i <= maxPage; i++) {
      pages.push(
        <p
          key={i}
          onClick={() => paginate(i)}
          className={`text-sm font-medium leading-none cursor-pointer ${
            currentPage === i
              ? 'text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2'
              : 'text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2'
          }`}
        >
          {i}
        </p>
      );
    }
    return pages;
  };

  const showPrevious = currentPage > 1;
  const showNext = currentPage < maxPage;

  return (
    <div className="">
      {open && <LoadingModal />}
      <div className="w-full text-center pt-10 pb-12">
        <p>Searched for "{search}"</p>
        <p>Search Results ({results.length})</p>
      </div>
      <div className="mx-2 flex justify-center">
        <div className="mb-2 flex border-2 rounded w-full sm:w-full md:w-96 border-black ring-black d">
          <button
            onClick={handleSearch}
            className="flex items-center justify-center px-4 border-r border-black"
          >
            <svg
              className="w-6 h-6 text-black"
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
            className="px-3 py-2 w-96 sm:w-full md:w-96"
            placeholder="Search Manuscript..."
            onChange={handleSearchInputChange}
            value={search}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {currentResults.map((result) => (
          <Link className="hover:cursor-pointer"
     to={"/Manuscript/"+ result.docID}  >
            <SearchCard
              key={result.docID}
              title={result.title}
              abstract={result.abstract}
              frontPage={result.frontPageURL}
              keywords={result.keywords}
              department={result.department}
            />
          </Link>
        ))}
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
          <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <p
                  onClick={() => paginate(currentPage - 1)}
                  className={`text-sm ml-3 font-medium leading-none ${showPrevious ? "text-black":"text-white"}`}
                >
                  Previous
                </p>
            </div>
            <div className="sm:flex hidden">{renderPaginationLinks()}</div>
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <p
                  onClick={() => paginate(currentPage + 1)}
                  className={`text-sm font-medium leading-none mr-3 ${showNext ? "text-black":"text-white"} `}
                >
                  Next
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
