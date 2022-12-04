import { useState } from 'react'
import '../styles/citiesRegistration.scss'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from "react-router-dom";

function CitiesRegistration() {
    const [city,setCity] = useState("")
    const [population,setPopulation] = useState("")
    const [weather,setWeather] = useState("")
  
    const handleCityChange= (e) => {
      setCity(e.target.value)
    }
    const handlePopulationChange= (e) => {
      setPopulation(e.target.value)
    }
    const handleWeatherChange= (e) => {
      setWeather(e.target.value)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log("reached")
        if(city != "" && population != "" && weather != ""){
          axios.post('localhost:8080/api/cities/add',{
            name: city,
            weather: weather,
          }).then((res)=>{
            console.log(res)
            toast("City added successfully",{
              position: "top-right",
              hideProgressBar : true,
              // theme: "dark",
              type: "success",
              closeOnClick: true,
            });
          }).catch(err=>console.log(err,"error"))
    
        }else{
          toast("Some fields are empty",{
            position: "top-right",
            hideProgressBar : true,
            // theme: "dark",
            type: "error",
            closeOnClick: true,
          });
        }
      }

  return (
    <div className="cite">
        <ToastContainer />
      <h1>CiTe</h1>
      <div className='city'>
        <h3>Add A City</h3>
        <form>
          <input type="text" className='cityname' name='city' placeholder='city name' onChange={handleCityChange}/>
          <input type="number" className='pop' name='pop' placeholder='population' onChange={handlePopulationChange}/>
          <input type="number" className='weather' name='weather' placeholder='Weather' onChange={handleWeatherChange}/>
          <button type="submit" onClick={(e) => submitForm(e)} disabled={city == '' || population == '' || weather == ''}>Add City</button>
        </form>
      </div>
      <Link to="/cities"><button className='viewcities'>View Cities</button></Link>
    </div>
  )
}

export default CitiesRegistration
