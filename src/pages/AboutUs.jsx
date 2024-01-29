import { Typography } from "@material-tailwind/react";
import React from "react";
import { Footer } from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
import { Carousel } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <div className="absolute top-0  bottom-0 -z-10  h-screen  overflow-hidden">
      <div className="overflow-y-scroll h-full">
        <div className="absolute inset-0 top-0  bg-black h-screen overflow-y-scroll">
          <img
            src="/static/images/LiceoBG.jpg"
            className="blur-sm object-center object-cover h-full w-screen bg-black -z-"
          />
        </div>
        <div className="flex w-full px-8">
          <Typography variant="h1">About Us</Typography>
        </div>
        <div className="flex w-full justify-center px-8">
          <Typography className="text-lg">A Capstone Project</Typography>
        </div>
        <div className=" flex justify-center w-full px-2 pt-1 pb-16">
          <Carousel
            loop={true}
            autoplay={true}
            className="w-full h-[60vh] shadow-xl "
          >
            <img
              src="/static/images/5.jpg"
              alt="image 1"
              className="h-full w-full object-contain p-2 "
            />
            <img
              src="/static/images/4.jpg"
              alt="image 2"
              className="h-full w-full object-contain  p-2 "
            />
            <img
              src="/static/images/3.jpg"
              alt="image 3"
              className="h-full w-full object-contain p-2 "
            />
            <img
              src="/static/images/2.jpg"
              alt="image 4"
              className="h-full w-full object-contain  p-2"
            />
            <img
              src="/static/images/1.jpg"
              alt="image 5"
              className="h-full w-full object-contain   p-2"
            />
          </Carousel>
        </div>

        <div className="w-full flex flex-wrap justify-center gap-2">
          <ProfileCard
            name={"Hervey Geralph C. Mapano"}
            role={"Full Stack Developer / Data Architect"}
            profileLink={"/static/images/hervey(1).png"}
          />
          <ProfileCard
            name={"Rossiel D. Britania"}
            role={"Technical Write/ Project Manager / CEO"}
            profileLink={"/static/images/rossiel(1).png"}
          />
          <ProfileCard
            name={"Khian Justice A. Abad"}
            role={"Front End Developer / UI/UX Designer"}
            profileLink={"/static/images/khian (3).png"}
          />
        </div>
        <div className="w-full flex justify-center my-9">
          <ProfileCard
            name={"Dr. Marco Marvin L. Rado"}
            role={"Adviser"}
            profileLink={"/static/images/sir.png"}
          />
        </div>
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
