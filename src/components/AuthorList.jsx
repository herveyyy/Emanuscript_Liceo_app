import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = ({ names, profilePics, dept }) => {
  const list = names.map((name, index) => ({
    name,
    profilePic: profilePics[index],
  }));
  console.log(list);
  return (
    <div className="h-28 w-80 md:w-[90vh] lg:w-[150vh] overflow-x-auto">
      <div className="flex gap-x-3">
        {list.map(({ name, profilePic }, index) => (
          <AuthorCard
            key={index}
            name={name}
            dept={dept}
            profilePic={profilePic}
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
