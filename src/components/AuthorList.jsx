import React from 'react'
import AuthorCard from './AuthorCard'

const AuthorList = () => {
  return (
    // balay nina oy
    <div className='h-32 w-80 md:w-[90vh] lg:w-[140vh] overflow-x-auto'>
    <div>Authors :</div>
    <div className='flex gap-x-3'>
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