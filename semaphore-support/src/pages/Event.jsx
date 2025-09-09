import { useContext } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Crown,
  UserCheck,
  Globe,
  LocateFixedIcon,
  LocateOffIcon,
  MapPinHouseIcon,
  LucideScale,
} from "lucide-react";
import Heading from "../components/Heading/Heading";
import { SemaphoreContext } from "../context/SemaphoreContext";
import { useParams } from "react-router-dom";

const Event = () => {
  const { eventData } = useContext(SemaphoreContext);

  const { eventName } = useParams();
  console.log(eventName);

  const currentEvent = eventData.find((event) => event.eventName === eventName);
  console.log("current event", currentEvent);

  const getRuleIcon = (category) => {
    switch (category) {
      case "locationAndTime":
        return <MapPinHouseIcon className="w-5 h-5" />;
      case "rules":
        return <LucideScale className="w-5 h-5" />;
      case "heads":
        return <Crown className="w-5 h-5" />;

      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case "locationAndTime":
        return "Location & Time";
      case "rules":
        return "Event Rules";
      case "heads":
        return "Heads & Coordinators";

      default:
        return category;
    }
  };

  return (
    <div className="w-full bg-dominant min-h-screen text-white py-10">
      <Heading
        heading={currentEvent.eventName.toUpperCase()}
        subheading={`(${currentEvent.secondaryName.toLowerCase()})` } previousRoute="Events"
      />
      {/* Header */}

      {/* Rules Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:gap-8">
          {Object.entries(currentEvent.info).map(([category, info]) => (
            <div
              key={category}
              className="bg-dominant rounded-xl p-6 border border-highlight/10 hover:border-highlight/20 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <div className="text-accent">{getRuleIcon(category)}</div>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-accent">
                  {getCategoryTitle(category)}
                </h2>
              </div>

              <div className="space-y-3 ">
                {info.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-accent bg-dominant hover:bg-highlight/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-accent ">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
