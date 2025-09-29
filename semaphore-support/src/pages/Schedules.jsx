import React, { useState, useContext } from "react";
import { SemaphoreContext } from '../context/SemaphoreContext';
import Heading from '../components/Heading/Heading';

// ✅ Reusable LunchCell
const LunchCell = ({ text, rowSpan, colSpan }) => (
  <td
    rowSpan={rowSpan}
    colSpan={colSpan}
    className="border border-gray-300 px-3 py-2 text-center bg-gray-50"
  >
    <div className="text-lg font-medium tracking-wide">{text}</div>
  </td>
);

// ✅ Reusable EventCell
const EventCell = ({ event, rowSpan, colSpan }) => (
  <td
    rowSpan={rowSpan}
    colSpan={colSpan}
    className="border border-gray-300 px-3 py-2 text-center font-semibold text-gray-800"
  >
    {event?.name}
    <br />
    <span className="text-sm text-gray-600">{event?.venue}</span>
  </td>
);

const EventScheduleContent = () => {
  const { titles, contextData } = useContext(SemaphoreContext);
  const [activeDay, setActiveDay] = useState(1);
  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 min-h-screen text-gray-900 py-10">
      <Heading
        heading={titles.pages.timingsPage.heading}
        subheading={titles.pages.timingsPage.subHeading}
        previousRoute="/"
      />

      <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-xl">
        {/* ✅ Day Selection Dropdown */}
        <div className="mb-8 w-full md:w-1/3 relative">
          <label className="block text-sm font-medium mb-2">Select Day:</label>
          <button
            onClick={() => setIsDayDropdownOpen(!isDayDropdownOpen)}
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <span className="font-medium">{activeDay === 1 ? "Day 1" : "Day 2"}</span>
            <svg
              className={`w-4 h-4 text-gray-600 transform transition-transform ${isDayDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDayDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <button
                onClick={() => { setActiveDay(1); setIsDayDropdownOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Day 1
              </button>
              <button
                onClick={() => { setActiveDay(2); setIsDayDropdownOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Day 2
              </button>
            </div>
          )}
        </div>

        {/* Table container */}
        <div className="overflow-x-auto w-full">
          {/* Day 1 Table */}
          {activeDay === 1 && (
            <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
              <caption className="text-gray-500 text-left mb-2">
                REGISTRATION – {contextData.schedule.day1.registration} | INAUGURATION – {contextData.schedule.day1.inauguration}
              </caption>
              <thead className="bg-gray-50">
                <tr>
                  {contextData.schedule.day1.timeSlots.map((timeSlot, index) => (
                    <th key={index} className="border border-gray-300 px-2 py-2 font-semibold">
                      {timeSlot}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <EventCell event={contextData.schedule.day1.events[0]} colSpan={2} />
                  <td className="border border-gray-300 px-3 py-2"></td>
                  <EventCell event={contextData.schedule.day1.events[0]} colSpan={2} />
                </tr>
                <tr>
                  <EventCell event={contextData.schedule.day1.events[1]} colSpan={2} />
                  <LunchCell text={contextData.schedule.day1.lunchBreak[0]} />
                  <EventCell event={contextData.schedule.day1.events[1]} colSpan={2} />
                </tr>
                <tr>
                  <EventCell event={contextData.schedule.day1.events[2]} colSpan={2} />
                  <LunchCell text={contextData.schedule.day1.lunchBreak[1]} />
                  <EventCell event={contextData.schedule.day1.events[3]} colSpan={2} />
                </tr>
                <tr>
                  <td colSpan={2} rowSpan={8} className="border border-gray-300 px-3 py-2"></td>
                  <LunchCell text={contextData.schedule.day1.lunchBreak[2]} />
                  <EventCell event={contextData.schedule.day1.events[4]} colSpan={2} />
                </tr>
                <tr>
                  <LunchCell text={contextData.schedule.day1.lunchBreak[3]} />
                  <EventCell event={contextData.schedule.day1.events[5]} colSpan={2} />
                </tr>
                <tr>
                  <LunchCell text={contextData.schedule.day1.lunchBreak[4]} />
                  <EventCell event={contextData.schedule.day1.events[6]} colSpan={2} />
                </tr>
                <tr>
                  <td rowSpan={3}></td>
                  <EventCell event={contextData.schedule.day1.events[7]} colSpan={2} />
                </tr>
                <tr>
                  <EventCell event={contextData.schedule.day1.events[8]} colSpan={2} />
                </tr>
                <tr>
                  <EventCell event={contextData.schedule.day1.events[9]} colSpan={2} />
                </tr>
              </tbody>
            </table>
          )}

          {/* Day 2 Table */}
          {activeDay === 2 && (
            <>
              <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                <caption className="text-gray-500 text-left mb-2">
                  BREAKFAST – {contextData.schedule.day2.registration} | SESSIONS STARTS – {contextData.schedule.day2.sessionsStart}
                </caption>
                <thead className="bg-gray-50">
                  <tr>
                    {contextData.schedule.day2.timeSlots.map((timeSlot, index) => (
                      <th key={index} className="border border-gray-300 px-2 py-2 font-semibold">
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
                    <EventCell event={contextData.schedule.day2.events[0]} />
                    <td className="border border-gray-300 px-3 py-2"></td>
                    <EventCell event={contextData.schedule.day2.events[0]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[1]} />
                    <LunchCell text={contextData.schedule.day2.lunchBreak[0]} />
                    <td rowSpan={8} className="border border-gray-300 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[2]} />
                    <LunchCell text={contextData.schedule.day2.lunchBreak[1]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[3]} />
                    <LunchCell text={contextData.schedule.day2.lunchBreak[2]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[4]} />
                    <LunchCell text={contextData.schedule.day2.lunchBreak[3]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[5]} />
                    <LunchCell text={contextData.schedule.day2.lunchBreak[4]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[6]} />
                    <td rowSpan={3}></td>
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[7]} />
                  </tr>
                  <tr>
                    <EventCell event={contextData.schedule.day2.events[8]} />
                  </tr>
                </tbody>
              </table>
              {/* ✅ Valedictory Message */}
              <div className="text-center mt-4 p-4 bg-yellow-100 text-yellow-800 font-semibold rounded-lg shadow-md">
                {contextData.schedule.day2.valedictory}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventScheduleContent;