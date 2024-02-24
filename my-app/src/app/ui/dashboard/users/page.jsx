import React from 'react'
import Image from 'next/image'
import Search from '../search/search'
import Pagination from '../pagination/pagination'

function Contain() {
  return (
    <div className='container bg-[#182237] p-3  '>
     
      <div className="top-serach-bar p-4 flex  w-full justify-between items-center h-full m-2 text-white">

      <Search  placeholder = "search your user"/>
      <div className="btn p-2 ml-2 items-center justify-center w-20 flex text-justify bg-[#151c2c] rounded-lg">
          <button className="rounded-none ...  ">Add </button>
          </div>

      </div>
      <table className='w-full '>
        <thead className='m-10 font-bold '>
          <tr >
            <td className='p-4'>
              Name
            </td>
            <td className='p-4'>
              E-mail
            </td>
            <td className='p-4'>
              Created At
            </td>
            <td className='p-4'>
              Roll
            </td>
            <td className='p-4 text-center'>
              Action
            </td>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='flex items-center gap-3  p-4 rounded-lg'>
              <Image src="/img.png" width={40} height={40} className='rounded-full' />
              Inverse
            </td>
            <td className='p-4'>
              <span>
                inverse@gmail.com
              </span>
            </td>
            <td className='p-4'>
              25.01.2024
            </td>
            <td className='p-4'>
              Admin
            </td>
            <td className='  text-center '>
              <button className='  bg-red-700  p-2 m-1'>
                delete
              </button>
              <button className='p-2 bg-blue-200 m-1 '>
                edit
              </button>
            </td>

          </tr>

          <tr>
            <td className='flex items-center gap-3  p-4'>
              <Image src="/img.png" width={40} height={40} className='rounded-full' />
              Raj
            </td>
            <td className='p-4'>
              <span>
                rajnepale20@gmail.com
              </span>
            </td>
            <td className='p-4'>
              20.07.2024
            </td>
            <td className='p-4'>
              staff
            </td>
            <td className='  text-center '>
              <button className='  bg-red-700  p-2 m-1'>
                delete
              </button>
              <button className='p-2 bg-blue-200 m-1 '>
                edit
              </button>
            </td>
          </tr>
          <tr>
            <td className='flex items-center gap-3  p-4'>
              <Image src="/img.png" width={40} height={40} className='rounded-full' />
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
            <td className='  text-center '>
              <button className='  bg-red-700  p-2 m-1'>
                delete
              </button>
              <button className='p-2 bg-blue-200 m-1 '>
                edit
              </button>
            </td>

          </tr>



        </tbody>
      </table>
    <Pagination/>
    </div>
  )
}

export default Contain
