import React from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import {FaXmark} from "react-icons/fa6"
const ReadModal = ({open,handler}) => {
  return (
    <Dialog open={open}  size='xxl'>
    <DialogHeader className='flex justify-between border-b-2 '>
      <p className='w-[95%]'>Read</p>
      <div className='flex justify-center w-[5%]'>
        <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
      </div>
    </DialogHeader>
    <DialogBody>
      s
    </DialogBody>
      <DialogFooter className='flex gap-x-2'>
        <Button onClick={handler} color='red'>Close</Button>
      </DialogFooter>
  </Dialog>
  )
}

export default ReadModal