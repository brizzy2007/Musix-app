import React, { useState, useEffect } from 'react';


const Lettereffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 500); // Adjust the delay to control the typing speed
      return () => clearTimeout(timer);
    } else {
      // Reset the index and display text from the beginning
      const resetTimer = setTimeout(() => {
        setIndex(0);
        setDisplayText('');
      }, 1500); // Adjust this timeout to control the duration of the last letter shown
      return () => clearTimeout(resetTimer);
    }
  }, [index, text]);

  return (
    <div className='text-center bg-black lg:h-14 mt-0 sm:h-14'>
      <div className="lg:text-4xl sm:text-3xl font-semibold text-white pt-2">
        <span style={{ textShadow: '0 0 10px #00ff00' }}>{displayText}</span>
        <span className='text-black'>.</span>
      </div>
    </div>
  ); // Example Tailwind classes
};

export default Lettereffect;
