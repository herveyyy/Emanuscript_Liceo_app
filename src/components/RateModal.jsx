import React, { useState } from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography, Rating } from '@material-tailwind/react'
import {FaXmark} from "react-icons/fa6"
const RateModal = ({open,handler}) => {
const [rating, setRating] = useState(1);
  const handleBTN = () => {
    console.log("The users rating is ",rating)
    setRating(0)
    handler(!open)
  }
return (
    <Dialog open={open}  size={'xs'}>
    <DialogHeader className='flex justify-between border-b-2 '>
      <p className='w-[95%]'>Rate</p>
      <div className='flex justify-center w-[5%]'>
        <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
      </div>
    </DialogHeader>
    <DialogBody className='flex w-full justify-center'>
      <Rating value={rating} onChange={(e) => setRating(e)} />
    </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
        <Button color='amber' onClick={handleBTN}>Rate</Button>
        <Button onClick={handler} color='red'>Cancel</Button>
      </DialogFooter>
  </Dialog>
  )
}

export default RateModal