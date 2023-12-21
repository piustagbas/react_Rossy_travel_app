import React,{useEffect} from 'react'
import './footer.css'
import video1 from '../../Assets/plan.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import Aos from 'aos'
import 'aos/dist/aos.css'



 const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
   <section className="footer">
    <div className="videoDiv">

    {/* <img src={img} alt="" className='imgC' /> */}

    <video src={video1} muted autoPlay loop typeof='video/mp4' className='video'></video>


  

     </div>

    
     <div className="setcontent container">
      <div className="contactDiv flex">
        <small data-aos ="fade-up" className='small'>KEEP IN TOUCH</small>
        <h2 data-aos ="fade-up" className='head2'>Travel with us</h2>

        <div className="inputDiv flex">
          <input data-aos ="fade-up" type="text" placeholder='Enter Email Address' className='input'/>
         <button data-aos ="fade-up" className="btn flex" type='submit'>

         SEND<FiSend className='icon'/>

         </button>
        </div>
      </div>
      
      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="" className="logo flex">
            <MdOutlineTravelExplore className="icon"/>Travels
            </a>
          </div>

          <div data-aos ="fade-up" className="footerParagraph">
            gvdwhjjckhbkj bzjb bzkc bakbasjkbcknKKB kjbjbkjbkbkjb
          </div>

          <div data-aos ="fade-up" className="footerSocials">
          <FiFacebook className='icon'/>
          <FaInstagram className='icon' />
          <FaWhatsapp className='icon'/>
          <FaXTwitter  className='icon'/>

          <FaLinkedin className='icon'/>
          

          </div>
        </div>

         {/* // group 1 */}
        <div data-aos="fade-up" data-aos-duration="3000"className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Services
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Insurance
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Agencies
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Tourisim
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icons' />
            Payment
            </li>
          </div>
        </div>

         {/* // group 2 */}
         <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Bookings
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            trivago
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Wakanow
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Flynow
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icons' />
            Netlify
            </li>
          </div>
        </div>

         {/* // group 3 */}
         <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks grid">
          <div className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            London
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Texas
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Canada
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icon' />
            Berlin
            </li>

            <li className="footerlist flex">
            <FaChevronRight className='icons' />
            Paris
            </li>
          </div>
        </div>

        <div className="footerDiv flex">
          <small className='smDiv'>BEST TRAVEL WEBSITE THEME</small>
          <small className='smDiv'>COPY RIGHT RESERVED - ISRATECH 2023</small>
        </div>
      </div>
     </div>
   
   </section>

  )
}

export default Footer;