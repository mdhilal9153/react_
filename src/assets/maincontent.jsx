import React from 'react'

import { RiEqualizer2Fill } from '@remixicon/react';

const Maincontent = () => {
  return (
    <div className='flex justify-center mt-5 main'>
      <div className='nav2 flex justify-between'>
        <div className='opt flex justify-between'>
          <a className='font-bold underline'>Latest</a>
          <a className='text-gray-600 font-semibold'>Popular</a>
          <a className='text-purple-500 font-semibold'>Premium</a>
        </div>

        <p className='text-end'><RiEqualizer2Fill/></p>

      </div>
    </div>

    
  )
}

export default Maincontent
