import FaqCard from "./FaqCard"; 
const Faq = () => {

  const faqs = [
    {
      question: "What should I do ,if I lose my Id",
      answer: "You will be provided with the replacement in the office"
    },
    {
      question: "Where are the refreshments being provided",
      answer: "The refreshments are being provided in Sri Durga canteen "
    },
    {
      question: "What should I do ,if I can't think of any other question",
      answer: "give up"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
    <div className="w-full flex justify-center">

      <h1 className="text-2xl font-bold text-highlight mb-6 m-auto">Frequently Asked Questions</h1>
    </div>
      {faqs.map((faq, index) => (
        <FaqCard
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Faq;