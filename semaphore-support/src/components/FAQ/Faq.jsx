import FaqCard from "./FaqCard"; 
const Faq = () => {

  const faqs = [
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office"
    },
    {
      question: "Where are the refreshments being provided?",
      answer: "The refreshments are being provided in Sri Durga canteen "
    },
    {
      question: "Whom should i contact if there is any technical issues?",
      answer: "give up"
    }
  ];

  return (
    <div className="w-full bg-dominant">
    <div className="max-w-2xl mx-auto p-4 w-full">
    <div className="w-full flex justify-center">

      <h1 className="text-2xl font-bold text-accent  mb-6 m-auto">Frequently Asked Questions</h1>
    </div>
      {faqs.map((faq, index) => (
        <FaqCard
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
    </div>
  );
};

export default Faq;