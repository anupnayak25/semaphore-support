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
      timingsPage:{
        heading:"Semaphore Schedule",
        subHeading:""
      },
      headsPage: {
        heading: "Heads and Co-ordinators",
        subHeading: "Contact for any event related queries",
      },
    },
  };
  const navItems = [
    { icon: CalendarCheck2Icon, name: "Events", route: "/Events" },
    { icon: AlarmClockCheckIcon, name: "Schedule", route: "/Timings" },
    { icon: BadgeQuestionMarkIcon, name: "FAQ", route: "/FAQ" },
    {
      icon: Mail,
      name: "Heads and Co-ordinators",
      route: "/HeadsAndCoordinators",
    },
  ];
  const faqData = [
    {
      question: "Where is Cyborg Recruit taking place?",
      answer: "Venue - MCA Seminar Hall- Ramanujan block 4th floor ",
    },
    {
      question: "At what time is Cyborg Recruit on Day 1?",
      answer: "Day 1: 11:00 AM  12:00 PM & 02:00 PM  03:00 PM  ",
    },
    {
      question: "At what time is Cyborg Recruit on Day 2?",
      answer: "Day 2: 09:00 AM  01:00 PM & 02:00 PM  03:00 PM ",
    },
    {
      question: "Where is Cyber Scope happening?",
      answer: "Venue - sowparnika Hall ",
    },
    {
      question: "At what time is Cyber Scope on Day 1?",
      answer: "Day 1: 11:00 AM  12:00 PM & 03:00 PM  04:00 PM (Sowparnika Hall)",
    },
    {
      question: "When does Cyber Scope happen on Day 2?",
      answer: "Day 2: 09:00 AM  01:00 PM (Sowparnika Hall)",
    },
    {
      question: "Where is Rhythm Hack being conducted?",
      answer: "Venue : Sambram Auditorium",
    },
    {
      question: "At what time is Rhythm Hack?",
      answer: "Day 1: 11:00 AM  12:00 PM (Sambram Auditorium)",
    },
    {
      question: "Where is Neon Nexus scheduled?",
      answer: "Venue-SMV  NC 12  1 st floor & NC 36 3rd floor ",
    },
    {
      question: "At what time is Neon Nexus on Day 1?",
      answer: "Day 1: 02:00 PM  03:00 PM ",
    },
    {
      question: "At what time is Neon Nexus on Day 2?",
      answer: "Day 2: 09:00 AM  01:00 PM ",
    },
    {
      question: "Where is Spectra Flux happening?",
      answer: "Venue -LH 402-Ramanujan Block 4th floor ",
    },
    {
      question: "When is Spectra Flux on Day 1?",
      answer: "Day 1: 02:00 PM  03:00 PM (LH 402-Ramanujan Block 4th floor )",
    },
    {
      question: "When is Spectra Flux on Day 2?",
      answer: "Day 2: 09:00 AM  01:00 PM (LH 402 )",
    },
    {
      question: "Where is Cryptix being held?",
      answer: "Venue - MCA Lab 03-Rajaram block 2nd floor ",
    },
    {
      question: "Which MCA Lab is assigned for Cryptix?",
      answer: "Day 1: 02:00 PM  03:00 PM ",
    },
    {
      question: "At what time is Cryptix scheduled?",
      answer: "Day 2: 09:00 AM  01:00 PM ",
    },
    {
      question: "Where is Design Riot conducted?",
      answer: "Venue -MCA Lab 01 - Rajaram block 2nd floor",
    },
    {
      question: "What time is Design Riot on Day 1?",
      answer: "Day 1: 02:00 PM  03:00 PM",
    },
    {
      question: "What time is Design Riot on Day 2?",
      answer: "Day 2: 09:00 AM – 01:00 PM ",
    },
    {
      question: "Where is Hyper Launch taking place?",
      answer: "Venue -Nandini Hall",
    },
    {
      question: "At what time is Hyper Launch happening?",
      answer: "Day 1: 02:00 PM  03:00 PM ",
    },
    {
      question: "At what time is Hyper Launch happening?",
      answer: "Day 2: 09:00 AM  01:00 PM & again 02:00 PM  03:00 PM",
    },
    {
      question: "Where is Techno Hive happening?",
      answer: "Day 1: 02:00 PM  03:00 PM ",
    },
    {
      question: "At what time is Techno Hive scheduled?",
      answer: "Day 2: 09:00 AM  01:00 PM",
    },
    {
      question: "Where is Rampage Horizon scheduled?",
      answer: "Venue -MCA Lab 02 & Lab 04 - Rajaram block 2 nd floor",
    },
    {
      question: "At what time is Rampage Horizon happening?",
      answer: "Day 1: 02:00 PM  03:00 PM (Lab 02 & Lab 04)",
    },
    {
      question: "Where is the inauguration ceremony happening?",
      answer: "Day 1 - 9:00 AM at Sambram Auditorium-Ramanujan block ground floor",
    },
    {
      question: "At what time is the inauguration of Semaphore?",
      answer: "Day 1 - 9:00 AM at Sambram Auditorium-Ramanujan block ground floor",
    },
    {
      question: "Where is the valedictory function happening?",
      answer: "Day 2, 03:00 PM onwards at Sambram Auditorium-Ramanujan block ground floor",
    },
    {
      question: "At what time is the valedictory ceremony?",
      answer: "Day 2, 03:00 PM onwards ",
    },
    {
      question: "Which hall is used for valedictory?",
      answer: "Sambram Auditorium-Ramanujan block ground floor",
    },

  ];
  const eventData = [
    {
      eventName:"Spectra flux",
      secondaryName: "suprise event",
      info: {
        locationAndTime: [
          "Venue -LH 402-Ramanujan Block 4th floor ",
          "Day 1: 02:00 PM – 03:00 PM",
          "Day 2: 09:00 AM – 01:00 PM",
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
      eventName: "Rhythm Hack",
      secondaryName: "Dance",
      info: {
        locationAndTime: [
          "Venue: Sambram Auditorium",
          "Day 1: 11:00 AM – 12:00 PM",
          
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
       eventName: "cryptix",
      secondaryName: "Coding",
      info: {
        locationAndTime: [
          "Venue- MCA Lab 03-Rajaram block 2nd floor ",
          "Day 1: 02:00 PM – 03:00 PM ",
          "Day 2: 09:00 AM – 01:00 PM",
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
      eventName: "design riot",
      secondaryName: "WEB DESIGN",
      info: {
        locationAndTime: [
          "Venue -MCA Lab 01 - Rajaram block 2nd floor",
          "Day 1: 02:00 PM – 03:00 PM",
          "Day 2: 09:00 AM – 01:00 PM ",
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
      eventName: "hyper launch",
      secondaryName: "start up",
      info: {
        locationAndTime: [
          "Venue -Nandini Hall",
          "Day 1: 02:00 PM – 03:00 PM ",
          "Day 2: 09:00 AM – 01:00 PM & again 02:00 PM – 03:00 PM",
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
      eventName: "techno hive",
      secondaryName: "TECH TALK",
      info: {
        locationAndTime: [
          "Venue -Shambhavi Hall",
          "Day 1: 02:00 PM – 03:00 PM",
          "Day 2: 09:00 AM – 01:00 PM",
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
      eventName: "cyber scope",
      secondaryName: "Photography",
      info: {
        locationAndTime: [
          "Venue - sowparnika Hall",
          "Day 1: 11:00 AM – 12:00 PM & 03:00 PM – 04:00 PM",
          "Day 2: 09:00 AM – 01:00 PM",
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
      eventName: "cyborg recruit",
      secondaryName: "IT Manager",
      info: {
        locationAndTime: [
          "Venue - MCA Seminar Hall- Ramanujan block 4th floor ",
          "Day 1: 11:00 AM – 12:00 PM & 02:00 PM – 03:00 PM",
          " Day 2: 09:00 AM – 01:00 PM & 02:00 PM – 03:00 PM",
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
      eventName: "rampage horizon",
      secondaryName: "Game : Valorant ",
      info: {
        locationAndTime: [
          "Venue -MCA Lab 02 & Lab 04 - Rajaram block 2 nd floor",
          "Day 1: 02:00 PM – 03:00 PM (Lab 02 & Lab 04)"
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
      eventName: "neon nexus",
      secondaryName: "IT Quiz",
      info: {
        locationAndTime: [
          "Venue-SMV  NC 12  1 st floor & NC 36 3rd floor",
          " Day 1: 02:00 PM – 03:00 PM ",
          "Day 2: 09:00 AM – 01:00 PM",
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

  //Event Heads Data(HeadsInfo)

  const headsData = [
    {
      id: 1,
      name: "Rahul Shetty",
      designation: "Surprise Event Head",
      event: "Surprise Event",
      photo: "/images/IMG_0619-1.JPG",
      contact: "9880897965"
    },
    {
      id: 2,
      name: "Ananya Gupta",
      designation: "Dance Head",
      event: "Dance",
      photo: "/images/197.jpg",
      contact: "9876512345",
     
    },
    {
      id: 3,
      name: "Arjun Mehta",
      designation: "Coding Event Head",
      event: "Coding",
      photo: "/images/197.jpg",
      contact: "9123456789",
     
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Startup Pitch Head",
      event: "Startup Pitch",
      photo: "/images/197.jpg",
      contact: "9988766554",
     
    },
    {
      id: 5,
      name: "Sanjana Rao",
      designation: "Tech Talk Head",
      event: "Tech Talk",
      photo: "/images/197.jpg",
      contact: "9123422334",
     
    },
    {
      id: 6,
      name: "Rohit Verma",
      designation: "Photography Head",
      event: "Photography",
      photo: "/images/197.jpg",
      contact: "9777788990",
     
    },
    {
      id: 7,
      name: "Sneha Nair",
      designation: "IT Manager",
      event: "IT Management",
      photo: "/images/197.jpg",
      contact: "9666644556",
     
    },
    {
      id: 8,
      name: "Vikram Singh",
      designation: "Valorant (Gaming) Head",
      event: "Gaming",
      photo: "/images/197.jpg",
      contact: "9333322110",
      
    },
    {
      id: 9,
      name: "Priya Sharma",
      designation: "IT Quiz Head",
      event: "IT Quiz",
      photo: "/images/priya.jpg",
      contact: "9555566778",
     
    },
    {
      id: 10,
      name: "Suprith Sharma",
      designation: "IT Quiz Head",
      event: "IT Quiz",
      photo: "/images/priya.jpg",
      contact: "9555566778",
     
    },
  ];
  const scheduleData={
    day1Schedule : [
        { time: '09:00 AM', event: 'Opening Ceremony' },
        { time: '10:00 AM', event: 'Keynote Speech' },
        { time: '11:30 AM', event: 'Coffee Break' },
        { time: '12:00 PM', event: 'Panel Discussion' },
        { time: '01:30 PM', event: 'Lunch Break' },
        { time: '02:30 PM', event: 'Workshop Session A' },
        { time: '04:00 PM', event: 'Networking Session' },
        { time: '05:00 PM', event: 'Day 1 Closing' }
      ],
    
      // Day2 schedule data
      day2Schedule : [
        { time: '09:30 AM', event: 'Morning Briefing' },
        { time: '10:00 AM', event: 'Technical Presentation' },
        { time: '11:15 AM', event: 'Q&A Session' },
        { time: '12:00 PM', event: 'Group Activity' },
        { time: '01:00 PM', event: 'Lunch & Networking' },
        { time: '02:15 PM', event: 'Workshop Session B' },
        { time: '03:45 PM', event: 'Final Presentations' },
        { time: '05:00 PM', event: 'Closing Ceremony' }
      ]
  }

  return (
    <SemaphoreContext.Provider
      value={{
        titles,
        navItems,
        faqData,
        eventData,
        scheduleData,
        headsData
      }}
    >
      {children}
    </SemaphoreContext.Provider>
  );
};

export { SemaphoreContext, SemaphoreContextProvider };
