import { useState } from "react";

export default function HeadCard({ head, getInitials, copyToClipboard }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-dominant/80 backdrop-blur-sm shadow-lg rounded-2xl p-4 sm:p-6 border border-accent hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-dominant/90">
      {/* Profile Image */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
        {loading && !loaded && !failed && (
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-dominant border-2 border-accent flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-highlight"></div>
          </div>
        )}

        {failed && (
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent border-2 border-highlight flex items-center justify-center text-dominant text-sm sm:text-lg font-bold shadow-lg">
            {getInitials(head.name)}
          </div>
        )}

        <img
          src={head.photo}
          alt={`${head.name} - ${head.designation}`}
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-accent shadow-md transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
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

      {/* Content */}
      <div className="text-center space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-highlight">
          {head.name}
        </h2>

        <div className="space-y-1">
          <p className="text-accent font-medium text-xs sm:text-sm">
            {head.designation}
          </p>
          <p className="text-gray-500 text-xs leading-relaxed px-2">
            {head.description}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-3 flex flex-col items-center gap-2">
          <p className="text-xs text-accent font-mono">{head.contact}</p>
          <button
            onClick={() => copyToClipboard(head.contact)}
            className="px-3 py-1.5 bg-accent text-dominant hover:bg-highlight hover:text-dominant text-xs rounded-md transition-colors duration-200 flex items-center gap-1"
            title="Copy phone number"
          >
            <span>📋</span> Copy
          </button>
        </div>
      </div>
    </div>
  );
}
