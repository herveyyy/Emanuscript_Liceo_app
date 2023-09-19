import { Avatar,
        Typography, 
        Button, 
        Radio, 
            } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AccountTabs from "../components/AccountTabs";


function AccountSettings() {
    
    return ( 
        <div className="flex justify-center mt-6">
            <div className="absolute flex justify-center items-center mb-[20rem] px-1">
                <div className="bg-red-800 rounded-full flex justify-center mb-[1rem] py-1 px-1">
                    <Avatar src="static/images/khian.png" alt='profile' size="xl"/>
                </div>
                <div className="px-3 italic">
                    <h1>Khian Justice A. Abad</h1>
                    <h2>kabad37796@liceo.edu.ph</h2>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[8rem]">
                <AccountTabs/>
                <form className="absolute flex justify-center mt-[50rem]">
                <div class="flex flex-wrap mb-8 w-[40rem]">
                    <div class="w-[20rem] md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-100 text-gray-700 border border-red-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mi-name">
                        Middle Name
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-MI" type="text" placeholder="Rose"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                    <div class="w-[8rem] py-1 px-3 mt-4">
                        <select class="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500 text-center" id="grid-suffix">
                        <option>NA</option>
                        <option>Jr</option>
                        <option>III</option>
                        <option>IV</option>
                        <option>V</option>
                        </select>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email-name">
                        Email
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="kabad377@liceo.edu.ph" disabled/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-mobile-name">
                        Phone
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-mobile-name" type="num" placeholder="Mobile Number"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-id-name">
                        ID Number
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-id-name" type="number" placeholder="ID number"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city-name">
                        City
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city-name" type="text" placeholder="City"/>
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-4">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Zip-name">
                        Zip
                    </label>
                    <input class="appearance-none block w-[15rem] bg-gray-200 text-gray-700 border border-red-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip-name" type="text" placeholder="Zip Code"/>
                    </div>
                    <div className="flex gap-5 mb-4 w-86">
                        <Radio name="type" label="MALE" color='red'/>
                        <Radio name="type" label="FEMALE" color='red' defaultChecked />
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2 w-[40rem] mt-2">
                    <div class="w-[10rem] md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Year Level
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500" id="grid-state">
                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                        <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-[10rem] md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Department
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500" id="grid-department">
                        <option>Department</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div class="w-[10rem] md:w-1/3 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        Course
                    </label>
                    <div class="relative">
                        <select class="block appearance-none w-full bg-red-800 border border-gray-300 text-gray-100 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-red-900 focus:border-gray-500" id="grid-course">
                        <option>Course</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-100">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                    </div>
                    <div className="flex gap-3 justify-center mt-4 ml-4">
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