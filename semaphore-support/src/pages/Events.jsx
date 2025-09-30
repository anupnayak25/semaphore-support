import React, { useContext, useState } from "react";
import { SemaphoreContext } from "../context/SemaphoreContext";
import Heading from "../components/Heading/Heading";
import ImgCard from "../components/ImgCard";
import { Link } from "react-router-dom";


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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-12 space-y-10">
        <Heading
          heading={titles.pages.eventPage.heading}
          subheading={titles.pages.eventPage.subHeading}
          previousRoute="/"
        />

        {/* Filter Section with Card */}
        <div className="flex  md:justify-start">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-white border-2 border-gray-200 rounded-xl px-6 py-3 text-gray-800 font-medium flex items-center space-x-3 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-200 min-w-64 shadow-sm"
            >

              <span className="flex-1 text-left">{filter === "all" ? "All Events" : filter}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
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
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                ></div>
                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl z-20 min-w-full overflow-hidden">
                  <div className="py-2 max-h-80 overflow-y-auto">
                    <button
                      onClick={() => handleFilterChange("all")}
                      className={`block w-full text-left px-6 py-3 text-gray-800 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-150 ${filter === "all" ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700" : ""
                        }`}
                    >
                      All Events
                    </button>
                    {uniqueEventNames.map((eventName, index) => (
                      <button
                        key={index}
                        onClick={() => handleFilterChange(eventName)}
                        className={`block w-full text-left px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-150 ${filter === eventName ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-medium" : ""
                          }`}
                      >
                        {eventName}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>



        {/* Events Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 w-full">
                <ImgCard
                  img={event.img}
                  route={`/Events/${event.eventName}`}
                />
              </div>
              <Link to={`/Events/${event.eventName}`}>
                <h2 className="mt-4 text-center text-gray-800 font-semibold text-base group-hover:text-blue-600 transition-colors duration-200 px-2">
                  {event.secondaryName}
                </h2>
              </Link>
            </div>
          ))}
        </div>


        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your filter to see more events</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;