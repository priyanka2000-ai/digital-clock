import React, { useState, useEffect } from 'react';

import Dashboard from './Dashboard';
import { ChileDashboard,DashboardSe } from './Dashboard';
import { boys,men,women,girls ,data} from './utils/const';



const Clock = () => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   // Create interval to update time every second
  //   const intervalId = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   // Cleanup function to clear the interval when component unmounts
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className='container'>
      {/* <h1 className='text'>Digital Clock</h1>
      <h1>{time}</h1> */}
      <Dashboard />
      <ChileDashboard/>
      <DashboardSe/>

    </div>
  );
};

export default Clock;
