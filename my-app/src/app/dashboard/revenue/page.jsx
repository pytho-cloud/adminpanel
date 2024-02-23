import Revenue from '@/app/ui/dashboard/revenue/revenue'

import React from 'react'
import { FaAmazon, FaCircle, FaPaypal } from 'react-icons/fa'

function  RevenuePage() {
  return (
    <div className=''>
      <h1 className='m-2 p-2 flex gap-5  '>
        <div className="container bg-[#182237] rounded-lg p-4">
          <FaPaypal/>
          <h1 className=' font-bold text-2xl '>
           <faAmazon/> Total Earning
          </h1>
          Lorem ipsum dolor sit.
        </div>
        <div className="container bg-[#182237] rounded-lg p-4 ">
        <FaPaypal/>
          <h1 className=' font-bold text-2xl'>
            Total Order
          </h1>
          Lorem ipsum dolor sit.

        </div>
        <div className="container bg-[#182237] rounded-lg p-4">
        <FaPaypal/>
          <h1 className=' font-bold text-2xl'>
            Total Revnue
          </h1>
          Lorem ipsum dolor sit.

        </div>
      </h1>
    <Revenue/>
  

    </div>
  )
}

export default  RevenuePage
