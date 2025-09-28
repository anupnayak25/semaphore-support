import React from "react";
import {
  Sparkles,
  Music,
  Code2,
  Layout,
  Rocket,
  Mic,
  Camera,
  BriefcaseBusiness,
  Gamepad2,
  CircleHelp,
  AlarmClockCheckIcon,
  BadgeQuestionMarkIcon,
  CalendarCheck2Icon, MapPinIcon,
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
      timingsPage: {
        heading: "Semaphore Schedule",
        subHeading: ""
      },
      locationPage: {
        heading: "Places and Locations",
        subHeading: "Find all Places and Locations here",
      },
    },
  };
  const navItems = [
    { icon: CalendarCheck2Icon, name: "Events", route: "/Events" },
    { icon: AlarmClockCheckIcon, name: "Schedule", route: "/Timings" },
    { icon: BadgeQuestionMarkIcon, name: "FAQ", route: "/FAQ" },
    { icon: MapPinIcon, name: "Map", route: "/Map" },
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
      eventName: "Spectra flux",
      secondaryName: "suprise event",
      img:'event_logos/sf.png',
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
          "K Kavyashree Karanth - Contact No. 7019361906",
          "Shetty Shamitha Vasanth - Contact No. 8884311489",
        ],
      },
    },
    {
      eventName: "Rhythm Hack",
      secondaryName: "Dance",
      img: '/event_logos/rhdance.png',
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
          "Shrajan G Shetty - Contact No. 8105643829",
          "Shivani D S - Contact No. 6363860880",
        ],
      },
    },
    {
      eventName: "cryptix",
      secondaryName: "Coding",
      img: '/event_logos/coding.png',
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
          "Prajwal - Contact No. 8296697351",
          "Rashmi - Contact No. 9591870457",
        ],
      },
    },
    {
      eventName: "design riot",
      secondaryName: "WEB DESIGN",
      img:'/event_logos/dr.png',
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
          "Maneesh Kumar - Contact No. 8792489207",
          "Anvith Shetty - Contact No. 7204947177",
        ],
      },
    },
    {
      eventName: "hyper launch",
      secondaryName: "start up",
      img: '/event_logos/hl.png',
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
          "Vidyashree - Contact No. 7204471565",
          "J T Akshay Kanna - Contact No. 8310215620",
        ],
      },
    },
    {
      eventName: "techno hive",
      secondaryName: "TECH TALK",
      img: '/event_logos/th.png',
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
          "T Namratha Padiyar - Contact No. 7349652173",
          "Kavya - Contact No. 8762188501",
        ],
      },
    },
    {
      eventName: "cyber scope",
      secondaryName: "Photography",
      img: '/event_logos/cyberscope.png',
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
          "Saketh - Contact No. 9353470536",
          "Ranjith Raj - Contact No. 7337756754",
        ],
      },
    },
    {
      eventName: "cyborg recruit",
      secondaryName: "IT Manager",
      img: '/event_logos/cr.png',
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
          "A Samved Rao - Contact No. 7204551543",
          "Vrashika - Contact No. 6360432266",
        ],
      },
    },
    {
      eventName: "rampage horizon",
      secondaryName: "Valorant ",
      img: '/event_logos/rh.png',
      info: {
        locationAndTime: [
          "Venue -MCA Lab 02 & Lab 04 - Rajaram block 2 nd floor",
          "Day 1: 02:00 PM – 03:00 PM (Lab 02 & Lab 04)",
        ],
        rules: [
          "4 make a team",
          "Participants should bring their laptops and other necessary equipment.",
          "Any use of hacking will result to disqualification.",
          "Participants should bring their own ethernet adapter if their laptop doesn’t have ethernet port",
        ],
        heads: [
          "Shujan - Contact No. 6360491384",
          "Lawrence Linesh Quadras - Contact No. 6360119517",
        ],
      },
    },
    {
      eventName: "neon nexus",
      secondaryName: "IT Quiz",
      img: '/event_logos/nn.png',
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
          "Yuneeth K - Contact No. 9741125023",
          "Adarsh Gogate - Contact No. 7619338271",
        ],
      },
    },
  ];



  //Event Heads Data(HeadsInfo)

  const headsData = [
    {
      id: 1,
      name: "Anup Nayak",
      designation: "Technical Co-ordinator",
      event: "Event",
      photo: "/",
      contact: "9480220586"
    },
    {
      id: 2,
      name: "Kiran",
      designation: "President ",
      event: "Event",
      photo: "/",
      contact: "8277463806"

    },
    {
      id: 3,
      name: "Anvith shetty",
      designation: "",
      event: "Event",
      photo: "/",
      contact: "7204947177"
    },

  ];

  const scheduleData = {
    day1Schedule: [
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
    day2Schedule: [
      { time: '09:30 AM', event: 'Morning Briefing' },
      { time: '10:00 AM', event: 'Technical Presentation' },
      { time: '11:15 AM', event: 'Q&A Session' },
      { time: '12:00 PM', event: 'Group Activity' },
      { time: '01:00 PM', event: 'Lunch & Networking' },
      { time: '02:15 PM', event: 'Workshop Session B' },
      { time: '03:45 PM', event: 'Final Presentations' },
      { time: '05:00 PM', event: 'Closing Ceremony' }
    ],
  }
  const locationData = [
    {
      venue: "NMAMIT",
      location: "Nitte, SH1, Karkala, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/v8JkvcoGG9CTSgCi6",
    },
    {
      venue: "SMV Block, NMAMIT",
      location: "5WMM+2CC NMAMIT, Nitte, Kalya, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/hRM8cCqE9k74bPdo9",
    },
    {
      venue: "Sambhram Hall",
      location: "5WMM+7M4, SH1, Kalya, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/UjwFAjqsFrvBHXpPA",
    },
    {
      venue: "B C Alva Memorial Indoor Stadium",
      location: "5WMQ+2GC, near NET Gents hostel, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/1moKKSW89D2NW1PJ6",
    },

    {
      venue: "Sanmathi",
      location: "Sanmathi Cafe and Park (K B)",
      locationLink: "https://maps.app.goo.gl/BkUXs4hrhzR5W7816",
    },

    {
      venue: "B.C Alva Sports Complex",
      location: "5WJP+343, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/B41EqoZDRdr8KevQA",
    },

  ];
  const generalRules = [
    "A team should consist of a maximum of 16 members.",
    "The fest is open to all MCA students.",
    "Teams must confirm their participation through our website [ semaphore2k25.in ].",
    "The registration fee is ₹2025 per team.",
    "All participants must be present before 9:00 AM.",
    "A team must participate in all events to be eligible for the Overall Championship.",
    "IT Manager and Photography participants cannot join other events, while Dance participants may join any events except IT Manager and Photography.",
    "Participants are required to produce their college ID on the fest day.",
    "All participants must be available on campus for both days of the event.",
    "The department/convenor reserves the right to take action in case of any misconduct.",
    "The decisions of the judges will be final and binding.",
    "For any issues regarding the payment of registration fees, please contact the core committee members.",
    "A cash prize and trophy will be awarded to the overall champions and runners-up.",
    "Participants must bring a permission letter from their respective colleges.",
    "Participants must bring accessories such as pens, laptops, chargers, etc., themselves.",

  ];

  return (
    <SemaphoreContext.Provider
      value={{
        titles,
        navItems,
        faqData,
        eventData,
        scheduleData,
        headsData,
        locationData,
        generalRules,
      }}
    >
      {children}
    </SemaphoreContext.Provider>
  );
};

export { SemaphoreContext, SemaphoreContextProvider };
