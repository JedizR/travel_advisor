import React, {useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }

    const removeNavbar = ()=>{
        setActive('navBar')
    }
    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className = "logo flex">
                        <h1><MdOutlineTravelExplore className = "icon"/>  BRR Travel.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className = "navLists flex">
                        <li className = "navItem">
                            <a href="#" onClick={removeNavbar} className = "navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <Link to="main" spy={true} smooth={true} offset={0} duration={500} onClick={removeNavbar} className="navLink" >Package</Link>
                        </li>

                        <li className = "navItem">
                            <Link to="footer" spy={true} smooth={true} offset={-60} duration={500} onClick={removeNavbar} className = "navLink">About</Link>
                        </li>

                        <li className = "navItem">
                        <Link to="footer" spy={true} smooth={true} offset={-60} duration={500} onClick={removeNavbar} className = "navLink">News</Link>
                        </li>

                        <li className = "navItem">
                        <Link to="footer" spy={true} smooth={true} offset={-60} duration={500} onClick={removeNavbar} className = "navLink">Contact</Link>
                        </li>

                        <button className='btn'>
                        <Link to="main" spy={true} smooth={true} offset={0} duration={500} onClick={removeNavbar} className="navLink" >BOOK NOW</Link>
                        </button>
                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className = "icon"/>
                    </div>
                </div>
                <div onClick={showNav} className = "toggleNavbar">
                    <TbGridDots className = "icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar