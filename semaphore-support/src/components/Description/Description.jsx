import React, { useContext } from "react";
import { SemaphoreContext } from "../../context/SemaphoreContext.jsx";

export default function Description() {
  const { semaphore } = useContext(SemaphoreContext);
  const description =
    "Join us for Semaphore 2025, an innovative gathering that brings together forward-thinking individuals, industry leaders, and creative minds to explore the signals that shape our future.";
  return (
    <div className="min-h-screen py-16 px-6 bg-dominant">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-accent">
            {semaphore}
          </h1>

          <div className="w-full h-1 mx-auto mb-12 bg-highlight"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-dominant rounded-lg shadow-lg p-8 md:p-12 ">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-center text-accent">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
