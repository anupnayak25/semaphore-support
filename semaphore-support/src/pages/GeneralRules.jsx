import React from "react";
import GeneralRulesCard from "../components/GeneralRules/GeneralRulesCard";
import { SemaphoreContext } from "../context/SemaphoreContext";
import { useContext } from "react";




const GeneralRulesPage = () => {
    const { generalRules } = useContext(SemaphoreContext);
    return (
        <div id="general-rules" className="w-full bg-dominant min-h-screen text-white py-10">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-accent tracking-wider">
                GENERAL RULES
            </h1>
            <p className="text-center text-accent/70 mb-10 text-sm sm:text-base">
                REVEAL: SEQUENTIAL
            </p>

            {/* Centered container */}
            <div className="max-w-3xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-6">
                    {generalRules.map((rule, idx) => (
                        <GeneralRulesCard
                            key={idx}
                            index={idx + 1}
                            ruleText={rule}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralRulesPage;
