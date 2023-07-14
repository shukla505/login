import React, {useState } from "react";
import { NavLink} from "react-router-dom";
import "./navBar.css";


function NavBar(props) {





  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
		  
             <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redbuss" style={{height:'50px' , width:'100px'}}></img>
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/bus"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buses
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >Login & Signup
               
              </NavLink>
            </li>
            <li className="nav-item">
              
              
               
              
            </li>
            
          
            
          </ul>
         
           
        </div>
      </nav>
     
    </>
  );
};

     
export { NavBar };



