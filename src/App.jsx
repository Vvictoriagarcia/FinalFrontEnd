
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import "./index.css"
import axios from 'axios'
import { useEffect } from "react";
import { useState } from "react";



function App() {
  const url ='https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState()
  useEffect(() => {
    axios(url).then(res => setData(res.data))
  }, [])
  return (
      <div className="App">
         <Navbar/> 
          <Routes>
                <Route exact path="/" element={<Home data={data}/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/favorites" element={<Favs />} />
          </Routes>
        <Footer /> 
      </div>
  );
}

export default App;
