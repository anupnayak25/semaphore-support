import React, { useState, useContext } from "react";
import Heading from '../components/Heading/Heading';
import { SemaphoreContext } from '../context/SemaphoreContext';
import { QuoteIcon } from 'lucide-react';



const EventSchedule = () => {
  const { titles } = useContext(SemaphoreContext); // <-- get titles from context
  const [activeDay, setActiveDay] = useState(1);


  return (
    <div className="bg-white text-black font-sans text-center min-h-screen p-6">
      <Heading heading={titles.pages.timingsPage.heading} subheading={titles.pages.timingsPage.subHeading} />

      {/* Dropdown */}
      <div className="mb-4">
        <select
          className="border border-black px-4 py-2 font-bold text-black rounded"
          value={activeDay}
          onChange={(e) => setActiveDay(Number(e.target.value))}
        >
          <option value={1}>Day 01</option>
          <option value={2}>Day 02</option>
        </select>
      </div>

      {/* Table container with narrower width */}
      <div className="overflow-x-auto mx-auto max-w-4xl">
        {/* Day 1 Table */}
        {activeDay === 1 && (
          <table className="w-full border-collapse border border-black mx-auto">
            <caption className="text-sm mb-2">
              Registration – 8:00 AM | Inauguration – 9:00 AM (Sambram Auditorium)
            </caption>
            <thead>
              <tr>
                <th className="border border-black px-3 py-2 font-bold">11:00 AM TO 12:00 PM</th>
                <th className="border border-black px-3 py-2 font-bold">12:00 PM TO 01:00 PM</th>
                <th className="border border-black px-3 py-2 font-bold">01:00 <br /> TO <br /> 02:00</th>
                <th className="border border-black px-3 py-2 font-bold">02:00 PM TO 03:00 PM</th>
                <th className="border border-black px-3 py-2 font-bold">03:00 PM TO 04:00 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  CYBORG RECRUIT<br />(MCA SEMINAR HALL)
                </td>
                <td className="border border-black px-3 py-2"></td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  CYBORG RECRUIT<br />(MCA SEMINAR HALL)
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  CYBER SCOPE<br />(SOWPARNIKA HALL)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">L</td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  CYBER SCOPE<br />(SOWPARNIKA HALL)
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  RHYTHM HACK<br />(SAMBRAM AUDITORIUM)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">U</td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  NEON NEXUS<br />(SMV 12 & 36)
                </td>
              </tr>
              <tr>
                <td colSpan={2} rowSpan={8} className="border border-black px-3 py-2"></td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">N</td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  SPECTRA FLUX<br />(LH 402)
                </td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">C</td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  CRYPTIX<br />(MCA LAB 03)
                </td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">H</td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  DESIGN RIOT<br />(MCA LAB 01)
                </td>
              </tr>
              <tr>
                <td rowSpan={3}></td>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  HYPER LAUNCH<br />(NANDINI HALL)
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  TECHNO HIVE<br />(SHAMBHAVI HALL)
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="border border-black px-3 py-2 font-bold">
                  RAMPAGE HORIZON<br />(LAB 02 & LAB 04)
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Day 2 Table */}
        {activeDay === 2 && (
          <table className="w-full border-collapse border border-black mx-auto">
            <caption className="text-sm mb-2">
              Registration – 8:00 AM | Sessions Start – 9:00 AM
            </caption>
            <thead>
              <tr>
                <th className="border border-black px-3 py-2 font-bold">09:00 AM TO 01:00 PM</th>
                <th className="border border-black px-3 py-2 font-bold">01:00 PM <br /> TO <br /> 02:00 PM</th>
                <th className="border border-black px-3 py-2 font-bold">02:00 PM TO 03:00 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  CYBORG RECRUIT<br />(MCA SEMINAR HALL)
                </td>
                <td className="border border-black px-3 py-2"></td>
                <td className="border border-black px-3 py-2 font-bold">
                  CYBORG RECRUIT<br />(MCA SEMINAR HALL)
                </td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  CYBER SCOPE<br />(SOWPARNIKA HALL)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">L</td>
                <td rowSpan={8} className="border border-black px-3 py-2"></td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  NEON NEXUS<br />(SMV NC 12 & NC 36)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">U</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  SPECTRA FLUX<br />(LH 402)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">N</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  CRYPTIX<br />(MCA LAB 03)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">C</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  DESIGN RIOT<br />(MCA LAB 01)
                </td>
                <td className="border border-black px-3 py-2 text-lg tracking-widest">H</td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  HYPER LAUNCH<br />(NANDINI HALL)
                </td>
                <td rowSpan={3}></td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  TECHNO HIVE<br />(SHAMBHAVI HALL)
                </td>
              </tr>
              <tr>
                <td className="border border-black px-3 py-2 font-bold">
                  RAMPAGE HORIZON<br />(LAB 02 & LAB 04)
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EventSchedule;
