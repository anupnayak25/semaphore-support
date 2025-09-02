import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FaqCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dominant  border border-blue-900 rounded-lg p-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left focus:outline-none   rounded "
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <h3 className="text-accent font-medium text-sm sm:text-base pr-2">
          {question}
        </h3>
        <ChevronRight 
          className={`text-highlight w-5 h-5 flex-shrink-0 transition-transform delay-100 duration-500 ease-out ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        />
      </button>
      
      <div className={`overflow-hidden transition-all delay-100 duration-500 ease-out ${
        isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
      }`}>
        <p className="text-blue-900 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};
export default FaqCard;
