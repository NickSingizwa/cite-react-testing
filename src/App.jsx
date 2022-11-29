import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="cite">
      <h1>CiTe</h1>
      <div className='city'>
        <h3>Add A City</h3>
        <input type="text" placeholder='city name'/>
        <input type="number" placeholder='population'/>
        <input type="number" placeholder='Weather'/>
        <button>Add City</button>
      </div>
      <button className='viewcities'>View Cities</button>
    </div>
  )
}

export default App
