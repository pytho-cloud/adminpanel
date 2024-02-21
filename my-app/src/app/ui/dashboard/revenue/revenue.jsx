import React from 'react';
import BarChart from './barlinechart';
import AreaCharts from './areachart';
import StackAreaChart from './stackarea';

function Revenue() {
  return (
    <div className="container mx-auto ">
      <div className="containers flex flex-col md:flex-row  gap-5 p-4 ">
        <div className="pie-chart w-full   md:w-1/2 flex bg-[#182237] p-3 rounded-3xl">
          <StackAreaChart/>
          
        </div>
        <div className="containers bar-chart w-full md:w-1/2 bg-[#182237] p-3 rounded-3xl">
          <h1>Salesforecast</h1>
          <BarChart />
        </div>
      </div>
      <div className="container text-center gap-5 m-3 p-2">
        <h1 className="w-full text-center p-4 font-bold text-2xl">Revenue</h1>
        <div className="pie-chart bg-[#182237] p-3 rounded-3xl">
          <AreaCharts />
        </div>
      </div>
    </div>
  );
}

export default Revenue;
