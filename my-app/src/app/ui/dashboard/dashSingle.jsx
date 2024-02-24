import Image from 'next/image'
import React from 'react'
import DashboardPieChart from './dashboardsingle/dashboardpie'

function DashSingle() {
  return (
    <div className='container w-full'>
            <div className="graph-img-part flex justify-around m-3 ">

            <div className="graph">
                    Set graph here
                    <DashboardPieChart/>
                </div>
                <div className="img">
                    <Image src= "/img.png" width={200} height={80}/>
                </div>
              
            </div>
    </div>
  )
}

export default DashSingle
