import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 import ModalRegister from '../components/ModalRegister';
 import { Footer } from '../components/Footer';
 import {FcGoogle} from 'react-icons/fc'
 import { database, handleLogin } from '../../firebaseConfig';
 import { UserContext } from '../data/userData';
const Home = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Redirect to /Home if currentUser is false or null
    if (!currentUser) {
      navigate("/Home");
      
    }
  }, [currentUser]);

  return (
    <div className="absolute top-0  bottom-0 -z-10  h-screen">
       <div className='absolute top-0  bg-black h-screen' >
        
        <img src='/static/images/LiceoBG.jpg' className="blur-sm object-cover h-screen w-screen bg-black"/>
      <img src='/static/images/libraryBG.jpg' className="blur-sm object-cover  lg:h-[48vh] md:h-[50vh] sm:h-[70vh] h-[80vh] w-screen bg-black"/>
     
      </div>
    <div className='sm:mx-9 md:mx-8 lg:mx-52 px-2 mt-28'>
    <Carousel
    className="rounded-xl mt-3  "
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`
          }
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
{!currentUser &&
  <div className='px-8 w-full flex justify-center '>
  <Card className="mt-6 mr-2 lg:w-[25%] xl:w-[35%] md:w-full sm:w-full w-full gap-y-2 p-4 bg-transparent">
      <ModalRegister  />
        <Button
        onClick={handleLogin} 
        color='blue' className='flex justify-center gap-2 items-center '>
          <FcGoogle className='w-8 h-8'/>Login
        </Button>
      </Card>
      </div>
      }
<div className='px-8 mt-2 w-full flex md:justify-start  sm:justify-center  lg:justify-center'>
  <Card className="mt-6 mr-2 md:w-full sm:w-full lg:w-[75%] " >
      <CardBody >
        <div className='flex justify-center'>
<img src='/static/images/libraryIcon.gif' className='lg:w-20 sm:w-14 w-12 '/>
        </div>
      <p className='lg:text-4xl text-2xl md:text-3xl text-black my-4  text-center'>ELSA P. PELAEZ MEMORIAL LIBRARY</p>
      <Typography className='md:text-justify  text-left'>
        The LIBRARY is indeed the most important intellectual resource in the academic community. It is the place where the teaching-learning process is effectively enhanced and aptly complemented through the use of books, periodicals, journals, and variety of multi-media resources. It is an intellectual center of an academic community – a place for research, thought, and reflection. It significantly plays an indispensable role in accomplishing the educational objectives of Liceo de Cagayan University.
        </Typography>
        <div className='flex justify-center lg:justify-start gap-2'>
          <img src='/static/images/vision.gif' className='w-12 h-12 ' />
        <p className='lg:text-3xl text-black uppercase my-4 lg:text-start text-center sm:text-lg md:text-2xl'>vision</p>
        </div>
        <Typography className='md:text-justify  text-left'>
        Facilitates total human formation through excellent and relevant information services.
</Typography>
<div className='flex justify-center lg:justify-start gap-2'>
  <img src='/static/images/mission.gif' className='w-12 h-12 ' />
<p className='lg:text-3xl text-black uppercase my-4 lg:text-start text-center sm:text-lg md:text-2xl'>mission</p>
</div>
<Typography className='md:text-justify  text-left'>
        Supports the university's commitment to academic excellence, Christian values, research, and extension programs via adequate library resources, facilities, and fast delivery of information service.
</Typography>
      </CardBody>
    </Card>
</div>

<div className='mt-10 z-0 relative'>
<Footer/>
</div>

</div>
  )
}

export default Home;