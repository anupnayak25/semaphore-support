import { useContext, useState } from 'react';
import Heading from '../components/Heading/Heading';
import { SemaphoreContext } from '../context/SemaphoreContext';
import Description from '../components/Description/Description';
const Schedules = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');

 const {scheduleData,titles}=useContext(SemaphoreContext);
 const {day1Schedule, day2Schedule}=scheduleData;
  

  // Get current schedule based on selected day
  const currentSchedule = selectedDay === 'Day1' ? day1Schedule : day2Schedule;

  return (
    <div className="w-full bg-dominant min-h-screen text-white py-10">
      <Heading heading={titles.pages.timingsPage.heading} subheading={titles.pages.timingsPage.subHeading} />
     
      <div className="max-w-2xl mx-auto p-6 bg-dominant shadow-lg">
        
        {/* Dropdown for day selection */}
        <div className="mb-6">
          <label htmlFor="day-select" className="block text-sm font-medium text-accent mb-2">
            Select Day:
          </label>
          <select
            id="day-select"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="w-30 px-3 py-2 border border-highlight/50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-highlight bg-dominant text-accent hover:border-highlight/70 transition-colors"
          >
            <option value="Day1" className='bg-dominant text-white '>Day 1</option>
            <option value="Day2" className='bg-dominant text-white'>Day 2</option>
          </select>
        </div>

        {/* Schedule table */}
        <div className="overflow-hidden border border-highlight rounded-lg shadow ">
          <table className="min-w-full divide-y divide-highlight ">
            <thead className="bg-dominant border-b border-highlight">
              <tr>
                <th className="px-6 py-3 text-left text-xs  text-accent uppercase tracking-wider border-r border-highlight font-bold">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-accent uppercase tracking-wider">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="bg-dominant divide-y divide-highlight">
              {currentSchedule.map((item, index) => (
                <tr key={index} className="hover:bg-dominant transition-colors border border-highlight">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent border-r border-highlight">
                    {item.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">
                    {item.event}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    <Description title='Note:' content='Schedule of each event is given in Events page'/> </div>
  );
};

export default Schedules;