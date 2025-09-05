import React from "react";

export default function Heading({ heading="Heading", subheading="SubHeading"    , className = "" }) {
  return (
    <div className={`text-center  ${className} bg-dominant`}>
      <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-accent">
        {heading}
      </h1>
      
      {subheading && (
        <p className="text-lg md:text-xl leading-relaxed text-accent mb-6">
          {subheading}
        </p>
      )}
      
      <div className="w-full h-1 mx-auto bg-highlight"></div>
    </div>
  );
}