import React, { useState, useEffect } from 'react';
import manuscript from '../data/manuscriptData';
import ManuscriptItem from './ManuscriptItem';
import { database } from '../../firebaseConfig';
import { collection, getDocs, orderBy, limit, query } from 'firebase/firestore';

function ManuscriptComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(manuscript.length / itemsPerPage);
  const [latestManuscript, setLatestManuscript] = useState([]);

  useEffect(() => {
    const getLatestManuscript = async () => {
      try {
        const getRef = collection(database, 'Manuscript');
        const snapshot = await getDocs(query(getRef, orderBy('date', 'desc'), limit(10)));

        // Extract data from the documents in the snapshot
        const results = snapshot.docs.map((doc) => ({
          docID: doc.id,
          frontPageURL: doc.data().frontPageURL,
          title: doc.data().title,
          course: doc.data().course,
          department: doc.data().department,
        }));
        setLatestManuscript(results);

        // Log the latest data after it's set
        console.log(results);
      } catch (error) {
        // Handle any errors that might occur during the data fetching
        console.error('Error fetching latest manuscripts:', error);
      }
    };
    // Call the function to fetch latest manuscripts
    getLatestManuscript();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return latestManuscript.slice(startIndex, endIndex);
  };

  const getPageButtons = () => {
    const pageButtons = [];
    const maxButtons = 5;
    const maxPagesBeforeCurrent = Math.floor(maxButtons / 2);
    const maxPagesAfterCurrent = Math.ceil(maxButtons / 2) - 1;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxButtons) {
      if (currentPage > maxPagesBeforeCurrent) {
        startPage = currentPage - maxPagesBeforeCurrent;
        endPage = currentPage + maxPagesAfterCurrent;
        if (endPage > totalPages) {
          endPage = totalPages;
          startPage = endPage - maxButtons + 1;
        }
      } else {
        endPage = maxButtons;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`mx-1 px-2 rounded ${
            currentPage === i ? 'bg-black text-white font-bold' : 'border-2 border-black'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (totalPages > maxButtons) {
      if (currentPage > maxPagesBeforeCurrent + 1) {
        pageButtons.unshift(
          <button
            key="previous"
            className="mx-1 px-2 py-1 rounded "
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &#60;
          </button>
        );
      }

      if (currentPage < totalPages - maxPagesAfterCurrent) {
        pageButtons.push(
          <button
            key="next"
            className="mx-1 px-2 py-1 rounded "
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &#62;
          </button>
        );
      }
    }

    return pageButtons;
  };
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className=" border-y-2 py-2 text-2xl lg:text-4xl text-center px-2 justify-center duration-700 flex-wrap">
        <span className="md:w-80% py-5 text-white bg-maroon-900 px-6 rounded-xl mt-1 flex justify-center uppercase">
          NEWLY ADDED MANUSCRIPTS
        </span>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {getPageItems().map((doc, index) => (
            <ManuscriptItem
            docID={doc.docID}
              key={index}
              imgUrl={doc.frontPageURL}
              title={doc.title}
              course={doc.course}
              department={doc.department}
            />
         ) )}
         {getPageItems().map((doc, index) => (
            <ManuscriptItem
            docID={doc.docID}
              key={index}
              imgUrl={doc.frontPageURL}
              title={doc.title}
              course={doc.course}
              department={doc.department}
            />
         ) )}

        </div>
      </div>
      <div className="z-99 flex justify-center md:justify-end my-4">{getPageButtons()}</div>
    </div>
  );
  
  
  
  
  
}

export default ManuscriptComponent;
