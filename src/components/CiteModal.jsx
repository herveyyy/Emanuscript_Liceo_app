import React from 'react';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import { FaXmark } from 'react-icons/fa6';

const CiteModal = ({ open, handler, manuscriptData }) => {
  if (!manuscriptData || !manuscriptData.authors) {
    return null;
  }

  let year = '';
  if (manuscriptData.yearCompleted) {
    const date = manuscriptData.yearCompleted.toDate();
    year = date.getFullYear().toString();
  }
  return (
    <Dialog open={open} handler={handler} size='lg'>
      <DialogHeader className='flex justify-between border-b-2 '>
        <p className='w-[95%]'>Cite</p>
        <div className='flex justify-center w-[5%]'>
          <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer' />
        </div>
      </DialogHeader>
      <DialogBody>
        <div className='w-full h-72 overflow-y-scroll  bg-gray-200 rounded-lg shadow-inner p-4'>
          <Typography className='font-bold'>Author(s):</Typography>
          {manuscriptData.authors.map((author, index) => (
            <Typography key={index} variant='small' className='italic'>
              {author}
            </Typography>
          ))}
          <Typography className='font-bold'>Year:</Typography>
          <Typography variant='small' className='italic'>
            {year}
          </Typography>
          <Typography className='font-bold'>Title:</Typography>
          <Typography variant='small' className='italic'>
            {manuscriptData.title}
          </Typography>
          <Typography className='font-bold'>Location:</Typography>
          <Typography variant='small' className='italic'>
            Elsa P. Pelaez Memorial Library 
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter className='flex gap-x-2'>
        <Button onClick={handler} color='red'>
          Exit
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CiteModal;
