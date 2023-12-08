import React from 'react'
import { Typography, Card, CardHeader,CardBody, Button, Rating } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
const RatedCards = ({title,department,abstract,id,frontPage,rate}) => {
     const maxAbstractLength = 200;
    const navigate  = useNavigate("")
    // Truncate the abstract if it exceeds the maximum length
    const truncatedAbstract =
      abstract.length > maxAbstractLength
        ? abstract.substring(0, maxAbstractLength) + '...'
        : abstract;
    const handleCardLink = () => {
        navigate("/Manuscript/" + id)

    }
  return (
    <Card onClick={handleCardLink} className="w-full md:w-[35rem] h-auto md:h-[14rem]  flex-row overflow-hidden shadow-lg">
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
        <img
          src={frontPage}
          alt="card-image"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <Rating readonly value={rate} className="flex md:hidden" unratedColor="amber" ratedColor="amber" />
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          {department}
        </Typography>
        <Rating readonly value={rate} className="hidden md:flex" unratedColor="amber" ratedColor="amber" />
        </div>
        <Typography color="blue-gray" className="mb-1 text-sm uppercase">
            {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-sm hidden md:flex">
        {truncatedAbstract}
        </Typography>
        </CardBody>
        </Card>
  )
}

export default RatedCards