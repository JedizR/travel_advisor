import React, { useState }  from 'react'
import {useEffect}  from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Osaka-Kyoto',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '23900',
        description: 'Osaka and Kyoto are popular tourist destinations in Japan. Kyoto is known for its temples and traditional architecture, while Osaka is famous for its vibrant atmosphere and street food. Both cities offer unique travel experiences, showcasing the richness of Japanese culture.',
        review: '+227',
        date: '2023-03-07'
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CITY HIGHLIGHT',
        fees: '47999',
        description: 'A Paris tour is a great way to explore the French capital\'s beauty and charm, from the Eiffel Tower to the Louvre Museum. Visitors can indulge in delicious French cuisine, admire iconic landmarks, and immerse themselves in the city\'s romantic atmosphere.',
        review: '+136',
        date: '2023-03-05'
    },

    {
        id:3,
        imgSrc: img3,
        destTitle: 'Milan',
        location: 'Italy',
        grade: 'CITY HIGHLIGHT',
        fees: '63999',
        description: 'Discover the iconic landmarks of Milan, including the Gothic-style Duomo di Milano cathedral, Galleria Vittorio Emanuele II shopping arcade, and historic Sforza Castle. Explore the trendy Brera district and savor Milanese cuisine, known for its bold flavors. With a guided tour, experience the city\'s rich history, culture, and world-class shopping.',
        review: '+115',
        date: '2023-03-11'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Marina Bay Sands',
        location: 'Singapore',
        grade: 'LUXURY GRAND',
        fees: '11999',
        description: 'The Marina Bay Sands tour takes you to the observation deck on the 57th floor for a panoramic view of Singapore\'s skyline. Then, visit the ArtScience Museum, Shoppes at Marina Bay Sands, and Gardens by the Bay. The tour showcases the luxury, beauty, and innovation of Singapore.',
        review: '+82',
        date: '2023-03-03'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'American west coast',
        location: 'United States',
        grade: 'CULTURAL RELAX',
        fees: '145000',
        description: 'Discover the beauty of the USA\'s West Coast on an unforgettable tour, from the rugged coastline of Oregon to the sunny beaches of Southern California. Explore iconic landmarks such as the Golden Gate Bridge in San Francisco, hike through majestic redwood forests, and savor delicious local cuisine. Experience a perfect balance of adventure, relaxation, and sightseeing on a West Coast tour.',
        review: '+74',
        date: '2023-03-18'
    },

    {
        id:6,
        imgSrc: img6,
        destTitle: 'Oakland-Rotorua',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '99000',
        description: 'A tour to Oakland-Rotorua in New Zealand would likely involve visiting the city of Rotorua, located in the Bay of Plenty region on the North Island, and the surrounding area. Rotorua is known for its geothermal activity, Maori culture, and outdoor recreation opportunities.',
        review: '+69',
        date: '2023-03-23'
    }

]

export const Main = (props) => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])



    const handleClick = (id) => {
        if(id === 1) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/7160/';
        else if(id === 2) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/5273/';
        else if(id === 3) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/6765/';
        else if(id === 4) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/793/';
        else if(id === 5) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/3844/';
        else if(id === 6) window.location.href = 'https://www.thaitravelcenter.com/th/tour/detail/4099/';
    };
    
    

    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Recommended destinations
                </h3>
                <h3 data-aos="fade-right" className="title2">
                    Under - ฿{props.data}
                </h3>
                <h3 data-aos="fade-right" className="title3">
                    On - {props.date}
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description, review, date})=>{
                        
                        if((props.date==''||props.date==date)&&fees<props.data&&(location.substring(0,props.name.length).toLowerCase()==props.name.toLowerCase()||destTitle.substring(0,props.name.length).toLowerCase()==props.name.toLowerCase()||props.name=='')){return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}&nbsp;&nbsp;&nbsp;&nbsp;{date}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>{review}</small></span>
                                        </div>
                                        <div cla ssName="price">
                                            <h5>฿{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex' onClick={() => handleClick(id)}>
                                         DETAILS <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )}
                    })
                }
            </div>
        </section>
    )
}

export default Main