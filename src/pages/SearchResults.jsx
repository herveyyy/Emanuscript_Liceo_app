import React from 'react'
import SearchCard from '../components/SearchCards'

const SearchResults = ({results,inputSearch}) => {
    console.log(results)
  return (
        <div className=' w-full'>
        <div className='w-full text-center pt-24 pb-12'>
        <p>
        Searched for "{inputSearch}"
        </p>
        <p>
        Search Results({results.length})
            </p>
        </div>
        <div className='mx-2 flex justify-center'>
        <div className=" mb-2 flex border-2 rounded w-full sm:w-full md:w-96 border-black ring-black d">
                <button className="flex items-center justify-center px-4 border-r border-black ">
                  <svg
                    className="w-6 h-6 text-black "
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
                 
                />
              </div>
              </div>
        <div className='flex flex-wrap gap-3 justify-center '>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        </div>
        <div className='w-full '>
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p class="text-sm ml-3 font-medium leading-none ">Previous</p>                    
            </div>
            <div className="sm:flex hidden">
                <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">1</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">4</p>
                <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
            </div>
            <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                <p className="text-sm font-medium leading-none mr-3">Next</p>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
            </div>
        </div>
    </div>
        </div>
        </div>

  )
}

export default SearchResults