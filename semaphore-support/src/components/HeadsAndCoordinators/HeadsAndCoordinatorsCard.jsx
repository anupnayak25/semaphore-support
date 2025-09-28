import { useState } from "react";
import { Copy, Phone } from "lucide-react";

export default function HeadsAndCoordinatorsCard({ head, getInitials }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleCopy = async (contact) => {
    try {
      await navigator.clipboard.writeText(contact);
      setPopupMessage("Number copied!");
      setTimeout(() => setPopupMessage(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      setPopupMessage("Failed to copy!");
      setTimeout(() => setPopupMessage(""), 2000);
    }
  };

  return (
    <div className="relative bg-dominant/90 backdrop-blur-md shadow-md hover:shadow-xl 
                    rounded-2xl p-5 border border-accent/30 
                    transition-all duration-300 hover:scale-[1.02] hover:bg-dominant/95 
                    w-full max-w-sm">

      {/* Card Content */}
      <div className="flex items-center gap-4">

        {/* Profile Image */}
        <div className="relative w-16 h-16 flex-shrink-0">
          {loading && !loaded && !failed && (
            <div className="w-16 h-16 rounded-full bg-dominant border-2 border-accent 
                            flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-highlight"></div>
            </div>
          )}

          {failed && (
            <div className="w-16 h-16 rounded-full bg-accent border-2 border-highlight 
                            flex items-center justify-center text-white text-lg font-bold shadow-md">
              {getInitials(head.name)}
            </div>
          )}

          <img
            src={head.photo}
            alt={`${head.name} - ${head.designation}`}
            className={`w-16 h-16 rounded-full object-cover border-2 border-accent shadow-md 
                        transition-opacity duration-300 
                        ${loaded ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
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

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-accent leading-tight truncate">
            {head.name}
          </h2>

          <p className="text-sm text-accent/80 leading-tight truncate">
            {head.designation}
          </p>

          {/* Contact & Buttons */}
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm text-accent truncate">{head.contact}</p>

            <div className="flex gap-2">
              {/* Copy Button */}
              <button
                onClick={() => handleCopy(head.contact)}
                className="p-1.5 rounded-md border border-accent text-accent 
                           hover:border-blue-500 hover:text-blue-500 
                           hover:shadow-[0_0_8px_rgba(59,130,246,0.7)]
                           transition-all duration-200"
                title="Copy phone number"
              >
                <Copy className="w-4 h-4" />
              </button>

              {/* Call Button */}
              <a
                href={`tel:${head.contact}`}
                className="p-1.5 rounded-md border border-green-600 text-green-600 
                           hover:bg-green-600 hover:text-white 
                           hover:shadow-[0_0_8px_rgba(34,197,94,0.7)]
                           transition-all duration-200"
                title="Call now"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Message */}
      {popupMessage && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-accent to-highlight 
                        text-white px-3 py-1.5 rounded-lg shadow-lg 
                        font-medium text-xs sm:text-sm animate-slideFade">
          {popupMessage}
        </div>
      )}

      {/* Animation */}
      <style>
        {`
          @keyframes slideFade {
            0% { opacity: 0; transform: translateY(-8px); }
            15% { opacity: 1; transform: translateY(0); }
            85% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-8px); }
          }
          .animate-slideFade {
            animation: slideFade 2s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
}
