import React from 'react';
import BarChart from './barlinechart';
import AreaCharts from './areachart';
import StackAreaChart from './stackarea';

function Revenue() {
  return (
    <div className="container  ">
      <div className="containers flex flex-col md:flex-row  gap-5 p-4">
        <div className="pie-chart w-full md:w-1/2 flex bg-[#182237] p-3 rounded-3xl">
          <AreaCharts />
          {/* <StackAreaChart/> */}
          
        </div>
        
        <div className="containers bar-chart w-full md:w-1/2 bg-[#182237] p-3 rounded-3xl">
         
          <BarChart />
        </div>
      </div>
      <div className="container  gap-2 m-3 ">
        <h1 className="w-full   font-bold m-3 ">
         <h2 className='font-bold text-2xl'>
         Revenue
        </h2>
          <p className='font-thin'>
          Payment recieve across all channels
          </p>
           
          
          </h1>
        <div className="pie-chart bg-[#182237] p-4 container rounded-3xl flex items-center pl-3 w-10/12 m-auto   ">
          <AreaCharts />
          {/* <StackAreaChart/> */}
        </div>
      </div>
    </div>
  );
}

export default Revenue;
