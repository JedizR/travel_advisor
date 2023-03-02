import React, { useEffect, useState } from 'react';
import './home.css';
import video from '../../Assets/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import {Link} from 'react-scroll'

import Main from '../Main/Main';

import Aos from 'aos';
import 'aos/dist/aos.css';

export let maxPrice = 200000;
export let value = 2;

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [sliderValue, setSliderValue] = useState(maxPrice);

  const handleSearch = () => {
    showNav()
  };

  const handleClick = (id) => {
    if(id === 1) window.location.href = 'https://www.facebook.com/thaitravelcenter/?locale=th_TH';
    else if(id === 2) window.location.href = 'https://www.instagram.com/thaitravelcenter/?hl=en';
    else if(id === 3) window.location.href = 'https://www.thaitravelcenter.com/th/';

    else if(id === 4) setActive('Navbar');
};

  const handleInputChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDateInput = (event) => {
    setDate(event.target.value);
  };

 



  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    maxPrice = value;
    };

    const [active, setActive] = useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }

  return (
    <><section className='home'>

          <div className='overlay'></div>
          <video src={video} muted autoPlay loop type='video/mp4'></video>

          <div className='homeContent container'>
              <div className='textDiv'>
                  <span data-aos='fade-up' className='smallText'>
                      Our Packages
                  </span>

                  <h1 data-aos='fade-up' className='homeTitle'>
                      Search your Holiday
                  </h1>
              </div>

              <div data-aos='fade-up' className='cardDiv grid'>
                  <div className='destinationInput'>
                      <label htmlFor='city'>Search your destination:</label>
                      <div className='input flex'>
                          <input
                              type='text'
                              placeholder='Enter name here....'
                              onChange={handleInputChange} />
                            <Link to="main" spy={true} smooth={true} offset={0} duration={500}>
                                <GrLocation className='icon'/>
                            </Link>
                      </div>
                  </div>

                  <div className='dateInput'>
                      <label htmlFor='date'>Select your date:</label>
                      <div className='input flex'>
                          <input type='date' onInput={handleDateInput}/>
                      </div>
                  </div>

                  <div className='priceInput'>
                      <div className='label_total flex'>
                          <label htmlFor='price'>Max price:</label>
                          <h3 className='total'>฿{Math.round(maxPrice/1000)*1000}</h3>
                      </div>
                      <div className='input flex'>
                          <input
                              type='range'
                              max='200000'
                              min='10000'
                              value={maxPrice}
                              onChange={handleSliderChange} />
                      </div>
                  </div>
                    <Link to="main" spy={true} smooth={true} offset={0} duration={500}>
                  <div className='searchOptions flex' onClick={handleSearch}>
                      <HiFilter className='icon' />
                      <span>SEARCH</span>
                  </div>
                  </Link>
              </div>

              <div data-aos='fade-up' className='homeFooterIcons flex'>
                  <div className='rightIcons'>
                      <FiFacebook className='icon' onClick={() => handleClick(1)}/>
                      <AiOutlineInstagram className='icon' onClick={() => handleClick(2)}/>
                      <SiTripadvisor className='icon' onClick={() => handleClick(3)}/>
                  </div>

                  <div className='leftIcons'>
                    <Link to="footer" spy={true} smooth={true} offset={-60} duration={500}>
                        <BsListTask className='icon'/>
                    </Link>
                    <Link to="main" spy={true} smooth={true} offset={0} duration={500}>
                        <TbApps className='icon' />
                    </Link>
                  </div>
              </div>
          </div>
      </section><><Main data={Math.round(maxPrice/1000)*1000} name={destination} date={date}/></></>
    
  )
}

export default Home
