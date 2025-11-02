import React from 'react'
import { RiArrowRightDownLine , RiSearchLine } from '@remixicon/react';

const Navbar = () => {
  return (
    <div className='flex justify-center nav1 py-2 mt-3'>
      <div className="nav rounded-full flex justify-between flex-nowrap items-center border border-white border-solid gap-2 py-1 px-1">
        <div className='flex'>
            <button className='border border-white rounded-full px-5 flex items-center py-2 text-l gap-2'>Art <RiArrowRightDownLine /></button>

            <input className="rounded-full py-2 px-3" type='text' placeholder='Search design'></input>

        </div>
        
        <p className='me-3'><RiSearchLine/></p>
      </div>
    </div>
  )
}

export default Navbar
