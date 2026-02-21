import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../Assets/Logo.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    // 👇 Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className='header'>
            <nav className={scrolled ? "navbar active" : "navbar"}>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                    <span className="logo-text">RV-SOLUCIONES</span>
                </a>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Nosotros</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacto' onClick={closeMenu}>Contactanos</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar