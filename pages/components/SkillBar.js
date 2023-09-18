import React, { useEffect, useState } from 'react';

const SkillBar = ({ skillName, percentage }) => {
  const [showPercentage, setShowPercentage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPercentage(true);
    }, 1000); // Delay the percentage animation for 1 second
  }, []);

  return (
    <div className="p-5 bg-white shadow-md rounded-lg mb-5">
      <div className={`h-2 w-full bg-gray-300 relative transform scale-x-0 origin-left shadow-md ${skillName.toLowerCase()}`}>
        <span className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center font-bold text-white text-opacity-0 ${showPercentage ? 'animate-fadeIn' : ''}`} style={{ fontSize: '18px' }}>
          {percentage}
        </span>
      </div>
      <div className="mb-2">
        <span className="font-semibold text-lg">{skillName}</span>
      </div>
    </div>
  );
};

export default SkillBar;
