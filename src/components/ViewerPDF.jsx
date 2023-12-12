import React, { useState, useEffect } from 'react';
import { Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { FaXmark } from 'react-icons/fa6';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
const ViewerPDF = ({ open, handler, docURL, title }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [loadedDocURL, setLoadedDocURL] = useState(null);

  useEffect(() => {
    if (docURL && !loadedDocURL) {
      setLoadedDocURL(docURL);
    }
   
  }, [docURL, loadedDocURL]);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Dialog open={open} size='xxl'>
      <DialogHeader className='flex justify-between border-b-2 '>
        <p className='w-full'>Read</p>
        <div className='flex justify-center w-[5%]'>
          <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer' />
        </div>
      </DialogHeader>
      <DialogBody className=' w-full flex justify-center overflow-y-scroll'>
          {loadedDocURL && (
            <Document file={loadedDocURL} onLoadSuccess={onDocumentLoadSuccess}>
             {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page  className="w-full"
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
            </Document>
          )}
      </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
                  {loadedDocURL && (
            <p>
              Page {pageNumber} of {numPages}
            </p>
          )}</DialogFooter>
    </Dialog>
  );
};

export default ViewerPDF;
