import {useNavigate, createSearchParams } from 'react-router-dom';
import './App.css';
import { MainPage } from "./pages/main-page";
import { NavBar } from "./component/nav-bar";
import {About} from "./component/nav-bar/About";
import {Contact} from "./component/nav-bar/Contact";
import {Login} from "./component/nav-bar/Login";
import {Signup} from "./component/nav-bar/Signup";
import { BusCards } from './pages/bus-cards';
import { BusCard } from './pages/bus-card';
import { NotFound } from './pages/not-found-page';
import redbus from "./images/redBus.png";
import {Footer} from "./component/footer-nav/foot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "./component/nav-bar/firebase";





function App() {

  const navigate = useNavigate();

  const dataSearch = (obj) => {
    navigate(
      `/bus?${createSearchParams({ source: obj.src, destination: obj.dest })}`
    );
  };

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
 


  return (
    <div className="App">
      
      <NavBar />
      
      
      
      
      <Routes>
        <Route path="/"  element={<MainPage changeHandler={dataSearch}></MainPage>}>
       
        <Route path="/"  element={<img src={redbus} alt="imag" className='image-1'>
       
         
        </img>}>
         
        </Route>
        </Route>
        <Route path="/bus" element={<BusCards />} />
        
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/busName" element={<BusCard />} />
        
        <Route path="/" element={<NavBar name={userName} />} />
        <Route path="*" element={<NotFound />} />
        
        
      </Routes>
      
      <Footer />
      
    </div>
  );
}

export default App;
