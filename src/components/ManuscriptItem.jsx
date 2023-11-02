import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ManuscriptItem({ title, imgUrl,course,department,year }) {
  const titleTruncated = title.length > 20 ? title.substring(0, 25) + '...' : title;
  const keywords = 3;
  const navigate = useNavigate();

  return (
    <Link
      className="w-64 sm:w-72 hover:ease-in-out duration-300 border-2 border-stone-900 border-black rounded-2xl overflow-hidden"
      to={"/Manuscript/" + title}
    >
      <img
        src={imgUrl}
        alt="Manuscript"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4 bg-gray-200 duration-200 opacity-80">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{titleTruncated}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-xs">
              <span
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 border-black rounded-md  text-center"
              >
                {course}
              </span>
              <span
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 border-black rounded-md text-center"
              >
                {department}
              </span>

        </p>
      </div>
    </Link>
  );
}

export default ManuscriptItem;
