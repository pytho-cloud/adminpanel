import DashSingle from '@/app/ui/dashboard/dashSingle'
import DashboardPieChart from '@/app/ui/dashboard/dashboardsingle/dashboardpie'
import Image from 'next/image'
import React from 'react'


function UserSinglePage() {
  return (
    <div className=' w-full  h-screen   bg-[#182237]	 m-2    p-2 '>
      <h1 className='m-6 flex w-full gap-6 font-bold'>
                <h1>
                User : <span className='p-1'> 24</span>
                </h1>
                <h1>
                    Products: <span className='p-1'> 2467</span>
                </h1>
                <h1>
                    InStock: <span className='p-1'> 274</span>
                </h1>
                <h1>
                        Sales: <span className='p-1'> 242422$</span>
                </h1>
      </h1>

      <div className="  flex h-4/5  w-full    items-center flex p-7 gap-8 m-2 mt-3">
            <DashboardPieChart/>
            <Image src="/img.png" width={400} height={100} className='md-5 p-4 pl-3 mb-9'/>
      </div>

    
      
    </div>
  )
}

export default UserSinglePage
