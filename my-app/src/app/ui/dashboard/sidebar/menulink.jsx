import Link from 'next/link'
import React from 'react'

function Menulink({item}) {
  return (
  
   
    <Link href={item.path} className='flex gap-1 items-center m-10  w-full'>
      {
        item.icons
      }
      {
        item.title
      }
    </Link>
   

  )
}

export default Menulink
