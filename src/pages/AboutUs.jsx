import { Typography } from '@material-tailwind/react'
import React from 'react'
import { Footer } from '../components/Footer'
import ProfileCard from '../components/ProfileCard'

const AboutUs = () => {
  return (
    <div className='h-screen'>
      <div className='flex w-full px-8'>
      <Typography variant='h1'>About Us</Typography>
      </div>
      <div className='w-full flex justify-center my-9'>
      <ProfileCard name={"Dr. Marco Marvin L. Rado"} role={"Adviser"} profileLink={"/static/images/sir.png"} />
      </div>
      <div className='w-full flex flex-wrap justify-center gap-2'>
      <ProfileCard name={"Hervey Geralph C. Mapano"} role={"Full Stack Developer / Data Architect"} profileLink={"/static/images/herver.jpg"} />
      <ProfileCard  name={"Rossiel D. Britania"} role={"Technical Write/ Project Manager / CEO"} profileLink={"/static/images/rossiel.jpg"}/>
      <ProfileCard  name={"Khian Justice A. Abad"} role={"Front End Developer / UI/UX Designer"} profileLink={"/static/images/khian.jpg"}/>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs