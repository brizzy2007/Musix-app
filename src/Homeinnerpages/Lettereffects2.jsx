import React, { useState, useEffect } from 'react';


const Lettereffects2 = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 500); 
      return () => clearTimeout(timer);
    } else {
      
      const resetTimer = setTimeout(() => {
        setIndex(0);
        setDisplayText('');
      }, 1500); 
      return () => clearTimeout(resetTimer);
    }
  }, [index, text]);

  return (
    <div className='text-center bg-[#f5f5f5] lg:h-14 mt-0 sm:h-14'>
      <div className="lg:text-4xl sm:text-3xl font-semibold text-black pt-2">
        <span>{displayText}</span>
        <span className='text-[#f5f5f5]'>.</span>
      </div>
    </div>
  ); // Example Tailwind classes
};

export default Lettereffects2;
