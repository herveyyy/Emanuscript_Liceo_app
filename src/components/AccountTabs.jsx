import React from 'react'
import { Button, Typography } from '@material-tailwind/react'
import { Link } from "react-router-dom";

const AccountTabs = () => {
  return (
    <div className="bg-red-900 rounded-md">
    <ul className="flex justify-evenly cursor-pointer">
      <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
        <Link to='/AccountSettings'>
            <Button variant='text' size='sm' className='text-white'>
            Account
            </Button>
            </Link>
      </Typography>
      <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
        <Link to='/AccountSettings/Bookmark'>
            <Button variant='text' size='sm' className='text-white'>
            Bookmark
            </Button>
            </Link>
      </Typography>
      <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
      
      <Link to="/AccountSettings/Rated">
        <Button variant='text' size='sm' className='text-white'>
        Rated
        </Button>
      
      </Link> 
      </Typography>
      <Typography as='li' className='mx-9 text-lg py-1 hover:bg-gray-600 hover:rounded-lg hover:px-1 hover:py-1' color='white'>
      <Link to="/AccountSettings/History">
        <Button variant='text' size='sm' className='text-white'>
        History
        </Button>
      </Link> 
      </Typography>
    </ul>
</div>
  )
}

export default AccountTabs