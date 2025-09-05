import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Crown, UserCheck, Globe } from 'lucide-react';

const Rules = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    const eventRules = [
        {
            eventId: 0,
            eventName: "Coding Marathon",
            rules: {
                volunteers: [
                    "Report to venue 30 minutes before event start",
                    "Wear volunteer ID and dress code T-shirt",
                    "Assist participants in registration and seating"
                ],
                eventHeads: [
                    "Ensure all systems are functional before start",
                    "Brief volunteers about event flow",
                    "Handle disputes and escalate if needed"
                ],
                participants: [
                    "Bring college ID and event pass",
                    "Maintain discipline and follow instructions",
                    "No plagiarism or use of unauthorized devices"
                ],
                general: [
                    "Follow code of conduct at all times",
                    "Dress in formals or college uniform",
                    "Be punctual; late entries may be disqualified"
                ]
            }
        },
        {
            eventId: 1,
            eventName: "Robotics Challenge",
            rules: {
                volunteers: [
                    "Check equipment and safety protocols",
                    "Guide teams to testing area",
                    "Report any issues to event head immediately"
                ],
                eventHeads: [
                    "Verify that robots meet specifications",
                    "Monitor scoring and maintain fairness",
                    "Ensure proper safety measures are followed"
                ],
                participants: [
                    "Teams must wear safety gear",
                    "Robots must not exceed size/weight limits",
                    "Any damage to venue must be reported"
                ],
                general: [
                    "Follow code of conduct at all times",
                    "Dress in formals or college uniform",
                    "Be punctual; late entries may be disqualified"
                ]
            }
        }
    ];

    const currentEvent = eventRules[currentEventIndex];

    const nextEvent = () => {
        setCurrentEventIndex((prev) => (prev + 1) % eventRules.length);
    };

    const prevEvent = () => {
        setCurrentEventIndex((prev) => (prev - 1 + eventRules.length) % eventRules.length);
    };

    const getRuleIcon = (category) => {
        switch (category) {
            case 'volunteers':
                return <Users className="w-5 h-5" />;
            case 'eventHeads':
                return <Crown className="w-5 h-5" />;
            case 'participants':
                return <UserCheck className="w-5 h-5" />;
            case 'general':
                return <Globe className="w-5 h-5" />;
            default:
                return <Globe className="w-5 h-5" />;
        }
    };

    const getCategoryTitle = (category) => {
        switch (category) {
            case 'volunteers':
                return 'Volunteers';
            case 'eventHeads':
                return 'Event Heads';
            case 'participants':
                return 'Participants';
            case 'general':
                return 'General Rules';
            default:
                return category;
        }
    };

    return (
        <div className="w-full bg-dominant text-white">
            {/* Header */}
            <div className="sticky top-0 bg-dominant border-b border-highlight/20 z-10">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={prevEvent}
                            className="p-2 rounded-full bg-highlight/10 hover:bg-highlight/20 transition-colors"
                            disabled={eventRules.length <= 1}
                        >
                            <ChevronLeft className="w-6 h-6 text-highlight" />
                        </button>
                        
                        <div className="text-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-accent">
                                {currentEvent.eventName}
                            </h1>
                            <div className="flex justify-center mt-2 space-x-2">
                                {eventRules.map((_, index) => (
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
                            disabled={eventRules.length <= 1}
                        >
                            <ChevronRight className="w-6 h-6 text-highlight" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Rules Content */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid gap-6 md:gap-8">
                    {Object.entries(currentEvent.rules).map(([category, rules]) => (
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
                                {rules.map((rule, index) => (
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