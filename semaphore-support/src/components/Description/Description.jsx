import { QuoteIcon } from "lucide-react";

const Description = ({ 
  title = "Welcome to TechCon 2024", 
  content = "Join us for an incredible two-day journey through the latest innovations in technology, networking opportunities with industry leaders, and hands-on workshops that will enhance your skills and expand your horizons.", 
}) => {
  return (
    <div className="p-6 bg-dominant rounded-lg shadow-sm  max-w-4xl mx-auto flex flex-col">
      <h2 className="text-3xl font-bold text-accent mb-4 text-center">
        {title}
      </h2>
      
      <div className="relative">
        <QuoteIcon className="text-accent rotate-180 mb-2" size={24} />
        
        <p className="text-accent/90 leading-relaxed text-center px-8 py-4">
          <span className="italic">{content}</span>
        </p>
        
        <div className="flex justify-end">
          <QuoteIcon className="text-accent mt-2" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Description;