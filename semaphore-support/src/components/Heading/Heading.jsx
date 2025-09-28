import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react"; 
import { Undo2Icon } from "lucide-react";
export default function Heading({ 
  img="",
  heading = "Heading", 
  subheading = "SubHeading", 
  className = "", 
  previousRoute = "" 
}) {
  return (
    <div className={`text-center ${className} bg-dominant`}>
    {
      img?(<img src={img} alt={heading} width="200" className="mx-auto" />):(<h1 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-accent">
        {heading.toUpperCase()}
      </h1>)
    }
      
      
      {subheading && (
        <p className="text md:text-xl leading-relaxed text-accent mb-6">
          {subheading}
        </p>
      )}
      
      {/* Navigation links container */}
      <div className="flex justify-between items-center mb-4">
        {/* Left side - Back to previous page */}
          {previousRoute  && (
        <div className=" text-left lg:ml-30 ml-5  border p-2 border-black/30 rounded-xl bg-white/10">
            <Link 

              to={previousRoute === "/" ? `/` : `/${previousRoute}`} 
              className="text-accent inline-flex items-center gap-1 hover:underline"
            >
              <Undo2Icon size={20}  /> {/* 👈 Back icon */}
            </Link>
        </div>
          )}
        
        {/* Right side - Back to Home */}
        {previousRoute && previousRoute !== "/" && (
          <div className=" text-right lg:mr-30 mr-3 border p-2 border-black/30 rounded-xl bg-white/10">
            <Link 
              to="/" 
              className="text-accent inline-flex items-center gap-1 hover:underline justify-end"
            >
              <Home size={20} /> {/* 👈 Home icon */}
            </Link>
          </div>
        )}
      </div>
      
      <div className="w-full h-1 mx-auto bg-highlight"></div>
    </div>
  );
}
