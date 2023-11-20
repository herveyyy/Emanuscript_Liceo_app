import React from 'react'
import { Card,CardHeader,CardBody,Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
const HistoryCard = ({title,department,abstract,id,frontPage, manuscriptID}) => {
    const maxAbstractLength = 200
    const navigate = useNavigate("")
    const truncatedAbstract =
    abstract.length > maxAbstractLength
      ? abstract.substring(0, maxAbstractLength) + '...'
      : abstract;
      const handleCardLink = () => {
        navigate("/Manuscript/" + manuscriptID)

    }
  return (
<Card onClick={handleCardLink} className="w-full md:w-[35rem] h-auto md:h-[14rem]  flex-row">
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
        <div className="flex justify-between">
        <Typography color="gray" className="mb-1 uppercase text-xs -top-1">
          {department}
        </Typography>
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

export default HistoryCard