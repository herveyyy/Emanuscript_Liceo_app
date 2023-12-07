import React,{useState,useEffect} from 'react'
import {  Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Select, Typography,Option } from '@material-tailwind/react'
import {FaXmark} from "react-icons/fa6";
import { database } from '../../firebaseConfig';
import { collection,doc,getDoc,addDoc ,serverTimestamp} from 'firebase/firestore';

const ReadModal = ({open,handler,userData}) => {
  const [user, setUser] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("")
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (userData) { 
          const userRef = doc(database, "Users", userData.uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            setUser(userDoc.data());
            console.log(user);
          } else {
            console.log("User not found!");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, [userData]); 

  const requestReadOnSite = async () => {
    try {
      const colRef = collection(database, "BorrowManuscriptRequest")
      const requestData = {
        Date: serverTimestamp(),
        ManuscriptLocation: selectedLocation,
        UserID: userData.uid,
        UserEmail: userData.email,
        UserName: userData.displayName,
        Department: user.department,
        status: "request"
      };
      const docRef = await  addDoc(colRef, requestData);

    } catch (error) {
      console.log(error)
    }finally{
      alert("Request Send Successfully")
      handler()
    }
    console.log("UserID",userData.uid,"\n","UserName",userData.displayName,"\n","Location", selectedLocation)

  }
  if (!userData) {
    return null; 
  }
  return (
    <Dialog open={open}  size='xl'>
    <DialogHeader className='flex justify-between border-b-2 '>
      <p className='w-[95%]'>Read</p>
      <div className='flex justify-center w-[5%]'>
        <FaXmark onClick={handler} className='h-5 w-5 hover:cursor-pointer'/>
      </div>
    </DialogHeader>
    <DialogBody>
    <div className='w-full h-full '>
    <Typography>userID: {userData.uid}</Typography>
    <div className='flex w-full justify-center'>
     
      <div className='rounded-full border-2 w-36 h-36 overflow-hidden'>
        <img className='object-cover w-full  h-full ' src={userData.photoURL} />
        </div>
    </div>
    <div className='flex flex-wrap gap-4'>
      <Select value={selectedLocation} onChange={(e) => setSelectedLocation(e)} label='Location'>
<Option value='Main Campus'>Main Campus</Option>
<Option value='RNP Campus'>RNP Campus</Option>
<Option value='Paseo del Reo Campus'>Paseo del Reo Campus</Option>
      </Select>
    <Input label='Username'value={userData.displayName} variant='standard'  readOnly/>
    <Input label='Email'value={user.email} variant='standard'  readOnly/>
    <Input label='Deparment'value={user.department} variant='standard' readOnly/>

    </div>
    </div>
    </DialogBody>
      <DialogFooter className='flex gap-x-2 justify-center'>
      <Button onClick={requestReadOnSite} color='blue'>Request</Button>
        <Button onClick={handler} color='red'>Close</Button>
      </DialogFooter>
  </Dialog>
  )
}

export default ReadModal