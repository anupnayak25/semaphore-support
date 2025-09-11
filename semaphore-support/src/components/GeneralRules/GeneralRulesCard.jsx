import React from "react";

const GeneralRulesCard = ({ index, ruleText }) => {
  return (
    <div className="w-full max-w-xl bg-dominant border border-highlight rounded-xl p-5 shadow-md flex items-center space-x-4">
      {/* Number circle */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent font-bold text-lg">
        {String(index).padStart(2, "0")}
      </div>

      {/* Rule text */}
      <p className="text-accent text-base leading-relaxed">{ruleText}</p>
    </div>
  );
};

export default GeneralRulesCard;
