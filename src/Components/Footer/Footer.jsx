import React, { useState, useEffect , useRef} from "react";
import emailjs from "@emailjs/browser";
import "./footer.css";
import video2 from "../../Assets/video (2).mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

/*const handleEmailChange = (event) => {
  setEmail(event.target.value);
};*/

const Footer = () => {
  //const [email, setEmail] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  /*const handleSendEmail = async () => {
    try {
      await axios.post("http://your-backend-api-url/send-email", {
        to: email,
        subject: "This is our newsletter",
        body: "Welcome to our newsletter!",
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again later.");
    }
  };*/

  const handleClick = (id) => {
    if(id === 1) window.location.href = 'https://www.thaitravelcenter.com/japantour/';
    else if(id === 2) window.location.href = 'https://www.thaitravelcenter.com/japantour/';
    else if(id === 3) window.location.href = 'https://www.thaitravelcenter.com/europetour/';
    else if(id === 4) window.location.href = 'https://www.thaitravelcenter.com/americatour/';
    else if(id === 5) window.location.href = 'https://www.thaitravelcenter.com/singaporetour/';

    else if(id === 6) window.location.href = 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=0CAQQw7AJahcKEwj4tOvM-Lf9AhUAAAAAHQAAAAAQAw&url=https%3A%2F%2Ftwitter.com%2Fthaitravelenter%3Flang%3Den&psig=AOvVaw1j-ItVGew55Axq5GoXDSVH&ust=1677664270380266';
    else if(id === 7) window.location.href = 'https://www.youtube.com/thaitravelcenter';
    else if(id === 8) window.location.href = 'https://www.instagram.com/thaitravelcenter/?hl=en';
    else if(id === 9) window.location.href = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd-_qy-bf9AhVj2TgGHbKxDnMQFnoECA4QAQ&url=https%3A%2F%2Fwww.thaitravelcenter.com%2Fth%2F&usg=AOvVaw22hfdW3YU6H8ZbZDpx6Jnl';
    
  };
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('gmail', 'template_j1a8kii', form.current , 'kVmeMjsGGuQZJauZd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
          <form ref={form} onSubmit = {sendEmail} className = "formcontrol">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter Email Address"
              name = 'user_email' required />
            <button
              data-aos="fade-up"
              className="btn flex"
              type="submit"
            >
              SEND <FiSend className="icon" />
            </button>
            </form>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> BRR Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              As you embark on your journey, we wish you safe travels and
              unforgettable memories. Thank you for choosing us! Bon voyage!
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" onClick={() => handleClick(6)}/>
              <AiFillYoutube className="icon" onClick={() => handleClick(7)}/>
              <AiFillInstagram className="icon" onClick={() => handleClick(8)}/>
              <FaTripadvisor className="icon" onClick={() => handleClick(9)}/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/*1*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>

                        </div>
                        {/*2*/}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                TripAdvisor
                            </li>

                        </div>
                        {/*3*/}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle" >
                                OTHER TOUR 
                            </span>

                            <li className="footerList flex" onClick={() => handleClick(1)}>
                                <FiChevronRight className="icon"/>
                                Japan
                            </li>

                            <li className="footerList flex" onClick={() => handleClick(2)}>
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>

                            <li className="footerList flex" onClick={() => handleClick(3)}>
                                <FiChevronRight className="icon"/>
                                America
                            </li>

                            <li className="footerList flex" onClick={() => handleClick(4)}>
                                <FiChevronRight className="icon"/>
                                New Zealand
                            </li>

                            <li className="footerList flex" onClick={() => handleClick(5)}>
                                <FiChevronRight className="icon"/>
                                Singapore
                            </li>

                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>RECOMMENDED TOUR WEBSITE FOR THAITRAVELCENTER</small>
                        <small>COPYRIGHT RESERVED - BRR501 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer