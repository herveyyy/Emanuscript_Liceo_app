import React from "react";
import {VscLoading} from  "react-icons/vsc" 
function LoadingModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
  <div className="bg-white rounded shadow-lg p-10 "  >
        <div className=" flex justify-center  ">
        <VscLoading className="animate-spin w-11 h-11"/>
        </div>
        <p>Please wait...</p>
      </div>
    </div>
  );
}

export default LoadingModal;
