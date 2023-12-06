import React from 'react';
import AuthorCard from './AuthorCard';

const AuthorList = ({ list, dept,profilePic}) => {
  return (
    <div className='h-28 w-80 md:w-[90vh] lg:w-[150vh] overflow-x-auto'>
      <div className='flex gap-x-3'>
        {list.map((author, index) => (
          <AuthorCard key={index} name={author} dept={dept} profilePic={profilePic} />
        ))}
      </div>
    </div>
  );
}

export default AuthorList;
