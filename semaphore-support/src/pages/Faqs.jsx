import FaqCard from "../components/FAQ/FaqCard";
import Heading from "../components/Heading/Heading";
import { useContext, useState, useMemo } from "react";
import { SemaphoreContext } from "../context/SemaphoreContext";
import { Search, X } from "lucide-react";

const Faq = () => {
  const { titles, faqData } = useContext(SemaphoreContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search query
  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return faqData;
    
    return faqData.filter((faq) => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [faqData, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full bg-dominant min-h-screen">
      <Heading
        heading={titles.pages.faqPage.heading}
        subheading={titles.pages.faqPage.subHeading}
      />
      
      <div className="max-w-4xl mx-auto p-4 w-full">
        {/* Search Bar */}
        <div className="mb-8 relative ">
          <div className="relative m-auto w-full flex justify-center">
            <Search className="relative left-6  top-6 transform -translate-y-1/2 text-accent w-5 h-5 " />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-7/8 pl-10 pr-10 py-3 
                         bg-transparent border border-accent 
                         rounded-4xl text-accent placeholder-accent/60
                         focus:outline-none focus:ring-2 focus:ring-accent/50 
                         focus:border-accent/40
                         transition-all duration-200 "
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 
                           text-accent/60 hover:text-accent
                           transition-colors duration-200"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-4 text-accent/80">
            {filteredFaqs.length === 0 ? (
              <p>No FAQs found for "{searchQuery}"</p>
            ) : (
              <p>
                {filteredFaqs.length} FAQ{filteredFaqs.length !== 1 ? 's' : ''} found 
                {filteredFaqs.length !== faqData.length && ` for "${searchQuery}"`}
              </p>
            )}
          </div>
        )}

        {/* FAQ Cards */}
        {filteredFaqs.length === 0 && searchQuery ? (
          <div className="text-center py-12">
            <div className="text-accent/60 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium">No results found</h3>
              <p className="text-sm">Try searching with different keywords</p>
            </div>
            <button
              onClick={handleClearSearch}
              className="mt-4 px-4 py-2 bg-accent text-dominant rounded-lg
                         hover:bg-accent/90 transition-colors duration-200"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FaqCard key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;