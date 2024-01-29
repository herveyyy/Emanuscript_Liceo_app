import React from "react";
import AuthorCard from "./AuthorCard";

const AuthorList = ({ names, profilePics, dept }) => {
  const list = names.map((name, index) => ({
    name,
    profilePic: profilePics[index],
  }));
  return (
    <div className="h-28 w-full overflow-x-auto">
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
