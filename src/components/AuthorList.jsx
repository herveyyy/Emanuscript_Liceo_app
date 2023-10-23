import React from 'react'
import AuthorCard from './AuthorCard'

const AuthorList = () => {
  return (
    // balay nina oy
    <div className=' h-32 w-[90vh] '>
        <div>Authors :</div>
        <div className='flex gap-x-3 overflow-x-scroll absolute'>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        </div>
        
    </div>
  )
}

export default AuthorList