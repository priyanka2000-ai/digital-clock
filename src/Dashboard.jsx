import React, { useEffect, useState } from 'react';

const Clock = () => {
  // State to hold the current time string
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [count,setCount] = useState(0)

  useEffect(() => {
    // Set up an interval that updates the time every second (1000ms)
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setCount(prevCount => prevCount +1 )
             // Update time state with the current time
    }, 1000);

    // Cleanup function that clears the interval when the component unmounts
    // This prevents memory leaks and stops the interval from running after unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
        <p>I am parent</p>
      <h1>Count {count}</h1>

      <h2>{time}</h2>
    </div>
  );
};

export default Clock;





export const ChileDashboard = () => {
  return (
    <div>
      AM chilid
    </div>
  )
}




export const DashboardSe = () => {
  return (
    <div>
      Third one
    </div>
  )
}




