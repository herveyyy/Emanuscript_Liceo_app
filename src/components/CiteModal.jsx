import React from 'react'
import {  Dialog, Typography } from '@material-tailwind/react'
const CiteModal = ({open,handler}) => {
  return (
    
        <Dialog open={open} handler={handler} size='lg'>
            <Typography>HEHE</Typography>
            
        </Dialog>
  
  )
}

export default CiteModal