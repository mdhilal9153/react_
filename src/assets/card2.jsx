import React from 'react'

const card2 = (props) => {
  return (
    <div className='card bg-white text-black p-3 rounded-xl flex flex-col items-center gap-2'>
        <img src={props.img} className='image rounded-xl'></img>
        <h3 className='text-center mt-2 font-semibold'>{props.name}</h3>
        <button className='rounded-full border border-black p-2 btn '>Order Now</button>

    </div>
  )
}

export default card2
