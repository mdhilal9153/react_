import React from 'react'
import Card2 from './card2'


const card = (props) => {
  
  console.log(props.data);
  return (
    <div className='p-4 flex flex-nowrap justify-center gap-4 mt-4'>
      {props.data.map((item) => (
        <Card2 img={item.img} name={item.name}/>
      ))}
      
      {/* <Card2/> */}
    </div>
  )
}
export default card
