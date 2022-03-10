import React from 'react'
import '../styles/style.css'
import img9 from '../images/icon-location.svg';
import img10 from '../images/icon-phone.svg';
import img11 from '../images/icon-email.svg';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="contain">
                    <div class="col">
                        
                        <ul>
                            <li><img src="https://i.ibb.co/YWHy8bL/Captura-de-pantalla-2022-03-05-223212.png" alt=""/></li>
                            <li><img src={img9} alt="" />  Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                             dolore magna aliqua</li>
                            
                        </ul>
                    </div>
                    <div class="col">

                    </div>
                    <div class="col">
                     
                        <ul>
                            <li></li>
                            <li></li>
                            <li> <img src={img10} alt="" />   +1-543-123-4567</li>
                            <li>  <img src={img11} alt="" />  example@fylo.co</li>
                       </ul>
                    </div>
                    <div class="col">
                       
                        <ul>
                            <li></li>
                            <li></li>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
        
                        </ul>
                    </div>
                    <div class="col">
                        
                        <ul>
                            <li></li>
                            <li></li>
                            <li>Contact us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div class="col social">
                        <ul>
                            <li><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt='' width='40px' /></li>
                            <li><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" alt='' width='40px' /></li>
                            <li><img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png" alt='' width='40px' /></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer