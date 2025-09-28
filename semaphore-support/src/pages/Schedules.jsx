import React, { useState, createContext, useContext } from "react";
import Heading from '../components/Heading/Heading';

// Create context data directly in this file
const contextData = {
  titles: {
    pages: {
      timingsPage: {
        heading: "Event Schedule",
        subHeading: "Plan your participation across multiple events"
      }
    }
  },
  schedule: {
    day1: {
      registration: "8:00 AM",
      inauguration: "9:00 AM (Sambram Auditorium)",
      timeSlots: [
        "11:00 AM TO 12:00 PM",
        "12:00 PM TO 01:00 PM",
        "01:00 TO 02:00",
        "02:00 PM TO 03:00 PM",
        "03:00 PM TO 04:00 PM"
      ],
      events: [
        {
          name: "CYBORG RECRUIT",
          venue: "(MCA SEMINAR HALL)",
          timeSlots: [0, 1, 3, 4], // spans first two slots and last two slots
          colSpan: [2, 2, 2, 2]
        },
        {
          name: "CYBER SCOPE",
          venue: "(SOWPARNIKA HALL)",
          timeSlots: [0, 1, 3, 4],
          colSpan: [2, 2, 2, 2]
        },
        {
          name: "RHYTHM HACK",
          venue: "(SAMBRAM AUDITORIUM)",
          timeSlots: [0, 1],
          colSpan: [2, 2]
        },
        {
          name: "NEON NEXUS",
          venue: "(SMV 12 & 36)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "SPECTRA FLUX",
          venue: "(LH 402)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "CRYPTIX",
          venue: "(MCA LAB 03)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "DESIGN RIOT",
          venue: "(MCA LAB 01)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "HYPER LAUNCH",
          venue: "(NANDINI HALL)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "TECHNO HIVE",
          venue: "(SHAMBHAVI HALL)",
          timeSlots: [3, 4],
          colSpan: [2, 2]
        },
        {
          name: "RAMPAGE HORIZON",
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
          name: "CYBORG RECRUIT",
          venue: "(MCA SEMINAR HALL)",
          timeSlots: [0, 2],
          colSpan: [1, 1]
        },
        {
          name: "CYBER SCOPE",
          venue: "(SOWPARNIKA HALL)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "NEON NEXUS",
          venue: "(SMV NC 12 & NC 36)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "SPECTRA FLUX",
          venue: "(LH 402)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "CRYPTIX",
          venue: "(MCA LAB 03)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "DESIGN RIOT",
          venue: "(MCA LAB 01)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "HYPER LAUNCH",
          venue: "(NANDINI HALL)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "TECHNO HIVE",
          venue: "(SHAMBHAVI HALL)",
          timeSlots: [0],
          colSpan: [1]
        },
        {
          name: "RAMPAGE HORIZON",
          venue: "(LAB 02 & LAB 04)",
          timeSlots: [0],
          colSpan: [1]
        }
      ],
      lunchBreak: ["L", "U", "N", "C", "H"]
    }
  }
};

// Create context
const SemaphoreContext = createContext();

// Context Provider Component
const SemaphoreProvider = ({ children }) => {
  return (
    <SemaphoreContext.Provider value={contextData}>
      {children}
    </SemaphoreContext.Provider>
  );
};

