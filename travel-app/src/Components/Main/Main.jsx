import React, {useEffect} from 'react'
import './main.css'

import img1 from '../../Assets/dubia.jpeg';
import img2 from '../../Assets/usa.jpeg';
import img3 from '../../Assets/paris.avif';
import img4 from '../../Assets/gam.webp';
import img5 from '../../Assets/can.png';
import { IoLocationOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from 'aos'
import 'aos/dist/aos.css'




const Data = [
  {
    id:1,
    imgSrc:img1,
    destTitle:'Dubai',
    location:' United Arab Emirates',
    grade:'Cultural Relax',
    fees:'$800',
    description:'Thew best place to be in the world '

  },
  {
    id:2,
    imgSrc:img2,
    destTitle: "New York",
    location: "United States",
    grade: "Beach Paradise",
    fees: "$1200",
    description: "A tropical haven for relaxation and adventure"
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Paris",
    location: "France",
    grade: "Romantic Getaway",
    fees: "$1000",
    description: "Experience the charm of Santorini's breathtaking views"
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Berlin",
    location: "Germany",
    grade: "Historical Exploration",
    fees: "$900",
    description: "Immerse yourself in the rich history and culture of Kyoto"
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Toroto",
    location: "Canada",
    grade: "Exotic Adventure",
    fees: "$1200",
    description: "Discover the vibrant colors and flavors of Marrakech"
  }
  
  
  
  

]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
    
      <h3 data-aos="fade-right"className="title">
        Most visited destinations
      </h3>
      </div>

      <div className="secContent grid">
        {/* <================Using high order array method (map) by using list of object in one array==================> */}
          
          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees,
               description})=>{
                return(
                  <div key={id}  data-aos ="fade-up" className='singleDestination'>
                      

                      <div className="imgDiv">
                        <img src={imgSrc} alt={destTitle} className='img' />
                      </div>

                         
                         <div className="cardInfo">
                          <h4 className="destTitle">
                            {destTitle}
                          </h4>

                          <span className="continent flex">
                          <IoLocationOutline className='icon' />
                          <span className="name">{location}</span>
                          </span>

                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small className='small'>+1</small></span>
                              <div className="price">
                                <h5>{fees}</h5>
                              </div>
                            </div>
                          </div>

                          <div className="desc">
                            <p>{description}</p>
                          </div>
                          <button className="btn flex">
                            DETAILS <LuClipboardCheck className='icon' />
                          </button>
                         </div>
                    </div>
              
                )
               })
          }

      </div>
    
    </section>
  )
}

export default Main;