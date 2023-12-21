import React, { useState, useEffect, useMemo } from 'react';
import { IconButton, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import { FaXmark, FaPlus,FaMinus,FaEquals } from 'react-icons/fa6';
import { Document, Page } from 'react-pdf';
import LoadingModal from './Loading';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const ViewerPDF = ({ open, handler, docURL, title }) => {
  const [numPages, setNumPages] = useState();
  const loadedDocURL = useMemo(() => docURL, [docURL]);

  useEffect(() => {
    // Additional logic can be added here if needed
  }, [loadedDocURL]);
  return (
    <Dialog open={open} size='xxl' className='relative'>
      <DialogHeader className='flex justify-between border-b-2 '>
        <p className='w-full'>Read</p>
        <div className='flex justify-center w-[5%]'>
          <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer' />
        </div>
      </DialogHeader>
      <DialogBody className='w-full flex justify-center overflow-y-scroll'>
        {loadedDocURL && (
          <Document
    file={loadedDocURL}
    onLoadSuccess={({ numPages })=>setNumPages(numPages)}
>
    {Array.apply(null, Array(numPages))
    .map((x, i)=>i+1)
    .map(page => <Page pageNumber={page}/>)}
</Document>
        )}
      </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
        <Typography>Total Pages: {numPages}</Typography>
      </DialogFooter>
    </Dialog>
  );
};

export default ViewerPDF;
