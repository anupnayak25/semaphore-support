import { useContext, useState } from 'react';
import Heading from '../components/Heading/Heading';
import { SemaphoreContext } from '../context/SemaphoreContext';
import { QuoteIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schedules = () => {
  const [selectedDay, setSelectedDay] = useState('Day1');
  const {scheduleData, titles} = useContext(SemaphoreContext);
  const {day1Schedule, day2Schedule} = scheduleData;
    
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
            className="w-30 px-3 py-2 border border-accent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-highlight focus:border-accent bg-dominant text-accent hover:border-accent/70 transition-colors"
          >
            <option value="Day1" className='bg-dominant text-white'>Day 1</option>
            <option value="Day2" className='bg-dominant text-white'>Day 2</option>
          </select>
        </div>

        {/* Schedule table */}
        <div className="overflow-hidden border border-accent rounded-lg shadow">
          <table className="min-w-full">
            <thead className="bg-dominant">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-accent uppercase tracking-wider border-r border-b border-accent font-bold">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-accent uppercase tracking-wider border-b border-accent">
                  Event
                </th>
              </tr>
            </thead>
            <tbody className="bg-dominant">
              {currentSchedule.map((item, index) => (
                <tr key={index} className="hover:bg-accent/10 transition-colors border-b border-accent">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent border-r border-accent">
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

      <div className="p-6 bg-dominant rounded-lg shadow-sm max-w-4xl mx-auto flex flex-col">
        <h2 className="text-3xl font-bold text-accent mb-4 text-center">
        </h2>
        
        <div className="relative">
          <QuoteIcon className="text-accent rotate-180 mb-2" size={24} />
          
          <p className="text-accent/90 leading-relaxed text-center px-8 py-4">
            <span className="italic">Schedules for each event are available on the <Link to="/events" className="text-blue-500 underline">Events</Link> page</span>
          </p>
          
          <div className="flex justify-end">
            <QuoteIcon className="text-accent mt-2" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedules;