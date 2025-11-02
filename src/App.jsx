import React from 'react'

import Topcontent from './assets/topcontent'
import Navbar from './assets/navbar'
import Maincontent from './assets/maincontent'
import Card from './assets/card'

const App = () => {

  const arr=[{img:"https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    name:"Hypocritical face"
  },
  {img:"https://plus.unsplash.com/premium_photo-1673288399839-a79e90605930?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    name:"Monster gravity"
  },
  {img:"https://plus.unsplash.com/premium_photo-1664438942574-e56510dc5ce5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    name:"Defy the rules"
  }]

  return (
    <div className='parent text-white'>
      <Topcontent/>
      <Navbar/>
      <Maincontent/>
      <Card data={arr}/>
    </div>
  )
}

export default App
