import { useState, useMemo, useContext } from "react";
import HeadsAndCoordinatorsCard from "../components/HeadsAndCoordinators/HeadsAndCoordinatorsCard";
import Heading from "../components/Heading/Heading";
import { SemaphoreContext } from "../context/SemaphoreContext";
import toast from "react-hot-toast";
export default function HeadsAndCoordinators() {
  const [selectedEvent, setSelectedEvent] = useState("all");
  const { titles, headsData } = useContext(SemaphoreContext);

  const events = useMemo(() => {
    const uniqueEvents = [...new Set(headsData.map((head) => head.event))];
    return uniqueEvents.sort();
  }, [headsData]);

  const filteredHeads = useMemo(() => {
    return selectedEvent === "all"
      ? headsData
      : headsData.filter((head) => head.event === selectedEvent);
  }, [selectedEvent, headsData]);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`Copied: ${text}`);
    } catch (err) {
      console.error("❌ Failed to copy to clipboard:", err);
    }
  };

  return (
    <div className="w-full bg-dominant min-h-screen text-white py-10">
    <Heading
            heading={titles.pages.headsPage.heading}
            subheading={titles.pages.headsPage.subHeading}
           
          />
      <header className="sticky top-0 z-20 bg-dominant ">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          

          <div className="flex items-center gap-2">
            <label
              htmlFor="event-select"
              className="text-sm font-medium text-accent whitespace-nowrap"
            >
              Filter by:
            </label>
            <select
              id="event-select"
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              className="px-3 py-2 bg-dominant text-accent border border-accent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent text-sm min-w-[150px] sm:min-w-[180px]"
            >
              <option value="all">All Events</option>
              {events.map((event) => {
               
                return (
                  <option key={event} value={event}>
                    {event} 
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
         

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredHeads.map((head) => (
              <HeadsAndCoordinatorsCard
                key={head.id}
                head={head}
                getInitials={getInitials}
                copyToClipboard={copyToClipboard}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
