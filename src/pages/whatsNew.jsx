import React from 'react';
import LoadingPage from './LoadingPage';
import ManuscriptScreens from '../components/ManuscriptsScreen';

const WhatsNew = () => {
  return (
    <div className="absolute top-0 -z-10 h-[120vh] overflow-hidden bg-black w-full">
      {/* Background Image */}
      <img
        src="/static/images/LiceoBG.jpg"
        className="blur-sm object-cover absolute top-0 left-0 h-full w-screen"
        alt="background"
      />
      
      <div className="z-50 mt-24 h-screen xl:overflow-hidden overflow-y-scroll  relative">
        <ManuscriptScreens />
      </div>
    </div>
  );
};

export default WhatsNew;
