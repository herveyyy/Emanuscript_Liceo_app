import React, { useState } from "react";
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
const ModalRegister = () => {
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
  const [value, setValue] = useState({ 
    startDate: new Date(), 
    endDate: new Date().setMonth(11) 
    }); 
    
    const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 
    } 
    const handleRegister = () => {
      console.log("Register Clicked")
      setOpen(true)
  
    }
    
  return (
    <>
      <Button
      
       className="flex justify-center items-center gap-2" onClick={handleRegister}><BsGoogle className="w-6 h-6"/>Sign Up</Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleRegister}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full">
          <CardHeader
            variant="gradient"
            color="amber"
            className="grid h-28 place-items-center"
          >
            <img src="/static/images/liceo.png" className="w-20 h-auto" />
          </CardHeader>
          <CardBody className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
            <Typography variant="h4" color="black" className="text-center">
              Register
            </Typography>
            <div className="flex items-center gap-x-2">
              <Avatar src="" alt="avatar" />
              <div>
                <Typography variant="h6">user display name</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  user email
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
                />
              </div>
         
              <div className="py-2 w-full">
                <Input
                  label="Middle Name"
                  size="lg"
                  className=""
                  onChange={(e) => setMiddleName(e.target.value)}
                  value={middleName}
                />
              </div>
              <div className="py-2 w-full">
                <Input
                  label="Last Name"
                  size="lg"
                  className=""
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
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
  animate={{
    mount:{height: 200},
    unmount:{height:200}
  }}
  
>
                  <Option  value="Department 1">Department 1</Option>
                  <Option value="Department 2">Department 2</Option>
                  <Option value="Department 3">Department 3</Option>
                  <Option value="Department 1">Department 1</Option>
                  <Option value="Department 2">Department 2</Option>
                  <Option value="Department 3">Department 3</Option>
                  <Option value="Department 1">Department 1</Option>
                  <Option value="Department 2">Department 2</Option>
                  <Option value="Department 3">Department 3</Option>
                  <Option value="Department 3">Department 3</Option>
                  <Option value="Department 1">Department 1</Option>
                  <Option value="Department 2">Department 2</Option>
                  <Option value="Department 3">Department 3</Option>
                </Select>
              </div>
              <div className="pt-2 w-full">
                <Select
                  label="Course"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e)}
                  disabled={selectedType==='non-student'}
                  animate={{
                    mount:{maxHeight: 200},
                    unmount:{maxHeight:200}
                  }}
                >
                  <Option value="Course 1">Course 1</Option>
                  <Option value="Course 2">Course 2</Option>
                </Select>
              </div>
              <div className="pt-2 w-full">
                <Select
                  label="Year Level"
                  value={selectedYearLevel}
                  disabled={selectedType==='non-student'}
                  onChange={(e) => setSelectedYearLevel(e)}
                >
                  <Option value="1st Year">1st Year</Option>
                  <Option value="2nd Year">2nd Year</Option>
                  <Option value="3rd Year">3rd Year</Option>
                  <Option value="4th Year">4th Year</Option>
                </Select>
              </div>
            </div>

            <div className="flex-1 lg:flex lg:gap-x-2">
              <div className="pt-2 w-full">
                <Select
                  label="Gender"
                  value={gender}
                  onChange={(e) => setGender(e)}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                  <Option value="Non-binary">Non-binary</Option>
                  <Option value="Other">Other</Option>
                </Select>
            
              </div>
              
                  <div className="pt-2 w-full">
                    <Input
                      label="Specify Your Gender"
                      value={customGender}
                      onChange={(e) => setCustomGender(e.target.value)}
                      disabled={gender !== "Other"}
                     
                    />
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
            popoverDirection="down" 
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