const EventScheduleContent = () => {
  const { titles, schedule } = useContext(SemaphoreContext);
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="w-full bg-dominant min-h-screen text-accent py-10">
      <Heading
        heading={titles.pages.timingsPage.heading}
        subheading={titles.pages.timingsPage.subHeading}
        previousRoute='/'
      />

      <div className="max-w-2xl mx-auto p-6 bg-dominant shadow-lg">
        {/* Dropdown for day selection */}
        <div className="mb-6">
          <label htmlFor="day-select" className="block text-sm font-medium text-accent mb-2">
            Select Day:
          </label>
          <select
            id="day-select"
            value={activeDay}
            onChange={(e) => setActiveDay(Number(e.target.value))}
            className="w-30 px-3 py-2 border border-highlight rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-accent bg-dominant text-accent hover:border-accent/70 transition-colors"
          >
            <option value={1} className='bg-dominant text-accent'>Day 1</option>
            <option value={2} className='bg-dominant text-accent'>Day 2</option>
          </select>
        </div>

        {/* Table container with narrower width */}
        <div className="overflow-x-auto mx-auto max-w-4xl">
          {/* Day 1 Table */}
          {activeDay === 1 && (
            <table className="w-full border-collapse border border-highlight mx-auto">
              <caption className="text-sm mb-2">
                Registration – {schedule.day1.registration} | Inauguration – {schedule.day1.inauguration}
              </caption>
              <thead>
                <tr>
                  {schedule.day1.timeSlots.map((timeSlot, index) => (
                    <th key={index} className="border border-highlight px-3 py-2 font-bold">
                      {timeSlot.split(' TO ').join(' TO ')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[0].name}<br />{schedule.day1.events[0].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2"></td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[0].name}<br />{schedule.day1.events[0].venue}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[1].name}<br />{schedule.day1.events[1].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day1.lunchBreak[0]}</td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[1].name}<br />{schedule.day1.events[1].venue}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[2].name}<br />{schedule.day1.events[2].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day1.lunchBreak[1]}</td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[3].name}<br />{schedule.day1.events[3].venue}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} rowSpan={8} className="border border-highlight px-3 py-2"></td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day1.lunchBreak[2]}</td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[4].name}<br />{schedule.day1.events[4].venue}
                  </td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day1.lunchBreak[3]}</td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[5].name}<br />{schedule.day1.events[5].venue}
                  </td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day1.lunchBreak[4]}</td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[6].name}<br />{schedule.day1.events[6].venue}
                  </td>
                </tr>
                <tr>
                  <td rowSpan={3}></td>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[7].name}<br />{schedule.day1.events[7].venue}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[8].name}<br />{schedule.day1.events[8].venue}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day1.events[9].name}<br />{schedule.day1.events[9].venue}
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {/* Day 2 Table */}
          {activeDay === 2 && (
            <table className="w-full border-collapse border border-highlight mx-auto">
              <caption className="text-sm mb-2">
                Registration – {schedule.day2.registration} | Sessions Start – {schedule.day2.sessionsStart}
              </caption>
              <thead>
                <tr>
                  {schedule.day2.timeSlots.map((timeSlot, index) => (
                    <th key={index} className="border border-highlight px-3 py-2 font-bold">
                      {index === 1 ? (
                        <>
                          {timeSlot.split(' TO ')[0]} <br /> TO <br /> {timeSlot.split(' TO ')[1]}
                        </>
                      ) : (
                        timeSlot
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[0].name}<br />{schedule.day2.events[0].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2"></td>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[0].name}<br />{schedule.day2.events[0].venue}
                  </td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[1].name}<br />{schedule.day2.events[1].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day2.lunchBreak[0]}</td>
                  <td rowSpan={8} className="border border-highlight px-3 py-2"></td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[2].name}<br />{schedule.day2.events[2].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day2.lunchBreak[1]}</td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[3].name}<br />{schedule.day2.events[3].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day2.lunchBreak[2]}</td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[4].name}<br />{schedule.day2.events[4].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day2.lunchBreak[3]}</td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[5].name}<br />{schedule.day2.events[5].venue}
                  </td>
                  <td className="border border-highlight px-3 py-2 text-lg tracking-widest">{schedule.day2.lunchBreak[4]}</td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[6].name}<br />{schedule.day2.events[6].venue}
                  </td>
                  <td rowSpan={3}></td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[7].name}<br />{schedule.day2.events[7].venue}
                  </td>
                </tr>
                <tr>
                  <td className="border border-highlight px-3 py-2 font-bold">
                    {schedule.day2.events[8].name}<br />{schedule.day2.events[8].venue}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

// Wrapper component that provides context
const EventSchedule = () => {
  return (
    <SemaphoreProvider>
      <EventScheduleContent />
    </SemaphoreProvider>
  );
};

export default EventSchedule;