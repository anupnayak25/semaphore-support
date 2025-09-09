import React from "react";
import { Link } from "react-router-dom";

export default function Heading({ 
  heading = "Heading", 
  subheading = "SubHeading", 
  className = "", 
  previousRoute = "Home" 
}) {
  return (
    <div className={`text-center ${className} bg-dominant`}>
      <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-accent">
        {heading}
      </h1>
      
      {subheading && (
        <p className="text-lg md:text-xl leading-relaxed text-accent mb-6">
          {subheading}
        </p>
      )}
      
      {/* Navigation links container */}
      <div className="flex justify-between items-center mb-4">
        {/* Left side - Back to previous page */}
        <div className="flex-1 text-left ml-2">
          {previousRoute && previousRoute !== "Home" && (
            <Link to={('/'.concat(previousRoute))} className="text-md text-accent underline">
              &lt;&lt; Back to {previousRoute}
            </Link>
          )}
        </div>
        
        {/* Right side - Back to Home */}
        {previousRoute && (
          <div className="flex-1 text-right mr-2">
            <Link to="/" className="text-md text-accent underline">
              Back to Home
            </Link>
          </div>
        )}
      </div>
      
      <div className="w-full h-1 mx-auto bg-highlight"></div>
    </div>
  );
}