import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthorList from '../components/AuthorList';
import { BsFillBookmarkPlusFill,BsFillBuildingFill,BsFillHouseExclamationFill,BsNewspaper,BsPostcard} from 'react-icons/bs';
import {FaBookReader, FaQuoteLeft, FaStar} from 'react-icons/fa'
import { Progress } from '@material-tailwind/react';
import { Footer } from '../components/Footer';
import Loading from '../components/Loading';
import CiteModal from '../components/CiteModal';
const Manuscript = () => {
  const { id } = useParams();
  const [manuscript, setManuscript] = useState([]);
  const isLargeScreen = window.innerWidth >= 1024;
  const [readModal, setReadModal] = useState(false)
  const [rateModal, setRateModal] = useState(false)
  const [citeModal, setCiteModal] = useState(false)
const handleRead = () => {
console.log("ReadButton is Clicked")
setReadModal(!readModal)
}
const handleCite = () => {
  setCiteModal(!citeModal)
console.log("CiteBtn is Clicked")
}
const handleRate = () => {
  setRateModal(!rateModal)
  console.log("RateBtn is Clicked")
}
const handleBookmark = () => {
  console.log("BookmarkBtn is Clicked")
}

  return (
    <div className='w-full '>
       <CiteModal open={citeModal} handler={handleCite}/>
      <div>ManuscriptID: {id}</div>
      <div className='max-w-screen-xl mx-auto'>
        {/* Picture and Title and bookmark Icon */}
        <div className='w-full mb-2'>
          <div className='flex w-full px-12 h-80 gap-x-4 gap-y-1 flex-wrap justify-center duration-300'>
            <div className='lg:w-[28%] w-full flex justify-center items-center shadow-2xl  rounded-2xl  '>
              <img
                className='w-full h-32 sm:w-full sm:h-40 md:h-56 md:w-full lg:h-72 lg:w-full object-cover'
                src='/static/images/liceo.png'
                alt='Manuscript Cover'
              />
            </div>
            <div className='lg:w-[70%] w-full  rounded-lg  '>
              <div className='border-b  p-4 flex justify-between sm:flex-nowrap flex-wrap-reverse'>
                <div className='h-auto'>
                  <p className='lg:text-2xl md:text-lg font-bold md:text-left text-center text-md sm:text-left '>
                    Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name Manuscript Name
                  </p>
                </div>
                <div className='flex items-baseline w-full sm:w-auto justify-center '>
                  <button onClick={handleBookmark}>
                  <div className='text-maroon-800'>
                    <BsFillBookmarkPlusFill className='w-9 h-9' />
                    
                  </div>
                  </button>
                </div>
              </div>
              <div className='w-full flex flex-col p-1 md:p-2 lg:p-4'>
                <div className='w-full pb-4'>
                  <p className='text-center sm:text-left'>Year: 2023</p>
                </div>
                <div className='flex gap-2 justify-center sm:justify-start lg:flex-wrap flex-col lg:flex-row pl-2'>
                  <div className=' h-8 border-gray-900 border-l-2 px-2 '>
                  <div className='flex items-center justify-center gap-1'>
                      <div className='text-maroon-900'><BsFillBuildingFill/></div>
                      <p className='text-xs text-center font-bold flex'>Department</p>
                  </div>
                  <p className='text-xs text-center '>College of Information Technology</p>
                  </div>
                  <div className=' h-8 border-gray-900 border-l-2 px-2 mt-4 sm:mt-0 '>
                  <div className='flex items-center justify-center gap-1'>
                      <div className='text-maroon-900'><BsPostcard/></div>
                      <p className='text-xs text-center font-bold'>Course</p>
                  </div>
                  <p className='text-xs text-center '>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (BSIT)</p>
                  </div>
                  <div className=' h-8 border-gray-900 border-l-2 px-2 mt-8 sm:mt-0'>
                  <div className='flex items-center justify-center gap-1 '>
                      <div className='text-maroon-900'><BsFillHouseExclamationFill/></div>
                      <p className='text-xs text-center font-bold'>Location</p>
                  </div>
                  <p className='text-xs text-center'>Main Campus Library</p>
                  </div>
                  <div className=' h-8 border-gray-900 border-l-2 px-2 lg:border-r-2 my-4 sm:my-0'>
                  <div className='flex items-center justify-center gap-1'>
                      <div className='text-maroon-900'><BsNewspaper/></div>
                      <p className='text-xs text-center font-bold'>Pages</p>
                  </div>
                  <p className='text-xs text-center'>143</p>
                  </div>
                </div>
                       
              </div>
            </div>
            {isLargeScreen ? (
          // Render the navigation bar on large screens
          <div className='flex w-full gap-x-2 justify-end'>
            <div className='h-16 flex items-center'>
              <button onClick={handleRead} className=' gap-x-2 bg-maroon-800 px-4 py-2 font-semibold text-sm text-white inline-flex items-center space-x-2 rounded'>
                <FaBookReader />Read
              </button>
            </div>
            <div className='h-16 flex items-center'>
              <button onClick={handleCite} className='gap-x-2 bg-blue-800 px-4 py-2 font-semibold text-sm text-white inline-flex items-center space-x-2 rounded'>
                <FaQuoteLeft />
                Cite
              </button>
            </div>
            <div className='h-16 flex items-center'>
              <button onClick={handleRate} className='gap-x-2 bg-orange-800 px-4 py-2 font-semibold text-sm text-white inline-flex items-center space-x-2 rounded'>
                <FaStar />
                Rate
              </button>
            </div>
            <div className='h-16 flex items-center'>
              <button  className='bg-blue-500 px-4 py-2 font-semibold text-sm text-white inline-flex items-center space-x-2 rounded'>
                Request Read On-site
              </button>
            </div>
          </div>
        ) : (
          // Render the navigation bar on small screens
          <div className='bg-maroon-600 p-2 fixed bottom-0 left-0 right-0'>
            <div className='flex justify-around'>
              <button onClick={handleRead} className='text-center text-white  w-full  flex justify-center' >
                <FaBookReader />
              </button>
              <button onClick={handleCite} className='text-center text-white border-x-2 w-full  flex justify-center'>
                <FaQuoteLeft />
              </button>
              <button onClick={handleRate} className='text-center text-white w-full flex justify-center'>
                <FaStar />
              </button>
            </div>
          </div>
        )}
            <div className=''>
        {/* AuthorList */}
        <div className='w-full  justify-center'>
          <p className='text-center text-gray-900  font-semibold '>Authors </p>
            <AuthorList />
        </div>
        {/* Abstract */}
        <div className=' p-2 border-t-2 w-full mt-2 border-t-maroon-700'>
        <p className='md:text-left text-center text-gray-900  font-semibold '>Abstract</p>
          <div className='text-xs md:text-sm text-justify py-2'>
            <p className='indent-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto quis, ut id libero explicabo alias aspernatur earum, animi accusantium corporis repellendus magni nulla eligendi! Officiis ea fugiat eaque nostrum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda aut, repellendus optio expedita, velit aliquam tenetur rerum, eos aperiam distinctio reiciendis! Hic architecto provident modi quisquam deserunt vel ipsa deleniti?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid eius ipsum quidem explicabo, eaque possimus quis odio, fuga eligendi repellat molestias doloribus, nihil est quia perferendis nam commodi consequuntur.
            </p>
          </div>
        </div>
        <div className='w-full mb-4'>
          <div className='p-2 border-t-2 w-full mt-2 border-t-maroon-700'>
            <div className='h-56 flex flex-wrap gap-x-2 md:gap-0 '>
              <div className='md:w-1/2 w-full h-40 px-2'>
                <div className='text-center md:text-left text-gray-900  font-semibold border-b '>Ratings</div>
                <div className='py-2'>
                  <div className='flex items-center w-[90%] gap-2'>
                  <div className='text-sm sm:hidden'>5</div>
                  <Progress value={90} color='amber' className='border border-gray-900/10 bg-blue-900/5 p-1' size='lg'/>
                  <div className='hidden sm:contents pl-10 font-bold text-center text-sm '>5</div>
                  </div>
                  <div className='flex items-center w-[90%] gap-2'>
                    <div className='text-sm sm:hidden'>4</div>
                  <Progress value={70} color='amber' className='border border-gray-900/10 bg-blue-900/5 p-1' size='lg'/>
                  <div className='hidden sm:contents pl-10 font-bold text-center text-sm'>4</div>
                  </div>
                  <div className='flex items-center w-[90%] gap-2'>
                  <div className='text-sm sm:hidden'>3</div>
                  <Progress value={40} color='amber' className='border border-gray-900/10 bg-blue-900/5 p-1' size='lg'/>
                  <div className='hidden sm:contents pl-10 font-bold text-center text-sm'>3</div>
                  </div>
                  <div className='flex items-center w-[90%] gap-2'>
                  <div className='text-sm sm:hidden'>2</div>
                  <Progress value={20} color='amber' className='border border-gray-900/10 bg-blue-900/5 p-1' size='lg'/>
                  <div className='hidden sm:contents pl-10 font-bold text-center text-sm '>2</div>
                  </div>
                  <div className='flex items-center w-[90%] gap-2'>
                  <div className='text-sm sm:hidden'>1</div>
                  <Progress value={10} color='amber' className='border border-gray-900/10 bg-blue-900/5 p-1' size='lg'/>
                  <div className='hidden sm:contents pl-10 font-bold text-center text-sm'>1</div>
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 w-full h-52 px-2 '>
                <div className='text-center md:text-left text-gray-900 font-semibold border-b '>Rules and Regulations</div>
                <p className='text-justify md:text-left text-xs sm:text-sm  py-2'>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores maxime nesciunt error commodi quaerat est mollitia harum suscipit repellendus repellat cum, alias molestias voluptates expedita, totam sapiente nam ad.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi facere nisi voluptatibus. Sunt a dolore voluptate dolor accusamus, commodi optio exercitationem culpa sint, nostrum sed magnam cupiditate sit quaerat? Rerum?</p>
              
              </div>
              <Footer/>
            </div>
          </div>          
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Manuscript;
