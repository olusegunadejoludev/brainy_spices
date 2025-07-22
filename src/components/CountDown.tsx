// WITH A LIBRARY
// "use client"
// import React from 'react'
// import Countdown from 'react-countdown'

// const endingDate = new Date("2023-07-25")

// const CountDown = () => {
//   return (
//     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
//   )
// }

// export default CountDown


// WITHOUT A LIBRARY
"use client"
import { useEffect, useState } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetTime = new Date("2025-12-31T23:59:59").getTime(); // or your deadline
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((targetTime - now) / 1000);
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null; // Or show a loading placeholder

  return <span>{timeLeft}</span>;
};

export default CountDown;
