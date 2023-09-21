import React from 'react'
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 import ModalRegister from '../components/ModalRegister';
const Home = () => {
  return (
  
  <div className='min-h-screen '>
    <div className='sm:mx-4 md:mx-8 lg:mx-52'>
    <Carousel
    className="rounded-xl mt-3 "
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
      alt="image 1"
      className="h-[25rem] w-full object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      alt="image 2"
      className="h-[25rem] w-full object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
      alt="image 3"
      className="h-[25rem] w-full object-cover"
     
    />
  </Carousel>
  </div>
  <div className='px-8 mt-4 w-full flex justify-center '>
  <Card className="mt-6 mr-2 lg:w-[25%] xl:w-[35%] md:w-full sm:w-full w-full gap-y-2 p-4 ">
    <div className="flex justify-center">
      <div className='w-auto shadow-xl rounded-xl group'>
      <img src='/static/images/liceo.png' className='w-24 blur-2xl absolute group-hover:blur-3xl duration-500'/>
      <img src='/static/images/liceo.png' className='w-24 group-hover:w-28 duration-500'/>
      </div>
    </div>
      <ModalRegister/>
        <Button color='blue'>Login</Button>
      </Card>
      </div>
<div className='px-8 mt-4 w-full flex md:justify-start  sm:justify-center  lg:justify-center'>
  <Card className="mt-6 mr-2 md:w-full sm:w-full lg:w-[75%]">
      <CardBody>
        
      <p className='text-4xl text-black my-4'>ELSA P. PELAEZ MEMORIAL LIBRARY</p>
        <Typography>
        The LIBRARY is indeed the most important intellectual resource in the academic community. It is the place where the teaching-learning process is effectively enhanced and aptly complemented through the use of books, periodicals, journals, and variety of multi-media resources. It is an intellectual center of an academic community – a place for research, thought, and reflection. It significantly plays an indispensable role in accomplishing the educational objectives of Liceo de Cagayan University.
        </Typography>
        <p className='text-3xl text-black uppercase my-4'>vision</p>
        <Typography>
        Facilitates total human formation through excellent and relevant information services.
</Typography>
<p className='text-3xl text-black uppercase my-4'>mission</p>
        <Typography>
        Supports the university's commitment to academic excellence, Christian values, research, and extension programs via adequate library resources, facilities, and fast delivery of information service.
</Typography>
      </CardBody>
    
    </Card>
</div>
</div>
  )
}

export default Home;