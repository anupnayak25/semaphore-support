import React, { useContext, useState } from "react";
import { SemaphoreContext } from "../context/SemaphoreContext";
import Heading from "../components/Heading/Heading";
import Card from "../components/Card";

function Events() {
  const { titles, eventData } = useContext(SemaphoreContext);
  const [filter, setFilter] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Get unique event names for filter options
  const uniqueEventNames = [
    ...new Set(
      eventData.map(
        (event) => `${event.eventName} (${event.secondaryName.toLowerCase()})`
      )
    ),
  ];

  // Filter events based on selected filter
  const filteredEvents =
    filter === "all"
      ? eventData
      : eventData.filter((event) =>
          event.eventName.includes(filter.split(" (")[0])
        );

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setIsDropdownOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Heading
        heading={titles.pages.eventPage.heading}
        subheading={titles.pages.eventPage.subHeading}
      />

      {/* Filter Dropdown */}
      <div className="mb-8 flex justify-start">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 flex items-center space-x-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent min-w-58"
          >
            <span>{filter === "all" ? "All Events" : filter}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 min-w-full">
              <div className="py-1">
                <button
                  onClick={() => handleFilterChange("all")}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  All Events
                </button>
                {uniqueEventNames.map((eventName, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterChange(eventName)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {eventName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEvents.map((event, index) => (
          <Card
            key={index}
            icon={event.icon}
            name={event.eventName}
            route={`/Events/${event.eventName}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
