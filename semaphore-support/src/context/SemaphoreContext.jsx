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
      faqPage: {
        heading: "Frequently Asked Questions",
        subHeading: "Everything you need to know in one place",
      },
      eventPage: {
        heading: "Event Details",
        subHeading: "Location,Timings,Rules and Contacts",
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
  const eventData = [
    {
      eventName: "Suprise Event",
      info: {
        locationAndTime: [
          "Venue: Computer Lab A, Ground Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "No of participants = 2 , No of rounds = 3",
          "Mystery unveiled on the spot (Suprise bonus alert)",
          "Brain over Battery (no Electronic Gadgets)",
          "Time based challenges will be used",
          "Judges’ decisions are final, no discussions. Fair play only",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "Dance",
      info: {
        locationAndTime: [
          "Venue: Computer Lab B, First Floor",
          "Event starts at 11:00 AM and ends at 2:00 PM",
          "Participants must check in by 10:30 AM",
        ],
        rules: [
          "The team must have a minimum of 4 members and a maximum of 8 members.",
          "The time limit is 4+1. Timing starts as soon as the team enters the stage.",
          "Music will be stopped after the time limit. Marks will be deducted for exceeding the time limit.",
          "Any dance style is allowed, including Eastern, Western, or Fusion.",
          "Performances must not contain any vulgarity, offensive gestures, or content targeting any community or religion.",
          "No extra preparation time will be given on stage.",
          "Props are allowed but must be safe and manageable by the team. Participants are responsible for bringing and handling their own props.",
          "Teams must submit their audio track in MP3 format 2 days before the event.",
          "The decision of the judges will be final.",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "Coding",
      info: {
        locationAndTime: [
          "Venue: Computer Lab C, 2nd Floor",
          "Event starts at 1:00 PM and ends at 2:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "3 Rounds , 2 Members per Team",
          " Basic knowledge of C/C++, Java, Python, and JavaScript is required (questions can be from any of these).",
          "Good understanding of Computer Science fundamentals is required.",
          "Experience in Data Structures & Algorithms and basic competitive coding is necessary.",
          "Rules for each round will be explained on the spot.",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
      
    },
   
    {
      eventName: "WEB DESIGN",
      info: {
        locationAndTime: [
          "Venue: Computer Lab A, Ground Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "No of participants = 2 , No of rounds = 3",
          "Participants must have knowledge in HTML, CSS, and JavaScript.",
          "The rounds and design tasks will be provided on the spot.",
          "Electronic gadgets are not allowed.",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "Start Up",
      info: {
        locationAndTime: [
          "Venue: Computer Lab 7, Ground Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "The event will have 2 rounds, with teams of 2 participants each.",
          "Participants must bring their own laptops to create and pitch their ideas.",
          "For the 1st round, each team will prepare and present their startup idea using a single slide.",

        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "TECH TALK",
      info: {
        locationAndTime: [
          "Venue: Computer Lab A, Ground Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "Number of participants: 1 , Number of rounds: 2",
          "The topic for each round will be disclosed a few minutes before the round begins.",
          "Judges’ decisions are final and binding. No objections or disputes will be entertained.",
          "Participants must always maintain a respectful and professional demeanour.",
          "Use of offensive language, inappropriate content, cheating, or disrespectful behaviour will result in immediate disqualification.",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "Photography",
      info: {
        locationAndTime: [
          "Venue: Computer Lab A, Ground Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "Per team 1 participant.",
          "Participant should have photography and videography knowledge.",
          "DSLR can be used.",
        ],
        heads: [
          "Alice Johnson - Contact No. 9876543210",
          "Bob Smith - Contact No. 8765432109",
        ],
      },
    },
    {
      eventName: "IT Manager",
      info: {
        locationAndTime: [
          "Venue: Computer Lab V, 8th Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "Per team 1 participant.",
          "Participants must report on time for all rounds with their own laptops.",
          "Judges’ decisions are final and cannot be challenged.",
          "No communication or teamwork is allowed during rounds.",
          "Cheating or unfair means will lead to disqualification.",
          "Participants are not allowed to join any other event.",
        ],
        heads: [
        "Alice Johnson - Contact No. 9876543210",
        "Bob Smith - Contact No. 8765432109",
      ],
      },
      
    },
    {
      eventName: "Game : Valorant ",
      info: {
        locationAndTime: [
          "Venue: Computer Lab V, 10th Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "4 make a team",
          "Participants should bring their laptops and other necessary equipment.",
          "Any use of hacking will result to disqualification.",
          "Participants should bring their own ethernet adapter if their laptop doesn’t have ethernet port",
        ],
        heads: [
        "Alice Johnson - Contact No. 9876543210",
        "Bob Smith - Contact No. 8765432109",
      ],
      },
      
    },
    {
      eventName: "IT Quiz",
      info: {
        locationAndTime: [
          "Venue: Computer Lab V, 8th Floor",
          "Event starts at 10:00 AM and ends at 4:00 PM",
          "Participants must check in by 9:30 AM",
        ],
        rules: [
          "Number of participants = 2 ,Number of rounds = 4",
          "Questions will be based on general knowledge, technical, and programming topics.",
          "No electronic gadgets are allowed.",
          "The quiz master's decision is final.",
          "Use of unfair means will lead to disqualification.",

        ],
        heads: [
        "Alice Johnson - Contact No. 9876543210",
        "Bob Smith - Contact No. 8765432109",
      ],
      },
      
    },




  ];

  return (
    <SemaphoreContext.Provider
      value={{
        titles,
        navItems,
        faqData,
        eventData,
      }}
    >
      {children}
    </SemaphoreContext.Provider>
  );
};

export { SemaphoreContext, SemaphoreContextProvider };
