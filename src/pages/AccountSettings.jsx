import { Avatar,
        Typography, 
        Button, 
        Radio, 
        } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AccountTabs from "../components/AccountTabs";
import { UserContext } from "../data/userData";
import {React, useContext, useEffect,useState} from 'react'
import { collection,doc,getDoc,where} from "firebase/firestore";
import { database } from "../../firebaseConfig";
import LoadingModal from "../components/Loading";
const AccountSettings = () => {
    const { currentUser, logout } = useContext(UserContext);
    const [user,setUser] = useState([])
    useEffect(() => {
        const fetchUserData =  async () => {
        try {
            const userRef = doc(database,"Users",currentUser.uid)
            const userDoc = await getDoc(userRef)
            if(userDoc.exists()){
                setUser(userDoc.data())
                console.log(user)
            }else{
                console.log("User Error!")
            }
        } catch (error) {
            console.error("User Error!", error)
        }
        }
        fetchUserData()
    },[!user])
    if(!currentUser){
        return <LoadingModal/>
    }

const genderOtherChecker = (gender) => {
if(gender == "Male"){
return false
}else if(gender == "Female"){
    return false
}else{
return true
}

}
    return ( 
        <div className="flex justify-center mt-6">
            <div className="absolute flex justify-center items-center mb-[20rem] px-1">
                <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
                    <Avatar src={currentUser.photoURL || ""} alt='profile' size="xl"/>
                </div>
                <div className="px-3 italic">
                    <h1>{currentUser.displayName || ""}</h1>
                    <h2>{currentUser.email || ""}</h2>
                </div>
            </div>
            <div className="flex-col mt-32 border-t sm:border-t-0 border-red-800 w-full ">
                <div className="hidden  md:flex w-full justify-center"><AccountTabs/></div>
                <div className="flex justify-center my-4 gap-x-2 px-2 ">
       <div className="border-t  mt-2.5  border-gray-400 h-1 w-full"></div>
        <p className="w-[24rem] text-center uppercase">Account Settings</p>
        <div className="border-t mt-2.5 border-gray-400 h-1 w-full"></div>
        </div>
                <form className=" flex justify-center w-full  my-12">
                <div className="flex flex-wrap mb-8 w-full justify-center md:justify-normal md:w-[40rem]">
                    <div className="w-full md:w-1/2 px-3 md:mb-0 text-center md:text-left ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <div className="flex w-full justify-center md:block">
                    <input className="appearance-none block w-[15rem] bg-gray-100 text-gray-700 border border-red-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"
                    placeholder={user.firstName} disabled/>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 text-center md:text-left">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mi-name">
                        Middle Name
                    </label>
                    <div className="flex w-full justify-center md:block">
                    <input className="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border
                     border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                      focus:border-gray-500" id="grid-MI" type="text" placeholder={user.middleName} disabled/>
                    </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 text-center md:text-left">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <div className="flex w-full justify-center md:block">
                    <input className="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border
                     border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white
                      focus:border-gray-500" id="grid-last-name" type="text" placeholder={user.lastName} disabled/>
                    </div></div>
                    <div className="w-[8rem] py-1 px-3 mt-4">
                        <select className="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500 text-center" id="grid-suffix">
                        <option>{user.suffix || "N/A"}</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-4 text-center md:text-left">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email-name">
                        Email
                    </label>
                    <div className="flex w-full justify-center md:block">
                    <input className="appearance-none block w-[15rem]
                     bg-gray-200 text-gray-700 border border-red-900 
                     rounded py-3 px-4 leading-tight focus:outline-none 
                     focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder={currentUser.email} disabled/>
                    </div></div>
                    <div className="w-full md:w-1/2 px-3 mb-4 text-center md:text-left">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-id-name">
                        ID Number
                    </label>
                    <div className="flex w-full justify-center md:block">
                    <input className="appearance-none block w-[15rem] 
                    bg-gray-200 text-gray-700 border border-red-900 rounded
                     py-3 px-4 leading-tight focus:outline-none focus:bg-white
                      focus:border-gray-500" id="grid-id-name" type="number" placeholder={user.schoolID} disabled/>
                    </div></div>
                    <div className="flex gap-5 mb-4 w-86 items-center flex-wrap">
                        <Radio name="type" label="MALE" color='red' checked={user.gender === "Male"}/>
                        <Radio name="type" label="FEMALE" color='red' checked={user.gender === "Female"} />
                        <div className=" flex items-center"><p className="text-gray-700 uppercase">Others:</p>
                        { genderOtherChecker(user.gender) ?? <input className=""  disabled/>}</div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 w-full md:w-[40rem] mt-2">
                    <div className="w-full sm:w-1/2 px-3  md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Department
                    </label>
                    <div className="relative">
                        <select
                        disabled className="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500" id="grid-department">
                        <option>{user.department}</option>

                        </select>
                        <div className="pointer-events-none  flex items-center px-2 text-gray-100">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div className="w-full sm:w-1/2 px-3 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Course
                    </label>
                    <div className="relative">
                        <select 
                        disabled
                        className="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500" id="grid-course">
                        <option>{user.course}</option>
                        </select>
                        <div className="pointer-events-none  inset-y-0 right-0 flex items-center px-2 text-gray-100">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-3 w-full justify-center mt-4 ml-4">
                    <Button className="bg-red-800 text-white">Edit</Button>
                    <Button className="bg-red-800 text-white">Save</Button>
                    </div>
                </div>
                </div>
                
                </form>
            </div>
            
        </div>
     );
}

export default AccountSettings;