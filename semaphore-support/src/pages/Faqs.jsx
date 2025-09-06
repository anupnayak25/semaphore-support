import FaqCard from "../components/FAQ/FaqCard";
import Heading from "../components/Heading/Heading";
import { useContext } from "react";
import { SemaphoreContext } from "../context/SemaphoreContext";
const Faq = () => {
  
  const { titles ,faqData} = useContext(SemaphoreContext);

  return (
    <div className="w-full bg-dominant min-h-screen">
    <Heading
          heading={titles.pages.faqPage.heading}
          subheading={titles.pages.faqPage.subHeading}
        />
      <div className="max-w-4xl mx-auto p-4 w-full">

        {faqData.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
