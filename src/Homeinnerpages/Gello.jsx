import React, { useState, useEffect } from 'react';

const Gello = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex(index + 1);
      }, 700); // Adjust the delay to control the typing speed
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

  return <div className="text-4xl font-bold text-blue-500">{displayText}</div>; // Example Tailwind classes
};

export default Gello;
