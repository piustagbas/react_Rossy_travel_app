import React, { useState } from 'react';
import './navbar.css';

import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNAV = () => {
        setActive('navBar activeNavbar');
    }

    const removNAV = () => {
        setActive('navBar');
    }

    return (
        <section className={`navBarSection ${active}`}>
            <header className="header flex">
                <div className="logoDiv">
                    <button className="logo flex" onClick={() => window.location.href="/"}>
                        <h1><MdOutlineTravelExplore className="icon" />Travels</h1>
                    </button>
                </div>

                <ul className="navLists flex">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/packages">Packages</NavItem>
                    <NavItem href="/shop">Shop</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="/pages">Pages</NavItem>
                    <NavItem href="/news">News</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                    <button className='btn'>
                        <a href="/book-now">BOOK NOW</a>
                    </button>
                </ul>

                <div onClick={removNAV} className='closeNavbar'>
                    <FaWindowClose className='icon' />
                </div>

                <div onClick={showNAV} className="toggleNavbar">
                    <div className="toggleNavbar">
                        <TbGridDots className='icon' />
                    </div>
                </div>
            </header>
        </section>
    );
}

const NavItem = ({ href, children }) => (
    <li className="navItem">
        <a href={href} className="navLink">{children}</a>
    </li>
);

export default Navbar;
