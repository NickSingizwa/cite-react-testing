import './App.css';
import CitiesRegistration from './views/CitiesRegistration'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<CitiesRegistration />} />
          {/* <Route path="/home" exact element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
