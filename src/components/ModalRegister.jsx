import React, { useState,useEffect } from "react";
import {
  Avatar,
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Select,
  Option,
  Radio,
} from "@material-tailwind/react";
import Datepicker from "react-tailwindcss-datepicker"; 
import {BsGoogle} from 'react-icons/bs'
import { database } from "../../firebaseConfig";
import { collection,addDoc,updateDoc,doc } from "firebase/firestore";
import colleges from "../colleges";
const ModalRegister = ({user,userNew}) => {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedSuffix, setSelectedSuffix] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYearLevel, setSelectedYearLevel] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [schoolID,setSchoolID] = useState("")
  const [selectedType, setSelectedType] =useState("student")
  const collegeNames = Object.keys(colleges["List of Colleges"]);
  const courses = colleges["List of Colleges"][selectedDepartment] || [];

  const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 

    const collectUserData = () => {
      const userData = {
       firstName: firstName,
       middleName: middleName,
       lastName: lastName,
        suffix: selectedSuffix,
        department: selectedDepartment,
        course: selectedCourse,
        yearLevel: selectedYearLevel,
        address: address,
        gender: gender === "Other" ? customGender : gender,
        schoolID: schoolID,
        userType: selectedType,
        birthday: value.startDate,
        status: "online",
        
        
        // Add other user data fields as needed
      };
      console.log("User Data:", userData); // Add this line for debugging
      return userData;
    };
    useEffect(() => {

    }, [])
    
    const handleRegister = async () => {
      try {
      const userData = collectUserData(); // Collect user data
      // Check if any of the required fields are empty
      if (!userData) {
        window.alert("Please fill out all required fields.");
      }else{
        if(
          !firstName || !middleName || !lastName || !schoolID || !address 
          || !(gender + customGender) || !selectedType
        ){
          window.alert("Please fill out all required fields.",(gender + customGender));
        }else{
 // Get a reference to the "Users" collection in Firestore
 const userCollectionRef = doc(database, "Users",user.uid);
 // Add the user data to the Firestore collection
 await updateDoc(userCollectionRef, userData);
 console.log("User data updated for UID: ", user.uid);
window.location.reload()
        }
         
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error, e.g., display an error message to the user.
    }
    };
    
  return (
    <>

      <Dialog
        size="xxl"
        open={userNew}
        
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
            
          <CardBody className="flex flex-col gap-4 max-h-[700px] overflow-y-auto">
            
            <Typography variant="h4" color="black" className="flex items-center gap-x-3 gap-y-1 flex-wrap justify-center text-center">
              <img src="/static/images/libraryLogo.png" className="w-20 h-auto" />
              REGISTRATION FORM
            </Typography>
            <div className="flex items-center gap-x-2">
              <Avatar src={user.photoURL} alt="avatar" />
              <div>
                <Typography variant="h6">{user.displayName}</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {user.email}
                </Typography>
              </div>
            </div>
            <div className=" flex flex-wrap justify-center gap-x-3 w-full">
              
            <div className="flex gap-10 lg:justify-start justify-center w-[65%] ">
             
      <Radio name="type" label="Student" value={"student"} checked={ selectedType === "student"} onChange={(e)=> setSelectedType(e.target.value)}/>
      <Radio name="type" label="Non-Student" value={"non-student"} checked={selectedType === 'non-student'} onChange={(e)=> setSelectedType(e.target.value)} />

    </div>
           
            <div className=" pt-2 lg:w-[10%] w-full">
                <Input
                  label="School ID"
                  size="lg"
                  className=""
                  onChange={(e) => setSchoolID(e.target.value)}
                  value={schoolID}
                  required = {schoolID.length > 0 ? false : true }
                />
                </div>
                </div>
            <div className="flex-1 lg:flex lg:gap-x-2">
              <div className="py-2 w-full">
                <Input
                  label="First Name"
                  size="lg"
                  className=""
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required = {firstName.length > 0 ? false : true}
                />
              </div>
         
              <div className="py-2 w-full">
                <Input
                  label="Middle Name"
                  size="lg"
                  className=""
                  onChange={(e) => setMiddleName(e.target.value)}
                  value={middleName}
                  required = {middleName.length > 0 ? false : true}
                />
              </div>
              <div className="py-2 w-full">
                <Input
                  label="Last Name"
                  size="lg"
                  className=""
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required = {lastName.length > 0 ? false : true}
                />
              </div>
            </div>

            <div className="flex-1 lg:flex lg:gap-x-2">
              <div className="pt-2 w-full">
                <Select
                  label="Suffix"
                  value={selectedSuffix}
                  onChange={(e) => setSelectedSuffix(e)}
                  className="h-10"
                 

                >
                  <Option value="">None</Option>
                  <Option value="Jr.">Jr.</Option>
                  <Option value="Sr.">Sr.</Option>
                  <Option value="III">III</Option>
                  <Option value="IV">IV</Option>
                  <Option value="V">V</Option>
                </Select>
              </div>
              <div className="pt-2 w-full ">
              <Select
  value={selectedDepartment}
  onChange={(e) => setSelectedDepartment(e)}
  label="Department"
  error={selectedDepartment.length > 0 ? false : true}
  animate={{
    mount:{height: 200},
    unmount:{height:200}
  }}
  
>
{collegeNames.map((college, index) => (
          <Option key={index} value={college}>
            {college}
          </Option>
        ))}
                </Select>
              </div>
              <div className="pt-2 w-full">
                <Select
                  label="Course"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e)}
                  disabled={selectedType==='non-student'}
                  error={selectedCourse.length > 0 ?  false: true}
                  
                  animate={{
                    mount:{maxHeight: 200},
                    unmount:{maxHeight:200}
                  }}
                >
{courses.map((course, index) => (
            <Option key={index} value={course}>
              {course}
            </Option>
          ))}
                </Select>
              </div>
              <div className="pt-2 w-full">
                <Select
                  label="Year Level"
                  value={selectedYearLevel}
                  disabled={selectedType==='non-student'}
                  onChange={(e) => setSelectedYearLevel(e)}
                  error={selectedYearLevel.length > 0 ? false : true}
                >
                  <Option value="1st Year">1st Year</Option>
                  <Option value="2nd Year">2nd Year</Option>
                  <Option value="3rd Year">3rd Year</Option>
                  <Option value="4th Year">4th Year</Option>
                  <Option value="5th Year">5th Year</Option>
                </Select>
              </div>
            </div>

            <div className="flex-1 lg:flex lg:gap-x-2">
              <div className="pt-2 w-full">
                <Select
                  label="Sex"
                  value={gender}
                  onChange={(e) => setGender(e)}
                  error={gender.length > 0 ? false : true}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
            
              </div>
              
                  <div className="pt-2 w-full">
                  <Datepicker  
            value={value} 
            onChange={handleValueChange} 
            asSingle={true} 
            useRange={false}
            placeholder={"Birthdate"}
            inputClassName="rounded-lg w-full p-2 text-sm border-[1px] border-slate-900"
            containerClassName=" bg-slate-300 text-slate-100 rounded-2xl relative "
            popoverDirection="up" 
            displayFormat={"MM/DD/YYYY"}
           
            />
              </div>
            </div>
         
                <div className="pt-2 w-full">
                <Input
                  label="Address"
                  size="lg"
                  className=""
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required={address.length > 0 ? false : true}
                />
                </div>
          </CardBody>
          <CardFooter className="pt-0 flex w-full justify-center   ">
            <div className="sm:w-full md:w-[55%] lg:w-[25%]">
            
            <Button variant="gradient" color="blue" onClick={handleRegister} fullWidth>
              Register
            </Button>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalRegister;
