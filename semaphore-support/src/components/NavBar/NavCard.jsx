import React from 'react';
import { Link } from 'react-router-dom';

const NavCard = ({ icon, name, route='home'}) => {
  
    const IconComponent=icon;

  return (
   
      <Link to={route}
        className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                   bg-dominant hover:bg-dominant-50 active:bg-dominant-100
                   border border-highlight hover:border-highlight-50 active:border-highlight-100
                 rounded-xl shadow-sm hover:shadow-md
                 transition-all duration-200 ease-in-out
                 p-4 sm:p-5 md:p-6
                 flex flex-col items-center justify-center
                 
                 transform hover:scale-105 active:scale-95"
    >
  
      {/* Icon Container */}
      <div className="mb-3 sm:mb-4 p-2 sm:p-3 
                      bg-highlight group-hover:bg-dominant-50
                      rounded-full transition-colors duration-200">
        <IconComponent 
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
                     text-accent group-hover:text-accent-50
                     transition-colors duration-200"
        />
      </div>
      
      {/* Name/Label */}
      <span className="text-sm sm:text-base md:text-lg font-medium 
                       text-accent group-hover:text-accent-90
                       text-center leading-tight
                       transition-colors duration-200">
        {name}
      </span>
      
      {/* Subtle indicator for interactivity */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br 
                      from-transparent to-blue-50/20 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 pointer-events-none" />
                     
    </Link>
  
  );
};
export default NavCard;