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
        subHeading: "Plan your participation across multiple events"
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
      answer: "Venue - MCA Seminar Hall- Ramanujan block 4th floor & SAMBRAM AUDITORIUM",
    },
    {
      question: "At what time is Cyborg Recruit on Day 1?",
      answer: "Day 1: 11:00 AM  12:00 PM & 02:00 PM  04:00 PM  ",
    },
    {
      question: "At what time is Cyborg Recruit on Day 2?",
      answer: "Day 2: 09:00 AM  12:30 PM & 02:00 PM  03:30 PM ",
    },
    {
      question: "Where is Cyber Scope happening?",
      answer: "Venue - sowparnika Hall",
    },
    {
      question: "At what time is Cyber Scope on Day 1?",
      answer: "Day 1: 11:00 AM  1:00 PM & 02:00 PM  04:00 PM",
    },
    {
      question: "When does Cyber Scope happen on Day 2?",
      answer: "Day 2: 09:00 AM  01:00 PM",
    },
    {
      question: "Where is Rhythm Hack being conducted?",
      answer: "Venue : Sambram Auditorium",
    },
    {
      question: "At what time is Rhythm Hack? (Day - 1)",
      answer: "Day 1: 11:00 AM  1:00 PM (Sambram Auditorium)",
    },
    {
      question: "Where is Neon Nexus scheduled?",
      answer: "Venue-SMV NC 12  1 st floor & NC 36 3rd floor ",
    },
    {
      question: "At what time is Neon Nexus on Day 1?",
      answer: "Day 1: 02:00 PM  04:00 PM ",
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
      answer: "Day 1: 02:00 PM  04:00 PM (LH 402-Ramanujan Block 4th floor)",
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
      question: "What time is Cryptix on Day 1?",
      answer: "Day 1: 02:30 PM  03:30 PM ",
    },
    {
      question: "What time is Cryptix on Day 2?",
      answer: "Day 2: 09:30 AM  01:00 PM ",
    },
    {
      question: "Where is Design Riot conducted?",
      answer: "Venue -MCA Lab 01 - Rajaram block 2nd floor",
    },
    {
      question: "What time is Design Riot on Day 1?",
      answer: "Day 1: 02:00 PM  04:30 PM",
    },
    {
      question: "What time is Design Riot on Day 2?",
      answer: "Day 2: 09:00 AM – 01:00 PM ",
    },
    {
      question: "Where is Hyper Launch taking place?",
      answer: "Venue -Nandini Seminar Hall",
    },
    {
      question: "At what time is Hyper Launch happening? (Day - 1)",
      answer: "Day 1: 01:30 PM  04:30 PM ",
    },
    {
      question: "At what time is Hyper Launch happening? (Day - 2)",
      answer: "Day 2: 09:00 AM  01:00 PM ",
    },
    {
      question: "Where is Techno Hive happening?",
      answer: "Shambhavi hall ",
    },
    {
      question: "At what time is Techno Hive scheduled? (Day - 1)",
      answer: "Day 1: 02:00 AM  04:00 PM",
    },
    {
      question: "At what time is Techno Hive scheduled? (Day - 2)",
      answer: "Day 2: 10:00 AM  01:00 PM",
    
    },
    {
      question: "Where is Rampage Horizon scheduled?",
      answer: "Venue -MCA Lab 02 & Lab 04 - Rajaram block 2 nd floor",
    },
    {
      question: "At what time is Rampage Horizon happening?",
      answer: "Day 1: 02:00 PM  04:30 PM (Lab 02 & Lab 04)",
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
      img: 'event_logos/sf.png',
      info: {
        locationAndTime: [
          "Venue -LH 402-Ramanujan Block 4th floor ",
          "Day 1: 01:30 PM – 04:30 PM",
          "Day 2: 09:00 AM – 01:00 PM",
        ],
        rules: [
          "No of participants = 2 , No of rounds = 3",
         "On-the-spot mystery challenges with surprise bonuses will be conducted.",
"No electronic gadgets permitted – tasks will be time-bound and test participants’ problem-solving skills.",
"Fair play is mandatory – judges’ decisions are final and binding.",
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
          "Day 1: 11:00 AM – 1:00 PM",
        ],
        rules: [
       "Timing begins once the team enters the stage no extra preparation time will be given.",
"Any dance style (Eastern, Western, or Fusion) is allowed.",
"Performances must avoid vulgarity, offensive gestures, or content against any community or religion.",
"Props are permitted but must be safe and managed by the team.",
"Audio tracks (MP3) must be submitted 2 days prior to the event.",
"Judges’ decisions are final and binding."

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
          "Day 1: 02:30 PM – 04:00 PM ",
          "Day 2: 09:30 AM – 01:00 PM",
        ],
        rules: [
          "3 Rounds , 2 Members per Team",
          "Basic knowledge of C/C++ & Java is required",
"Good understanding of Computer Science fundamentals is required",
"Experience in Data Structures & Algorithms and basic competitive coding is necessary",
"Rules for each round will be explained on the spot"
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
      img: '/event_logos/dr.png',
      info: {
        locationAndTime: [
          "Venue -MCA Lab 01 - Rajaram block 2nd floor",
          "Day 1: 02:00 PM – 04:00 PM",
          "Day 2: 09:00 AM – 01:00 PM ",
        ],
        rules: [
          "No of participants = 2 , No of rounds = 3",
         "Participants must have knowledge in HTML, CSS, and JavaScript.",
"The rounds and design tasks will be provided on the spot.",
"Electronic gadgets are not allowed."
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
          "Venue -Shambhavi Hall",
          "Day 1: 02:00 PM – 04:00 PM ",
          "Day 2: 09:00 AM – 01:00 PM ",
        ],
        rules: [
          "The event will have 2 rounds, with teams of 2 participants each.",
         "Participants must bring their own laptops.",
"The details of each round will be disclosed on the spot.",
"The judges’ decision will be final."

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
          "Venue -Samparnika hall ",
          "Day 1: 02:00 PM – 04:00 PM",
          "Day 2: 10:00 AM – 01:00 PM",
        ],
        rules: [
          "Number of participants: 1 , Number of rounds: 2",
        "Topics will be announced shortly before each round begins.",
"Judges’ decisions are final and not open to dispute.",
"Participants must remain respectful and professional at all times.",
"Any cheating, offensive language, or inappropriate behavior will lead to disqualification."
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
          "Venue -DAY 1 :Research Lab 1 DAY 2:Nandini hall",
          "Day 1: 11:00 AM – 1:00 PM & 02:00 PM – 04:00 PM",
          "Day 2: 09:00 AM – 01:00 PM",
        ],
        rules: [
          "Per team 1 participant &  Number of Rounds : 3",
          "Participant should have photography and videography knowledge DSLR can be used.",
"Photos/videos must be taken strictly within the campus.",
"Drones are not allowed.",
"Participants must bring their own cameras, laptops and pen drives."
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
          "Venue - DAY 1MCA Seminar Hall- Ramanujan block 4th floor & SAMBRAM AUDITORIUM DAY 2-Sambhram hall",
          "Day 1: 11:00 AM – 12:00 PM & 02:00 PM – 04:00 PM",
          " Day 2: 09:00 AM – 12:30 PM & 02:00 PM – 03:30 PM",
        ],
        rules: [
          "Per team 1 participant & Number of Rounds : 3 ",
         "Participants must report on time for all rounds with their own laptops.",
"Judges’ decisions are final and cannot be challenged.",
"No communication or teamwork is allowed during rounds.",
"Cheating or unfair means will lead to disqualification.",
"Participants are not allowed to join any other event."
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
          "Day 1: 02:00 PM – 04:30 PM (Lab 02 & Lab 04)",
          "Day 2: 09:00 PM – 01:00 PM (Lab 02 & Lab 04)",
        ],
        rules: [
          "3 make a team",
         "Game: Valorant",
"Participants need to bring their laptops & other necessary equipment.",
"Any form of hacking, cheating, or using unauthorized third-party tools will lead to immediate disqualification.",
"Organizers will provide network access, but backup internet (mobile hotspot, etc.) is recommended."
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
          " Day 1: 02:00 PM – 04:00 PM ",
          "Day 2: 09:00 AM – 01:00 PM",
        ],
        rules: [
          "Number of participants = 2 ,Number of rounds = 3",
         "Questions will be based on general knowledge, technical, and programming topics.",
"No electronic gadgets are allowed.",
"The quiz master's decision is final.",
"Use of unfair means will lead to disqualification."
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
      name: "DR. ANANTHA MURTHY",
      designation: "SEMAPHORE CONVENOR ",
      event: "Event",
      photo: "/core/ananth_sir.png",
      contact: "82774 63806"

    },
    {
      id: 2,
      name: "K KIRAN",
      designation: "PRESIDENT ",
      event: "Event",
      photo: "/core/kiran.png",
      contact: "82774 63806"

    },
    {
      id: 3,
      name: "RAKSHITHA",
      designation: "SECRETARY",
      event: "Event",
      photo: "/core/rakshitha.png",
      contact: "79759 67009"
    },

    {
      id: 4,
      name: "ANUP NAYAK",
      designation: "TECHNICAL COORDINATOR",
      event: "Event",
      photo: "/core/anup.png",
      contact: "94802 20586"
    },


  ];


  const contextData = {
    schedule: {
      day1: {
        registration: "8:00 AM",
        inauguration: "9:00 AM (SAMBHRAM AUDITORIUM)",
        timeSlots: [
          "11:00 AM TO 12:00 PM",
          "12:00 PM TO 01:00 PM",
          "01:00 TO 02:00",
          "02:00 PM TO 03:00 PM",
          "03:00 PM TO 04:00 PM"
        ],
        events: [
          {
            name: "CYBORG RECRUIT (IT MANAGER)",
            venue: "(MCA SEMINAR HALL)",
            timeSlots: [0, 1, 3, 4], // spans first two slots and last two slots
            colSpan: [2, 2, 2, 2]
          },
          {
            name: "CYBER SCOPE",
            venue: "(RESEARCH LAB 1)",
            timeSlots: [0, 1, 3, 4],
            colSpan: [2, 2, 2, 2]
          },
          {
            name: "RHYTHM HACK(DANCE)",
            venue: "(SAMBRAM AUDITORIUM)",
            timeSlots: [0, 1],
            colSpan: [2, 2]
          },
          {
            name: "NEON NEXUS(IT QUIZ)",
            venue: "(SMV 12 & 36)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "SPECTRA FLUX(SUPRISE EVENT)",
            venue: "(LH 402)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "CRYPTIX(CODING)",
            venue: "(MCA LAB 03)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "DESIGN RIOT(WEB DESIGN)",
            venue: "(MCA LAB 01)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "HYPER LAUNCH(START UP)",
            venue: "(SHAMBHAVI HALL)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "TECHNO HIVE(TECH TALK)",
            venue: "(SOWPARNIKA HALL)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          },
          {
            name: "RAMPAGE HORIZON(VALORANT)",
            venue: "(LAB 02 & LAB 04)",
            timeSlots: [3, 4],
            colSpan: [2, 2]
          }
        ],
        lunchBreak: ["L", "U", "N", "C", "H"]
      },
      day2: {
        registration: "8:00 AM",
        sessionsStart: "9:00 AM",
        timeSlots: [
          "09:00 AM TO 01:00 PM",
          "01:00 PM TO 02:00 PM",
          "02:00 PM TO 03:00 PM"
        ],
        events: [
          {
            name: "CYBORG RECRUIT(IT MANAGER)",
            venue: "(SAMBHRAM HALL)",
            timeSlots: [0, 2],
            colSpan: [1, 1]
          },
          {
            name: "CYBER SCOPE(PHOTOGRAPHY)",
            venue: "(NANDINI HALL)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "NEON NEXUS(IT QUIZ)",
            venue: "(SMV NC 12 & NC 36)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "SPECTRA FLUX(SUPRISE EVENT)",
            venue: "(LH 402)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "CRYPTIX(CODING)",
            venue: "(MCA LAB 03)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "DESIGN RIOT(WEB DESIGN)",
            venue: "(MCA LAB 01)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "HYPER LAUNCH(START UP)",
            venue: "(NANDINI HALL)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "TECHNO HIVE(TECH TALK)",
            venue: "(SHAMBHAVI HALL)",
            timeSlots: [0],
            colSpan: [1]
          },
          {
            name: "RAMPAGE HORIZON(VALORANT)",
            venue: "(LAB 02 & LAB 04)",
            timeSlots: [0],
            colSpan: [1]
          }
        ],
        lunchBreak: ["L", "U", "N", "C", "H"],
        valedictory: ["VALEDICTORY FROM 03:00 PM (SAMBRAM AUDITORIUM)"]
      }
    }
  };



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
      venue: "Rajaram Block (2nd floor Lab 1-4)",
      location: "Rajaram Block, 2nd Floor, Labs 1-4, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/D42nDNvccfiKiMAH6",
    },
    {
      venue: "MCA Seminar Hall (4th floor)",
      location: "MCA Seminar Hall, 4th Floor, Ramanujan Block, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/hFy42rDjDZDVHJqT8",
    },
    {
      venue: "Sambhram Hall",
      location: "5WMM+7M4, SH1, Kalya, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/UjwFAjqsFrvBHXpPA",
    },
      {
      venue: "Boy Main Hostel",
      location: "Boys Main Hostel, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/vLD4pa9eMDnzTYu19",
    },
    {
      venue: "Shambhavi Hall",
      location: "Shambhavi Hall, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/njtVDc6FDEdtsfMt6",
    },
    {
      venue: "Sowparnika Hall",
      location: "Sowparnika Hall, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/QSAr5cBbBgG4yZ3w7",
    },
     {
      venue: "Atal Block",
      location: "Atal Block, NMAMIT, Nitte, Karnataka 574110",
      locationLink: "https://maps.app.goo.gl/Qjor3s12sPd1PiB98",
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
        contextData,
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
