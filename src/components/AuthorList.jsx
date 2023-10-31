import React from 'react'
import AuthorCard from './AuthorCard'

const AuthorList = () => {
  return (
    // balay nina oy
    <div className='h-28 w-80 md:w-[90vh] lg:w-[150vh] overflow-x-auto'>
    <div className='flex gap-x-3 '>
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
    </div>
</div>

  )
}

export default AuthorList