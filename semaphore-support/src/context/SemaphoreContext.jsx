import React from "react";
import {
  Mail,
  AlarmClockCheckIcon,
  BadgeQuestionMarkIcon,
  CalendarCheck2Icon,
} from "lucide-react";
const SemaphoreContext = React.createContext();

const SemaphoreContextProvider = ({ children }) => {
  const titles = {
    program: {
      heading: "Semaphore 2025",
      subHeading: "Organized by SAMCA,Nitte",
    },
    pages: {
      faq: {
        heading: "Frequently Asked Questions",
        subHeading: "Everything you need to know in one place",
      },
    },
  };
  const navItems = [
    { icon: CalendarCheck2Icon, name: "Events", route: "/Events" },
    { icon: AlarmClockCheckIcon, name: "Timings", route: "/Timings" },
    { icon: BadgeQuestionMarkIcon, name: "FAQ", route: "/FAQ" },
    {
      icon: Mail,
      name: "Heads and Co-ordinators",
      route: "/HeadsAndCoordinators",
    },
  ];
  const faqData = [
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "Where are the refreshments being provided?",
      answer: "The refreshments are being provided in Sri Durga canteen ",
    },
    {
      question: "Whom should i contact if there is any technical issues?",
      answer: "give up",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    {
      question: "What should I do ,if I lose my Id?",
      answer: "You will be provided with the replacement in the office",
    },
    
  ];


  return (
    <SemaphoreContext.Provider
      value={{
        titles,
        navItems,
        faqData,
      }}
    >
      {children}
    </SemaphoreContext.Provider>
  );
};

export { SemaphoreContext, SemaphoreContextProvider };
