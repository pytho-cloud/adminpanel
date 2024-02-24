import React from 'react'

function Pagination() {
  return (
    <div className='flex p-6  justify-between  w-full'>

<button type="button" class="cursor-pointer ... bg-[#151c2c] p-3">
  Submit
</button>

<button type="button" disabled class="cursor-not-allowed ... bg-[#151c2c] p-3">
  Confirm
</button>
    
    </div>
  )
}

export default Pagination
