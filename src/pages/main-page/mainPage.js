import"./mainPage.css";
import React, { useRef, useState } from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { Outlet } from "react-router-dom";

const MainPage = (props) => {
  const [searchQuery, setSearchQuery] = useState({
    source: "",
    destination: "",
  });
  const src = useRef(null);
  const dest = useRef(null);
  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (src.current.value !== "" && dest.current.value !== "") {
      props.changeHandler({ src: src.current.value, dest: dest.current.value });
    }
  };
  const switchHandler = () => {
      setSearchQuery({
        source: dest.current.value,
        destination: src.current.value,
      }); 
  };
  return (
    
    <div className="mainpage">
      <div className="user-Form-Section">
        <form className="search">
          <div className="input-div src">
          
            <input
              type="text"
              name="source"
              placeholder="From address"
              value={searchQuery.source}
              onChange={handleChange}
              ref={src} 
              />
          </div>
          <div className="button-div">
            <button onClick={switchHandler} className="switch">
              <HiOutlineSwitchHorizontal />
            </button>
          </div>
          <div className="input-div dest">
             <input
              type="text"
              name="destination"
              placeholder="To address"
              value={searchQuery.destination}
              onChange={handleChange}
              ref={dest}
            />
          </div>
          <div className="input-div date">
            
            <input type="date" onChange={(e) => e.target.value} style={{fontSize:'20px',opacity:'0.80'}} required/>
          </div>
          <div className="button-div">
          <button type="button" className="search-btn" onClick={handleSubmit}>
            SEARCH BUSES
          </button>
          </div>
            <div className="dision">
            <h1 className="dision-2">SAVE UPTO RS 250* ON YOUR BUS TICKETS. </h1>
            
            <img src="https://redbus-clone-react-project-exg98fliv6ty-5gyx-96rgxmula.vercel.app/static/media/holiday-cashback.b2a107feb7affa8fb2f5.png" alt="asdd" className="dision-1"></img>
                       
            </div>
           
        </form>
        <div className="tokan">
            <div className="tokan-1">
            
              <a href="https://www.redbus.in/info/OfferTerms" target="_blank"><img src="https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-274X148.png" alt="coopen" style={{height:"200px", width:"50"}}></img></a>
              <p>Save up to Rs 250 on bus tickets</p>
              </div>
              <div className="tokan-2">
              
              <a href="https://www.redbus.in/info/OfferTerms" target="_blank"><img src="https://st.redbus.in/images/offers/superhit_rav/1_1.png" alt="coopen" style={{height:"200px", width:"50"}}></img></a>
              <p>Save up to Rs 300 in AP,TS routes</p>
              </div>
              <div className="tokan-3">
              
              <a href="https://www.redbus.in/info/OfferTerms" target="_blank"><img src="https://st.redbus.in/Images/INDOFFER/BUS200/274x147.png" alt="coopen" style={{height:"200px", width:"250"}}></img></a>
              <p>Save up to Rs 200 in Gujarat and MP Routes.</p>
              </div>
            </div> 
       
            <div className="aboutredbus">
            <div>
                <h2 style={{color:"red" , marginLeft:"5px"}}>CONVENIENCE ON-THE-GO.</h2>
                <p style={{marginLeft:"80px" , overflowWrap:"break-word" ,lineBreak:"auto" , marginTop:"50px"}}>Enjoy the following exclusive features on the redBus app<br></br><br></br>

                Last Minute Booking - In a hurry to book a bus at the last minute? Choose the bus passing from your nearest boarding point and book in a few easy steps.<br></br><br></br>

                Boarding Point Navigation - Never lose your way while travelling to your boarding point!<br></br><br></br>

                Comprehensive Ticket Details- Everything that you need to make the travel hassle free - rest stop details, boarding point images, chat with co-passengers, wake-up alarm and much more!</p>
                <h5>Download the Redbus here... </h5>
                <a href="https://play.google.com/store/apps/details?id=in.redbus.android&hl=en&gl=US" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYK46XZzyb79Pk4_t0FB9NfwZqi8mnRKBnnA&usqp=CAU" alt="icon" style={{width:"150px"}}></img></a><br></br><br></br><br></br>
                <h3>Follow the redBus on social media...</h3>
                <a href="https://www.facebook.com/redBus.in/" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEU6VZ////8qS5yosdA4U54rS5r8/P0uTZtDXKOfqcs0UJ1wgbX29/q3v9gbQZfj5e9ccKxpe7J3h7jCyN7r7fQjRZmMmMJTaah+jLvS1uZLYqWXosfKz+EGOJMSPJWwudSSdZ67AAABTElEQVRoge3XYXOCMAyAYcAAFVhRtDimm///X24fNlsK9UIadmyX92vvntvN2MYkkSRJ2loAULkBH11lpToca6cDl15m3emcjjtlLHRlel/+6oUFzy7tlGbCzesczYObft7mwPMuYDPgoEI2A66H9fCqDtrxuAn/4dE4vIXtaLy8roib24Qs2u/Ou0hc+1dKW7/rn2I/zw/fNlWk6JR5+IXRBg8fNJ89we88z8M8Hjsfz/FccMHROMMowqMJDk4kWtkSD3fPFAVXTWEb42nhHnXLbzFQTYqLsOWi8WIxvQBvzIp4S7jc0Thl90fjlK8rGu8J7ykap/zeQuPLaTxeECYRjbeUGxKL32i4f1vNR9pxQe1t3gY9XO3RkbTZQfko12N8p+1Z9Nb4jx7orb/+Yfzv/lsE/31cRlFwPC7TIvhGcBlFwTeCyyguxj8B/JEUhCero8IAAAAASUVORK5CYII=" style={{width:"50px"}} alt="icon"></img></a>
                <a href="https://www.instagram.com/redbusindia/?hl=en" target="_blank"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AmnFYMwFoTb8OWUP5yCRmMR5cpPb6fEWgg&usqp=CAU" style={{width:"90px"}} alt="icon"></img></a>
                
                <br></br><br></br><br></br><br></br>
                <a href="https://m.redbus.in/refer" target="_blank"><img src="https://st.redbus.in/Images/99/webreferal.png" style={{width:"500px", height:"100px"}}></img></a>
                
              </div>
             <div>
              <img src="https://redbus-clone-react-project-exg98fliv6ty-2e41obmjr-kinshu1996.vercel.app/static/media/IOS-Android-device.982c592b7694056f691c.png" alt="phone" style={{height:"550px", width:"280" , marginRight:"200px"}}></img>
              </div>
              
            </div>
            <div className="over-service">
              <h3 style={{color:"orange"}}>See out</h3>
              <h2 style={{color:'red'}}>Popular Services</h2>
              <div className="service">
              <div className="service-1">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS00syHy6hG-AFyWURSeCfwDSoxAxppVOgxqVsERDkWLecv769B" style={{height:'80px', width:'150px'}} alt="ser"></img>
                <h3 style={{color:'red'}}>City Transfer</h3>
                <p>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</p>
              </div>
              <div className="service-2">
              
               <h3 style={{color:'red'}}>Fast & Easy Booking</h3>
               <p>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</p>
              </div>
              <div className="service-3">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDWqxDHvAOq0b8mzYuujtcnZWA3ANOat9EKSxlkNGDPnSR88X1"  style={{height:'80px', width:'150px'}} alt="ser"></img>
              <h3 style={{color:'red'}}>Many Pickup Locations</h3>
              <p>Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub</p>

              </div>
              </div>
            </div>
      </div>
     
      <Outlet />
      
      </div>
    
  );
};

export { MainPage };
