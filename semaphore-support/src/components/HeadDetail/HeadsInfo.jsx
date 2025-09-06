import { useState, useMemo } from "react";
import HeadCard from "./HeadCard";

export default function HeadsInfo() {
  const heads = [
    {
      id: 1,
      name: "Rahul Shetty",
      designation: "Surprise Event Head",
      event: "Surprise Event",
      photo: "/images/IMG_0619-1.JPG",
      contact: "9880897965",
      description:
        "Leading innovative surprise events and coordinating special activities",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      designation: "Dance Head",
      event: "Dance",
      photo: "/images/197.jpg",
      contact: "9876512345",
      description: "Organizing dance competitions and cultural performances",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      designation: "Coding Event Head",
      event: "Coding",
      photo: "/images/197.jpg",
      contact: "9123456789",
      description: "Managing programming contests and technical challenges",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Startup Pitch Head",
      event: "Startup Pitch",
      photo: "/images/197.jpg",
      contact: "9988766554",
      description: "Coordinating entrepreneurship events and pitch competitions",
    },
    {
      id: 5,
      name: "Sanjana Rao",
      designation: "Tech Talk Head",
      event: "Tech Talk",
      photo: "/images/197.jpg",
      contact: "9123422334",
      description: "Organizing technical seminars and expert speaker sessions",
    },
    {
      id: 6,
      name: "Rohit Verma",
      designation: "Photography Head",
      event: "Photography",
      photo: "/images/197.jpg",
      contact: "9777788990",
      description: "Managing photography contests and visual documentation",
    },
    {
      id: 7,
      name: "Sneha Nair",
      designation: "IT Manager",
      event: "IT Management",
      photo: "/images/197.jpg",
      contact: "9666644556",
      description: "Overseeing technical infrastructure and IT operations",
    },
    {
      id: 8,
      name: "Vikram Singh",
      designation: "Valorant (Gaming) Head",
      event: "Gaming",
      photo: "/images/197.jpg",
      contact: "9333322110",
      description: "Organizing gaming tournaments and esports competitions",
    },
    {
      id: 9,
      name: "Priya Sharma",
      designation: "IT Quiz Head",
      event: "IT Quiz",
      photo: "/images/priya.jpg",
      contact: "9555566778",
      description: "Conducting technical quizzes and knowledge competitions",
    },
    {
      id: 10,
      name: "Suprith Sharma",
      designation: "IT Quiz Head",
      event: "IT Quiz",
      photo: "/images/priya.jpg",
      contact: "9555566778",
      description: "Conducting technical quizzes and knowledge competitions",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState("all");

  const events = useMemo(() => {
    const uniqueEvents = [...new Set(heads.map((head) => head.event))];
    return uniqueEvents.sort();
  }, [heads]);

  const filteredHeads = useMemo(() => {
    if (selectedEvent === "all") return heads;
    return heads.filter((head) => head.event === selectedEvent);
  }, [selectedEvent, heads]);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copied: ${text}`);
    } catch (err) {
      console.log("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-dominant">
      {/* Header */}
      <div className="sticky top-0 bg-dominant/90 backdrop-blur-lg border-b border-accent z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight">
              Semaphore Event Heads
            </h1>

            {/* Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
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
                className="px-3 py-2 bg-dominant border border-accent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-sm min-w-[150px] sm:min-w-[180px]"
              >
                <option value="all">All Events ({heads.length})</option>
                {events.map((event) => (
                  <option key={event} value={event}>
                    {event} ({heads.filter((h) => h.event === event).length})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-accent text-sm">
              Showing {filteredHeads.length}{" "}
              {selectedEvent === "all"
                ? "event heads"
                : `${selectedEvent} head${filteredHeads.length !== 1 ? "s" : ""}`}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredHeads.map((head) => (
              <HeadCard
                key={head.id}
                head={head}
                getInitials={getInitials}
                copyToClipboard={copyToClipboard}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
