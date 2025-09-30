import React, { useState } from "react";
import { Link } from "react-router-dom";

function ImgCard({ route, img }) {
  const [loading, setLoading] = useState(true);

  return (
    <Link to={route}>
      <div className="relative border-2 border-black/10 max-w-100 rounded-lg overflow-hidden shadow-lg outline-2 outline-offset-2 outline-black/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <svg
              className="animate-spin h-10 w-10 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
        )}

        <img
          src={img}
          alt={route}
          className={`w-full h-56 object-cover transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
        />
      </div>
    </Link>
  );
}

export default ImgCard;
