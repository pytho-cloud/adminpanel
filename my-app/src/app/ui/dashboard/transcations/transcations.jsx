import Image from 'next/image'
import React from 'react'

function  Transcations() {
  return (
    <div className='container bg-[#182237] p-8 rounded-lg  mt-3'>
       <h1 className=' p-4 font-bold'>
              Transcations
       </h1>
       <table className='w-full '> 
              <thead className='m-10 font-bold '>
                     <tr >
                            <td className='p-4'>
                                   Name 
                            </td>
                            <td className='p-4'>
                                   Status
                            </td>
                            <td className='p-4'>
                                   Date
                            </td>
                            <td className='p-4'>
                                   Amount 
                            </td>
                         
                     </tr>
              </thead>
              <tbody>
                     <tr>
                            <td className='flex items-center gap-3  p-4 rounded-lg'>
                                   <Image src="/img.png" width={40} height={40} className='rounded-full'/>
                                          Inverse
                            </td>
                            <td className='p-4'>
                                  <span>
                                   Pending
                                   </span> 
                            </td>
                            <td className='p-4'>
                                   25.01.2024
                            </td>
                            <td className='p-4'>
                                   100Rs
                            </td>
                            
                     </tr>

                     <tr>
                            <td className='flex items-center gap-3  p-4'>
                                   <Image src="/img.png" width={40} height={40} className='rounded-full'/>
                                          Raj
                            </td>
                            <td className='p-4'>
                                  <span>
                                   Start
                                   </span> 
                            </td>
                            <td className='p-4'>
                                   20.07.2024
                            </td>
                            <td className='p-4'>
                                   500Rs
                            </td>
                            
                     </tr>
                     <tr>
                            <td className='flex items-center gap-3  p-4'>
                                   <Image src="/img.png" width={40} height={40} className='rounded-full'/>
                                          Sahil
                            </td>
                            <td className='p-4'>
                                  <span>
                                   Pending
                                   </span> 
                            </td>
                            <td className='p-4'>
                                   10.08.2024
                            </td>
                            <td className='p-4'>
                                   800Rs
                            </td>
                            
                     </tr>

                 
                    
              </tbody>
       </table>
      
    </div>
  )
}

export default  Transcations
