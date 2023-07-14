import React from "react";
import "./foot.css";

const Footer = () =>{
    return (
        <div>
        <div className="footer">
            <div className="footer-sub">
                <div className="footer-Left">
                     <div>
                         <ul>
                             <h2>Top bus routes</h2>
                             <li>Mumubi to Pune</li>
                             <li>Dilhi to Jaipur</li>
                             <li>Lucknow to Kanpur</li>
                             <li>Chennai to Bangalore</li>
                             <li>Kolkata to Siliguri</li>
                             
                         </ul>
                     </div>
                     <div>
                         <ul>
                             
                             <h2> Quick Link</h2>
                             <li><a href="/">Home</a></li>
                             <li><a href="about">About</a></li>
                             <li><a href="contact">Contact</a></li>
                             <li><a href="#">FAQ</a></li>
                         </ul>
                     </div>
                     <div>
                         <ul>
                           
                         <h2> Info</h2>
                             <li><a href="#">T & C</a></li>
                             <li><a href="#">Privacy Policy</a></li>
                             <li><a href="#">Blog</a></li>
                             
                           
                            
                         </ul>
                     </div>

                     <div>
                         <ul>

                           <h2>Head Office</h2>
                           <li>6/2 Ghorahat Prayagraj UP, India</li>
                           <li>Phone +91-9793823842</li>
                           <li>Email: shuklaalokalld@gmail.com</li>
                           <li>Time 09 Am to 05 PM</li>
                             
                            
                         </ul>
                     </div>
                    
                </div>
                <div className="footer-Right">
                       <div>
                           <img src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg" alt="redbuslogo" />
                       </div>
                       <div className="footer-right-details">redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</div>
                       <div>
                           <a href="https://www.facebook.com/redbus.in/">
                               <span ><img style={{width:"86px"}} src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="flogo" /></span>
                           </a>
                           <a href="https://twitter.com/redBus_in">
                               <span  ><img style={{width:"50px" ,color:"#d7d7d7"}} src="https://www.svgrepo.com/show/11841/twitter.svg" alt="tlogo" /></span>
                           </a>
                           <div style={{float:"left" ,marginTop:"15px"}}>
                           <span>Ⓒ</span>
                           <span>Copyright 2023, Developed by Alok kumar shukla. All rights reserved.</span>
                       </div>
                       </div>
                       
                </div>
                
            </div>
            
        </div>
        
    </div>
   
   );

};
export  {Footer};