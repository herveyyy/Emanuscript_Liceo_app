import React, { useState } from 'react';
import manuscript from '../data/manuscriptData';
import ManuscriptItem from './ManuscriptItem';

function ManuscriptComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(manuscript.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return manuscript.slice(startIndex, endIndex);
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

    <div className='flex-wrap '>
        <div className=''>
    <div className="flex flex-col md:flex-row items-center justify-center relative">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {getPageItems().map((project, index) => (
        <ManuscriptItem
          key={index}
          imgUrl={project.imgUrl}
          title={project.title}
          stack={project.stack}
          link={project.link}
        />
      ))}
    </div>
    
  </div>
  </div>
   <div className=" flex justify-center md:justify-end my-4 ">
      {getPageButtons()}
    </div>
</div>
  );
}

export default ManuscriptComponent;