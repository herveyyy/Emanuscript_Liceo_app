import React,{useState} from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
import {FaXmark} from "react-icons/fa6"
import { Document, Page } from 'react-pdf';
import pdf from '../data/1-converted.pdf'
const ReadModal = ({open,handler}) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  
  return (
    <Dialog open={open}  size='xxl'>
    <DialogHeader className='flex justify-between border-b-2 '>
      <p className='w-[95%]'>Read</p>
      <div className='flex justify-center w-[5%]'>
        <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
      </div>
    </DialogHeader>
    <DialogBody>
    <div>
      <img />
      <Document file="/static/images/1-converted.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    </DialogBody>
      <DialogFooter className='flex gap-x-2'>
        <Button onClick={handler} color='red'>Close</Button>
      </DialogFooter>
  </Dialog>
  )
}

export default ReadModal