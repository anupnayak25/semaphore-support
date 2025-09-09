import Heading from '../components/Heading/Heading';
import { MapPin, Building } from 'lucide-react';
import { useContext } from 'react';
import { SemaphoreContext } from '../context/SemaphoreContext';

const Location = () => {
  const { titles, locationData } = useContext(SemaphoreContext);

  return (
    <div className="w-full bg-dominant min-h-screen text-white py-10">

      <Heading
        heading={titles.pages.locationPage.heading}
        subheading={titles.pages.locationPage.subHeading}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-highlight rounded-lg">
            <thead className="bg-accent/20">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-accent border border-highlight">
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5" />
                    <span>Place</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-accent border border-highlight">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>Location Link</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((event, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-800/20" : "bg-gray-800/10"}
                >
                  <td className="px-6 py-4 text-accent font-medium border border-highlight">
                    {event.venue}
                  </td>
                  <td className="px-6 py-4 text-accent border border-highlight">
                    {event.locationLink ? (
                      <a
                        href={event.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 hover:underline"
                      >
                        {event.location}
                      </a>
                    ) : (
                      <span>{event.location}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Location;
