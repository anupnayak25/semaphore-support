import { useState } from "react";
import { Copy } from "lucide-react"; // Copy icon from lucide-react

export default function HeadsAndCoordinatorsCard({
  head,
  getInitials,
  copyToClipboard,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-dominant/90 backdrop-blur-md shadow-lg rounded-2xl p-4 sm:p-5 border border-accent/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-dominant/95 w-full max-w-sm">
      <div className="flex items-center gap-4">
        {/* Profile Image - Left Side */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
          {loading && !loaded && !failed && (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dominant border-2 border-accent flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-highlight"></div>
            </div>
          )}

          {failed && (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent border-2 border-highlight flex items-center justify-center text-dominant text-sm sm:text-base font-bold shadow-lg">
              {getInitials(head.name)}
            </div>
          )}

          <img
            src={head.photo}
            alt={`${head.name} - ${head.designation}`}
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent shadow-md transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
            loading="lazy"
            onLoadStart={() => setLoading(true)}
            onLoad={() => {
              setLoaded(true);
              setLoading(false);
            }}
            onError={() => {
              setFailed(true);
              setLoading(false);
            }}
          />
        </div>

        {/* Content - Right Side */}
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-semibold text-accent truncate">
            {head.name}
          </h2>
          {/* Designation (if you want to enable later) */}
          {/* <p className="text-sm text-gray-300 opacity-80">{head.designation}</p> */}
          <div className="flex items-center justify-between mt-1">
            <p className="text-xs sm:text-sm text-gray-300 truncate">
              {head.contact}
            </p>

            {/* Copy Icon Button */}
            <button
              onClick={() => copyToClipboard(head.contact)}
              className="ml-2 p-1.5 rounded-lg border border-accent text-accent hover:bg-accent hover:text-dominant transition-colors duration-200"
              title="Copy phone number"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
