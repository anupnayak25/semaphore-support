import React, { useContext } from "react";
import Heading from "../components/Heading/Heading";
import { SemaphoreContext } from "../context/SemaphoreContext";
import NavBar from "../components/NavBar/NavBar";
import Description from "../components/Description/Description";
import HeadsAndCoordinatorsCard from "../components/HeadsAndCoordinators/HeadsAndCoordinatorsCard";
import GeneralPage from "./GeneralRules";

function Home() {
  const { titles, headsData } = useContext(SemaphoreContext); // headsData array

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="bg-dominant min-h-screen pt-10 pb-10 px-4 sm:px-6 lg:px-8">
      <Heading
        heading={titles.program.heading}
        subheading={titles.program.subHeading}
        previousRoute=""
      />
      <NavBar />
      <Description
        title="Need Help?, We Got You Covered!"
        content={
          <>
            You can find all the event-related information, the full schedule of Semaphore, and the{" "}
            <a
              href="#general-rules"
              className="text-accent underline hover:text-accent/80 cursor-pointer"
            >
              General rules
            </a>{" "}
            here. If you have any questions, check out the FAQ section or feel free to reach out to any of our team members.
            For direct support, you can also contact the core committee members listed below. All the information you need is just a click away!
          </>
        }
      />

      {/* Paragraph info above cards */}
      <p className="text-center text-accent font-semibold mt-10 mb-8 text-lg">
        Contact the following core committee members  for more information..
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {headsData.map((head) => (
          <HeadsAndCoordinatorsCard
            key={head.id}
            head={head}
            getInitials={getInitials}
            copyToClipboard={copyToClipboard}
          />
        ))}
      </div>
      <GeneralPage />
    </div>
  );
}

export default Home;
