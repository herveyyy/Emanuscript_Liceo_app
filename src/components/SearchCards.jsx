import React from 'react'
import { Card,CardHeader,Typography,Button,CardBody } from '@material-tailwind/react'
const SearchCard = ({title,department,abstract,id,frontPage}) => {
  const maxAbstractLength = 200;

  // Truncate the abstract if it exceeds the maximum length
  const truncatedAbstract =
    abstract.length > maxAbstractLength
      ? abstract.substring(0, maxAbstractLength) + '...'
      : abstract;

  return (
    <div> 
    <Card className="md:w-[35rem] md:h-[11rem] md:max-w-[48rem]  w-80 h-24  flex-row ">
    <CardHeader
    shadow={false}
    floated={false}
    className="m-0 w-[20%] shrink-0 rounded-r-none"
    >
    <img
      src={frontPage}
      alt="card-image"
      className="h-full w-full object-cover"
    />
    </CardHeader>
    <CardBody>
    <div className="flex justify-between">
    <Typography color="gray" className="mb-1 uppercase text-xs -top-1 ">
      {department}
    </Typography>
    </div>
    <Typography color="blue-gray" className="mb-1 text-sm uppercase hover:underline">
      {title}
    </Typography>
    <Typography color="gray" className="mb-8 font-normal text-sm invisible md:visible" >
    {truncatedAbstract}
    </Typography>
    </CardBody>
    </Card></div>
  )
}

export default SearchCard