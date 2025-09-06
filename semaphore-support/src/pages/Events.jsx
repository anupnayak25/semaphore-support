import { useContext, useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Crown, UserCheck, Globe, LocateFixedIcon, LocateOffIcon, MapPinHouseIcon,LucideScale } from 'lucide-react';
import Heading from '../components/Heading/Heading';
import { SemaphoreContext } from '../context/SemaphoreContext';

const Rules = () => {
    const {titles}=useContext(SemaphoreContext);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const { eventData } = useContext(SemaphoreContext);

    const currentEvent = eventData[currentEventIndex];

    const nextEvent = () => {
        setCurrentEventIndex((prev) => (prev + 1) % eventData.length);
    };

    const prevEvent = () => {
        setCurrentEventIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
    };

    const getRuleIcon = (category) => {
        switch (category) {
            case 'locationAndTime':
                return <MapPinHouseIcon className="w-5 h-5" />;
            case 'rules':
                return <LucideScale className="w-5 h-5" />;
            case 'heads':
                return <Crown className="w-5 h-5" />;
           
            default:
                return <Globe className="w-5 h-5" />;
        }
    };

    const getCategoryTitle = (category) => {
        switch (category) {
            case 'locationAndTime':
                return 'Location & Time';
            case 'rules':
                return 'Event Rules';
            case 'heads':
                return 'Heads & Coordinators';
          
            default:
                return category;
        }
    };

    return (
        <div className="w-full bg-dominant text-white">
        <Heading heading={titles.pages.eventPage.heading} subheading={titles.pages.eventPage.subHeading}/>
            {/* Header */}
            <div className="sticky top-0 bg-dominant border-b border-highlight/20 z-10">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={prevEvent}
                            className="p-2 rounded-full bg-highlight/10 hover:bg-highlight/20 transition-colors"
                            disabled={eventData.length <= 1}
                        >
                            <ChevronLeft className="w-6 h-6 text-highlight" />
                        </button>
                        
                        <div className="text-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-accent">
                                {currentEvent.eventName}
                            </h1>
                            <div className="flex justify-center mt-2 space-x-2">
                                {eventData.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentEventIndex
                                                ? 'bg-accent'
                                                : 'bg-highlight/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <button
                            onClick={nextEvent}
                            className="p-2 rounded-full bg-highlight/10 hover:bg-highlight/20 transition-colors"
                            disabled={eventData.length <= 1}
                        >
                            <ChevronRight className="w-6 h-6 text-highlight" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Rules Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid gap-6 md:gap-8">
                    {Object.entries(currentEvent.info).map(([category, info]) => (
                        <div
                            key={category}
                            className="bg-highlight/5 rounded-xl p-6 border border-highlight/10 hover:border-highlight/20 transition-colors"
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent/10">
                                    <div className="text-accent">
                                        {getRuleIcon(category)}
                                    </div>
                                </div>
                                <h2 className="text-xl md:text-2xl font-semibold text-accent">
                                    {getCategoryTitle(category)}
                                </h2>
                            </div>
                            
                            <div className="space-y-3">
                                {info.map((rule, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3 p-3 rounded-lg bg-dominant/50 hover:bg-highlight/5 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-semibold mt-0.5">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-200 leading-relaxed">
                                            {rule}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation Hint */}
            <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-highlight/10 backdrop-blur-sm rounded-full px-4 py-2 border border-highlight/20">
                    <p className="text-sm text-highlight text-center">
                        Swipe or use arrows to navigate
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Rules;