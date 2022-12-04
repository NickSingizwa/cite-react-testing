import { useState } from 'react'
import '../styles/citiesList.scss'
import axios from 'axios';
import { Link } from "react-router-dom";

function CitiesList() {
    const [cities,setCities] = useState([])

    axios.get('localhost:8080/api/cities/all').then((res)=>{
        console.log(res,"response")
        setCities(res)
    }).catch(err=>console.log(err,"error"))

  return (
    <div className="cite">
      <h1>CiTe</h1>
      <Link to="/"><button>Add New City</button></Link>
      <div className='cityList'>
        <h3>List of Registered Cities</h3>
            {/* {cities.map(city => (
                <div className='onecity'>
                <p className='cityresult'>{city.name}</p>
                <p>{city.weather}&deg;</p>
            </div>
            ))} */}
            <div className='onecity'>
                <p className='cityresult'>Nyabihu</p>
                <p>20&deg;</p>
            </div>
      </div>
    </div>
  )
}

export default CitiesList
