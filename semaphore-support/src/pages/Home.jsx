import React, { useContext } from "react";
import Heading from "../components/Heading/Heading";
import { SemaphoreContext } from "../context/SemaphoreContext";
import NavBar from "../components/NavBar/NavBar";
import Description from "../components/Description/Description";
import HeadsAndCoordinatorsCard from "../components/HeadsAndCoordinators/HeadsAndCoordinatorsCard";

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
    <div className="bg-dominant pt-10 pb-10 px-4 sm:px-6 lg:px-8">
      <Heading
        heading={titles.program.heading}
        subheading={titles.program.subHeading}
      />
      <NavBar />
      <Description
        title="Need Help?,We Got You Covered!"
        content="You can find all the event related information, full schedule of Semaphore here. If you have any questions, check out the FAQ section or reach out to us directly through the heads and co-ordinators section. All the information you need is just a click away!"
      />
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
    </div>
  );
}

export default Home;
