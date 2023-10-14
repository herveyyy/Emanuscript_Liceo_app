import React from "react";
import ManuscriptComponent from "./ManuscriptComponent";
function ManuscriptScreens() {
    return (
    <>
        <div className="flex-grow flex items-center justify-center mx-4 z-50 ">
        <div className="">
          <div className="flex-row mt-2 w-full items-center flex justify-center flex-wrap ">
            {/*Newly added Manuscripts */}
<span className=" flex w-full md:w-[80%] border-y-2 py-2 text-2xl lg:text-4xl text-center px-2  justify-center duration-700  flex-wrap">
  
    <span className=" md:w-[80%] py-5 text-white bg-black px-6 rounded-xl w-full mt-1 flex justify-center uppercase ">NEWLY ADDED Manuscripts</span>
  </span>
          </div> 
          <div className="flex-col justify-center mt-10">
            <ManuscriptComponent />
          </div>
        </div>
      </div>
 
      </>
        );
}

export default ManuscriptScreens;