import React from 'react'
import { Card,CardHeader,Typography,Button,CardBody } from '@material-tailwind/react'
import { database } from '../../firebaseConfig';
import { collection,doc,deleteDoc } from 'firebase/firestore';
import { CiBookmarkMinus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const BookmarkCard = ({title,department,abstract,id,frontPage,manuscriptID}) => {
 const navigate  = useNavigate("")
  const maxAbstractLength = 200;
  // Truncate the abstract if it exceeds the maximum length
  const truncatedAbstract =
    abstract.length > maxAbstractLength
      ? abstract.substring(0, maxAbstractLength) + '...'
      : abstract;

      const handleRemove = () => {
        console.log('remove', id);
        removeData(id);

      };
      const handleCardLink = () => {
        navigate("/Manuscript/" + manuscriptID)

    }
      const removeData = async (id) => {
        try {
          // Reference to the document
          const docRef = doc(collection(database, 'Bookmark'), id);
    
          // Delete the document
          await deleteDoc(docRef);
          window.location.reload()
        } catch (error) {
          console.error('Error removing document: ', error);
        }
      };
  return (
    <div className='flex relative overflow-hidden shadow-lg' > 
    <Card 
    onClick={handleCardLink}
    className="md:w-[35rem] md:h-[11rem] md:max-w-[48rem]  w-[18rem] h-24  flex-row ">

    <CardHeader
    shadow={false}
    floated={false}
    className="m-0 w-[20%] shrink-0 rounded-r-none"
    >
    <img
      src={frontPage}
      alt="card-image"
      className="h-full w-full object-center"
    />
  
    </CardHeader>
    <CardBody>
    <div className="flex justify-between items-center">
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

    </Card>
    <div className='w-[104%] md:w-full h-12 items-center absolute flex justify-end'>
      <Button size={"sm"} variant='text' onClick={handleRemove}>
    <CiBookmarkMinus className='w-6 h-6 text-red-700' />
    </Button>
    </div>
    
         
    </div>
  )
}

export default BookmarkCard