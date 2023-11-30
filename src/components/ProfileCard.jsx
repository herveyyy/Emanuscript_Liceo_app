import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import { FaFacebookF,FaInstagram  } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa6";

const ProfileCard = ({name,role,facebook,instagram,github,profileLink}) => {
  return (
    <Card className="w-96">
    <CardHeader floated={false} className="h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" color="blue-gray" className="mb-2">
        {name}
      </Typography>
      <Typography color="blue-gray" className="font-medium" textGradient>
        {role}
      </Typography>
    </CardBody>
    <CardFooter className="flex justify-center gap-7 pt-2">
    <div className="flex gap-4">
      <IconButton  className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
      <Typography as={"a"}
                  href={facebook}
                                    >
      <FaFacebookF className='w-5 h-5'/>
        </Typography>       
      </IconButton>
      <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
      <Typography as={"a"}  
      href={instagram}>
      <FaInstagram className='w-5 h-5' />
      </Typography>

      </IconButton>
      <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
      <Typography as={"a"} href={github}>
      <FaGithub className='w-5 h-5' />
      </Typography>

      </IconButton>
      
    </div>
    </CardFooter>
  </Card>
  )
}

export default ProfileCard