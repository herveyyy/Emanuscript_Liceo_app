import React from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import {FaXmark,FaCopy} from "react-icons/fa6"
const CiteModal = ({open,handler}) => {
  return (
    
        <Dialog open={open} handler={handler} size='lg'>
          <DialogHeader className='flex justify-between border-b-2 '>
            <p className='w-[95%]'>Cite</p>
            <div className='flex justify-center w-[5%]'>
              <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
            </div>
          </DialogHeader>
          <DialogBody>
            s
          </DialogBody>
            <DialogFooter className='flex gap-x-2'>
              <Button className='flex items-center gap-x-2' color='blue'>
             <FaCopy></FaCopy> Copy</Button>
              <Button onClick={handler} color='red'>Cancel</Button>
            </DialogFooter>
        </Dialog>
  
  )
}

export default CiteModal