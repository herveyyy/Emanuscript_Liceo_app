import React from 'react'
import { useParams } from "react-router-dom";
import AuthorList from '../components/AuthorList';
const Manuscript = () => {
    const { id } = useParams();

  return (
  <div className='w-full'>
    <div>ManuscriptID: {id}</div>
    {/* Picture and Title and bookmark Icon */}
    <div className='w-full mb-2'>
    <div className='flex w-full px-12 h-80 gap-x-4 gap-y-1 flex-wrap justify-center'>
      <div className='lg:w-[30%] w-full bg-red-300'>1</div>
      <div className='lg:w-[65%] w-full bg-green-200'>2</div>
    </div>
    </div>
    {/* The 4 buttons */}
    <div className='w-full mb-4'>
    <div className='px-12'>
      <div className=' w-full flex flex-wrap gap-x-2 justify-center md:justify-end '>
        <div className='h-16 bg-red-200 flex items-center'>
          <button className='p-1 px-8 bg-white'>1</button>
        </div>
        <div className='h-16 bg-blue-200 flex items-center'>
          <button className='p-1 px-8 bg-white'>2</button>
        </div>
        <div className='h-16 bg-green-200 flex items-center'>
          <button className='p-1 px-8 bg-white'>3</button>
        </div>
        <div className='h-16 bg-pink-200 flex items-center'>
          <button className='p-1 px-8 bg-white'>4</button>
        </div>
      </div>
    </div>
    </div>
    <div className='w-full mb-4'>
    <div className='px-12'>
      <AuthorList/>
      </div>
    </div>
    </div>
  )
}

export default Manuscript