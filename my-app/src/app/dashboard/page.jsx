import React from 'react'
import Cards from '../ui/dashboard/card/card'
import Image from 'next/image'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Chart from '../ui/dashboard/chart/chart'
import Transcations from '../ui/dashboard/transcations/transcations'

function Dashboard() {
  return (
    
  <div className="container  h-full">
      <div className='flex justify-center  gap-3 m-2 mt-4'>
       
     <div className="cards h-full flex flex-col  gap-2 w-full  *:">
     
      <div className="cards h-full flex  gap-2">
     <Cards/>
      <Cards/>
      <Cards/>
    
     </div>
     <div className="tables flex">
      <Transcations/>
    </div>
    <div className="tables flex w-full   ">
      <Chart/>
    </div>
     </div>
    
     <div className="right-bar flex flex-col gap-2 ml-3">
     <Rightbar/>
     <Rightbar/>

     </div>
    
    </div>
   
  </div>
  )
}

export default Dashboard
