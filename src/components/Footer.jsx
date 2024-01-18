import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex items-center flex-wrap">
          <img src="/static/images/ITLOGO.png" alt="logo-ct" className="w-20" />
        </div>

        <ul className="flex flex-wrap items-center  gap-y-2 gap-x-8">
          <Link to={"/AboutUs"}>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </Link>
          <li>
            <Typography
              as="a"
              href="https://www.liceo.edu.ph/Department/DisplayDeptPage.aspx?page=cackq&ItemID=coc&nDeptID=caaqc"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Library
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              CIT Department
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Rossiel and Friends
      </Typography>
    </footer>
  );
}
