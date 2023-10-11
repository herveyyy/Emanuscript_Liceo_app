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
  Input,
} from "@material-tailwind/react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineXMark } from 'react-icons/hi2';
import colleges from '../colleges';
import { LuSearchCode } from "react-icons/lu";
import researchKeywords from '../data/searchData';
import { database } from "../../firebaseConfig";
import { Timestamp, collection, query, where, getDocs } from 'firebase/firestore';

const AdvanceSearch = ({updatedManuscripts}) => {
  const [open, setOpen] = useState(false);
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const collegeNames = Object.keys(colleges["List of Colleges"]);
  const courses = colleges["List of Colleges"][department] || [];
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");
  const [suggestedKeywords, setSuggestedKeywords] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const handleSearch = async () => {
    console.log("From Year: ", fromYear, "To Year: ", toYear, "Course: ", course, "and", "Department: ", department, "Tags:", tags);
    
    // Call the fetchManuscriptData function
    const manuscriptData = await fetchManuscriptData();
    updatedManuscripts(manuscriptData)
  };
  const fetchManuscriptData = async () => {
    try {
      const db = database;
      const manuscriptCollection = collection(db, 'Manuscript'); // Replace with your collection name

      let manuscriptQuery = query(manuscriptCollection);

      // Convert fromYear and toYear strings to Timestamp objects
      if (fromYear && toYear) {
        const fromYearTimestamp = Timestamp.fromDate(new Date(`${fromYear}-01-01`));
        const toYearTimestamp = Timestamp.fromDate(new Date(`${toYear}-12-31`));

        manuscriptQuery = query(manuscriptCollection, where('date', '>=', fromYearTimestamp), where('date', '<=', toYearTimestamp));
      }

      if (course) {
        manuscriptQuery = query(manuscriptCollection, where('course', '==', course));
      }

      if (department) {
        manuscriptQuery = query(manuscriptCollection, where('department', '==', department));
      }

      const querySnapshot = await getDocs(manuscriptQuery);
      const manuscriptData = [];

      querySnapshot.forEach((doc) => {
        manuscriptData.push(doc.data());
      });

      return manuscriptData;
    } catch (error) {
      console.error('Error fetching manuscript data:', error);
    }
  };

  const addTag = () => {
    if (tagInput.trim() !== "") {
      // Prevent adding duplicate tags
      if (!tags.includes(tagInput)) {
        setTags([...tags, tagInput]);
        setTagInput("");
      }
    }
  };

  const handleTagInputKeyPress = (e) => {
    if (e.key === "Enter") {
      addTag();
    } else {
      // Handle auto-suggestions
      const input = e.target.value.toLowerCase();
      const matchingKeywords = researchKeywords.filter(keyword =>
        keyword.toLowerCase().includes(input)
      );
      setSuggestedKeywords(matchingKeywords);
      setShowSuggestions(true);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setTagInput(suggestion);
    setShowSuggestions(false);
  };
  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };
  return (
<>
<Tooltip content="Advance Search Filter">
               <button 
               onClick={()=>setOpen(true)}
               className="flex items-center justify-center px-2 border-r hover:bg-blue-gray-800 hover:bg-opacity-30 duration-300">
            <RxHamburgerMenu className="text-white w-5"/>
                </button>
                </Tooltip>
                <Dialog
                size='md'
                open={open}
                handler={()=>setOpen(false)}
                >
                  <DialogHeader>
                    <div className='flex items-center w-full justify-between'>
                      <div className='w-full flex items-center gap-x-2'><LuSearchCode className='w-12'></LuSearchCode>Advance Search</div>
                      <div className='flex justify-end w-1/6'>
                        <button className=''
                        onClick={() => setOpen(false)}>
                        <HiOutlineXMark />
                        </button>
                      </div>
                    </div>
                    </DialogHeader>
                   <DialogBody divider>
          <div className=' flex flex-wrap gap-2 justify-center  '>
            <div className='flex w-full flex-wrap justify-center items-baseline gap-2'>
          <div className=" w-72">
      <Input 
      value={fromYear}
      onChange={(e) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, '');
        setFromYear(numericValue)
      }}
      variant="standard" label="From Year : " />
    </div>
    <div className=" w-72 ">
      <Input
      value={toYear}
      onChange={(e) => {
        const numericValue = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        setToYear(numericValue);
      }}
       variant="standard" label="To Year : " 
       />
    </div>
    
    </div>
          <div className="w-72">
      <Select label="Select Department"
      value={department}
      onChange={(e) =>setDepartment(e)}
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
    <div className="w-72">
  <Select
    label="Select Course"
    value={course}
    onChange={(e) => setCourse(e)}
    animate={{

      mount: { height: 200 },
      unmount: { height: 200 }
    }}
  >
    {courses.map((course, index) => (
      <Option key={index} value={course}>
        {course}
      </Option>
    ))}
  </Select>
</div>
<div className='w-full flex items-center'>
  <div className='w-72 pl-2'>
  <Input
                variant="standard"
                size='xl'
                label="Tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagInputKeyPress}
              />
        {showSuggestions && tagInput.length > 0 && (
            <div className="absolute h-32 overflow-y-scroll bg-white w-72 ">
              {suggestedKeywords.map((suggestion, index) => (
                <div
                  key={index}
                  className="rounded-md hover:bg-gray-200 px-4 py-1"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}         
</div>
<button 
onClick={addTag}
className='text-black px-1 rounded-xl border-2 border-black hover:text-white hover:bg-black hover:border-black focus:text-white focus:bg-black focus:border-black duration-300'
>+</button>
</div>
<div className='w-full flex gap-1 h-48 border-2 border-gray-600 rounded-xl items-start p-2' >

{tags.map((tag, index) => (
              <button
                key={index}
                className='text-black py-[1px] px-[2px] text-sm rounded-md border-2 border-black hover:text-white hover:bg-black duration-300'
                onClick={() => removeTag(tag)}
             >
                {tag}
              </button>
            ))}

</div>
</div>
        </DialogBody>
        <DialogFooter className='flex justify-center'>
<Button size='sm'
onClick={handleSearch}
>Search </Button>
        </DialogFooter>
                </Dialog>
</>
  )
}

export default AdvanceSearch