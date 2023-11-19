import React, { useState } from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography, Rating } from '@material-tailwind/react'
import {FaXmark} from "react-icons/fa6"
import { addDoc, collection, serverTimestamp ,where,query,getDocs} from 'firebase/firestore';
import { database } from '../../firebaseConfig';
const RateModal = ({open,handler,manuscriptData,userData}) => {
const [rating, setRating] = useState(1);
  const handleBTN = () => {
    console.log("The users rating is ",rating)
    rateManuscript(manuscriptData.id,manuscriptData.location,manuscriptData.title,rating, userData.uid,userData.displayName,manuscriptData.frontPageURL,manuscriptData.abstract, manuscriptData.department)
  }
  const rateManuscript = async (manuscriptId, manuscriptLocation, manuscriptName, rating, userId, userName,frontPageURL,abstract,department) => {
    try {
      const ratingsCollectionRef = collection(database, 'Ratings');
  
      // Check if the user has already rated the manuscript
      const existingRatingQuery = query(
        ratingsCollectionRef,
        where('ManuscriptID', '==', manuscriptId),
        where('UserID', '==', userId)
      );
  
      const existingRatingSnapshot = await getDocs(existingRatingQuery);
  
      // If the user has already rated the manuscript, don't allow another rating
      if (existingRatingSnapshot.size > 0) {
        alert('You have already rated this manuscript.');
        return;
      }
  
      const ratingData = {
        Date: serverTimestamp(),
        ManuscriptID: manuscriptId,
        ManuscriptLocation: manuscriptLocation,
        ManuscriptName: manuscriptName,
        Rating: rating,
        UserID: userId,
        UserName: userName,
        Abstract: abstract,
        ManuscriptPicture: frontPageURL,
        ManuscriptDepartment: department,
      };
  
      // Add the rating data to the 'Ratings' collection
      const docRef = await addDoc(ratingsCollectionRef, ratingData);
  
      console.log('Rating added with ID: ', docRef.id);
      setRating(0);
      handler(!open);
    } catch (error) {
      console.error('Error adding rating: ', error);
      handler(!open);
    }
  };
  
return (
    <Dialog open={open}  size={'xs'}>
    <DialogHeader className='flex justify-between border-b-2 items-baseline'>
      <div>
      <p className='w-[95%]'>Rate</p>
      <p className='text-xs italic text-gray-600'>{manuscriptData.id}</p>
      </div>
      <div className='flex justify-center w-[5%]'>
        <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
      </div>
    </DialogHeader>
    <DialogBody className='w-full'>
         <Typography className='flex justify-center w-full'>{manuscriptData.title}</Typography> 
         <div className='flex justify-center w-full'> 
         <Rating value={rating} onChange={(e) => setRating(e)} />
      </div>
    </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
        <Button color='amber' onClick={handleBTN}>Rate</Button>
        <Button onClick={handler} color='red'>Cancel</Button>
      </DialogFooter>
  </Dialog>
  )
}

export default RateModal