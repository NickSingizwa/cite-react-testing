import './App.css';
import CitiesRegistration from './views/CitiesRegistration'
import CitiesList from './views/CitiesList'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<CitiesRegistration />} />
          <Route path="/cities" exact element={<CitiesList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
