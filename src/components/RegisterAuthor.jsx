import React, { useState } from 'react';
import {
  DialogHeader,
  DialogFooter,
  DialogBody,
  Dialog,
  Tooltip,
  Select,
  Option,
  Button,
  Typography,
} from "@material-tailwind/react";
import { HiOutlineXMark } from 'react-icons/hi2';
import { database } from '../../firebaseConfig';
import { collection,query,where,getDocs,addDoc } from 'firebase/firestore';

const registerAsAuthor = async (userData, selectedAdviser) => {
    try {
      const authorCollectionRef = collection(database, 'Author');
        const authorDocRef = await addDoc(authorCollectionRef, {
        SchoolID: userData.schoolID,
        FirstName: userData.firstName,
        MiddleName: userData.middleName,
        LastName: userData.lastName,
        Suffix: userData.suffix,
        Gender: userData.gender,
        Birthday: userData.birthday,
        Department: userData.department,
        CourseName: userData.course,
        AdviserName: selectedAdviser,
        Address: userData.address,
        Email: userData.email,
        profilePicture: userData.profilePictureURL,
        status:"waiting",
    });
  
      alert('Author registered successfully. Document ID:', authorDocRef.id);
        
    } catch (error) {
      console.error('Error registering author:', error);
    }
  };
  
const RegisterAuthor = ({userData}) => {
    const isLargeScreen = window.innerWidth >= 1024;
  const [open, setOpen] = useState(false);
  const [adviserList, setAdviserList] = useState([]);
const [selectedAdviser, setSelectedAdviser] =useState("")
const [btnShow,setBtnShow] = useState(true)
  const fetchAdvisersData = async () => {
    try {
      const colRef = collection(database, 'Advisers');
      const q = query(colRef, where('department', '==', userData.department));
      const querySnapshot = await getDocs(q);
  
      // Use map to transform the data
      const advisersData = querySnapshot.docs.map((doc) => doc.data());
  
      // Set the transformed data to the adviserList state
      setAdviserList(advisersData);
  
      console.log(advisersData);
    } catch (error) {
      console.error('Error fetching advisers data:', error);
    }
  };
const handleOpen = () =>{
    setOpen(true);
    fetchAdvisersData();
}
const handleRegister = async () => {
    try {
        
    
    if(!selectedAdviser || selectedAdviser == "") {
        alert("Please select an Adviser.")
        return 
    }
    // Check if the school ID already exists in the Author collection
    const authorCollectionRef = collection(database, 'Author');
    const q = query(authorCollectionRef, where('SchoolID', '==', userData.schoolID));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      // School ID already exists, display an error message or take appropriate action
      alert('School ID already exists. You cannot request again.');
      setOpen(false);
      setBtnShow(false)
      return;
    }
    // School ID does not exist, proceed with the registration
    await registerAsAuthor(userData, selectedAdviser);
    setOpen(false);
    setBtnShow(false)

} catch (error) {
        console.log(error)
}
  };
if(!userData){
    return null
}
  return (
    <>
     {btnShow && <Tooltip content="Become a Author">
        <button
          onClick={handleOpen}
          className="border-red-800 border rounded-3xl p-2 font-bold text-gray-800 hover:bg-red-700 hover:text-white duration-700"
        >
          Become a Author
        </button>
      </Tooltip>} 
      <Dialog
        size={`${isLargeScreen ? "xl" : "xxl"}`}
        open={open}
        handler={() => setOpen(false)}
       
      >
        <DialogHeader>
          <div className='flex items-center w-full justify-between'>
            <div className='w-full flex items-center gap-x-2'>Author Registration</div>
            <div className='flex justify-end w-1/6'>
              <button
                className=''
                onClick={() => setOpen(false)}
              >
                <HiOutlineXMark />
              </button>
            </div>
          </div>
        </DialogHeader>
<DialogBody className='overflow-y-scroll ' divider >
    
  <div className='w-full flex flex-wrap px-2 gap-2'>
  <div className='lg:border overflow-hidden w-full lg:w-1/4 lg:h-64 h-32 flex justify-center items-center '>
    <div className='overflow-hidden w-32 h-32 lg:w-[75%] lg:h-[75%] border lg:border-0 flex justify-center items-center  '>
    <img src={userData.profilePictureURL} className='object-cover'/>
    </div>
  </div>
  <div className='lg:w-[74%] w-full'>
    <div className='w-full border p-2 bg-gray-50 shadow-xl'>
      
        <Typography className='text-center lg:text-left'><p className='font-bold'>SchoolID:</p>{userData.schoolID}</Typography>
        <Typography className='text-center lg:text-left'>
  <p className='font-bold'>Name:</p> 
  {userData.firstName} 
  {userData.middleName && ` ${userData.middleName.charAt(0)}.`} 
  {userData.lastName} 
  {userData.suffix && ` ${userData.suffix}`}
</Typography>        <Typography className='text-center lg:text-left'><p className='font-bold'>Gender:</p> {userData.gender}</Typography>
        <Typography className='text-center lg:text-left'><p className='font-bold'>Birthday:</p>{userData.birthday}</Typography>
        <Typography className='text-center lg:text-left'><p className='font-bold'>Department:</p>{userData.department}</Typography>
        <Typography className='text-center lg:text-left'><p className='font-bold'>Course:</p>{userData.course}</Typography>
        <Typography className='text-center lg:text-left'>
  <p className='font-bold'>Adviser:</p>
  <Select variant='standard' value={selectedAdviser} onChange={(e) => setSelectedAdviser(e)}>
  {adviserList.map((adviser, index) => (
    <Option key={index} value={adviser.firstName + " " + (adviser.middleName ? adviser.middleName.charAt(0) + ". " : "") + adviser.lastName + " " + adviser.suffix}>
      {adviser.firstName + " " + (adviser.middleName ? adviser.middleName.charAt(0) + ". " : "") + adviser.lastName + " " + adviser.suffix}
    </Option>
  ))}
</Select>

</Typography>
        <Typography className='text-center lg:text-left'><p className='font-bold'>Address:</p>{userData.address}</Typography>
        <Typography className='text-center lg:text-left'><p className='font-bold'>Email Address:</p>{userData.email}</Typography>


    </div>
  </div>
  </div>

</DialogBody>

        <DialogFooter className='flex justify-center gap-2'>
          <Button size='sm'
            onClick={handleRegister}
          >Register
           </Button>
           <Button size='sm'
           color='red'
           onClick={() => setOpen(false)}
          > Cancel
           </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default RegisterAuthor;
