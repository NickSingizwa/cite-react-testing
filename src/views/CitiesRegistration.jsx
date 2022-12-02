import { useState } from 'react'
import '../styles/citiesRegistration.scss'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

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
        if(city != "" && population != "" && weather != ""){
          axios.post('localhost:8080/api/cities/add',{
            Name: city,
            Weather: weather,
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
          <input type="text" placeholder='city name' onChange={handleCityChange}/>
          <input type="number" placeholder='population' onChange={handlePopulationChange}/>
          <input type="number" placeholder='Weather' onChange={handleWeatherChange}/>
          <button type="submit" onClick={(e) => submitForm(e)}>Add City</button>
        </form>
      </div>
      <button className='viewcities'>View Cities</button>
    </div>
  )
}

export default CitiesRegistration