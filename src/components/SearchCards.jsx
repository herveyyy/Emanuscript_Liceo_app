import React from 'react'
import { Card,CardHeader,Typography,Button,CardBody } from '@material-tailwind/react'
const SearchCard = ({title,department,abstract,id}) => {
  return (
    <div> 
    <Card className="md:w-[35rem] md:h-[11rem] md:max-w-[48rem]  w-80 h-24  flex-row ">
    <CardHeader
    shadow={false}
    floated={false}
    className="m-0 w-2/5 shrink-0 rounded-r-none"
    >
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      alt="card-image"
      className="h-full w-full object-cover"
    />
    </CardHeader>
    <CardBody>
    <div className="flex justify-between">
    <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
      Department
    </Typography>
    </div>
    <Typography color="blue-gray" className="mb-1 text-sm uppercase">
      Title
    </Typography>
    <Typography color="gray" className="mb-8 font-normal text-sm invisible md:visible" >
    Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
    </Typography>
    </CardBody>
    </Card></div>
  )
}

export default SearchCard