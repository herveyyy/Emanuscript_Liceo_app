import React from 'react';

const AuthorCard = ({name,id,dept}) => {
  return (
    <div className=' w-80 h-20 rounded-2xl flex shadow-lg border-r-[1px]'>
      <div className=' w-20 h-20 rounded-r-full overflow-hidden shadow-lg' >
        <img src='/static/images/student.png' className=' w-full h-full object-cover'/>
      </div>
      <div className='w-60 h-20 bg-gray-100 flex items-center'>
        <div>
          <p>{name}</p>
          <p className='text-sm'>{dept}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
