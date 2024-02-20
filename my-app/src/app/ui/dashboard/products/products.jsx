import React from 'react'
import Search from '../search/search'
import Image from 'next/image'

function Products() {
  return (
    <div className='container'>
        <Search placeholder="search your product" />
        <div className="container">
        <table className='w-full '>
        <thead className='m-10 font-bold '>
          <tr >
            <td className='p-4'>
              Title
            </td>
            <td className='p-4'>
              Description
            </td>
            <td className='p-4'>
              Price
            </td>
            <td className='p-4'>
              Created At
            </td>
            <td className='p-4'>
              stock
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
                sdgfjshfisdgsodihspaghsdiguskgn
              </span>
            </td>
            <td className='p-4'>
              <span>
                400Rs
              </span>
            </td>
            <td className='p-4'>
              25.01.2024
            </td>
            <td className='p-4'>
              34
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
            <td className='flex items-center gap-3  p-4 rounded-lg'>
              <Image src="/img.png" width={40} height={40} className='rounded-full' />
              Inverse
            </td>
            <td className='p-4'>
              <span>
                sdgfjshfisdgsodihspaghsdiguskgn
              </span>
            </td>
            <td className='p-4'>
              <span>
                400Rs
              </span>
            </td>
            <td className='p-4'>
              25.01.2024
            </td>
            <td className='p-4'>
              34
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
        </div>
    </div>
  )
}

export default Products
