import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import Navbar from '../ui/dashboard/navbar/navbar'
import  "../ui/dashboard/dashboard.module.css"

function layout({children}) {
  return (
    <div className="flex  containers w-full sticky top-40 ">
      <div className="flex-initial w-64 p-10 bg-[#6ae8e8d0] items-center justify-ends">
       <Sidebar/>
      </div>
      <div className='flex-initial w-full p-10  '>
       <Navbar/>
       {children}
      </div>
    </div>
  )
}

export default layout
