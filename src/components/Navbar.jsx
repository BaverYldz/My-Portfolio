
import React, { useEffect, useState } from 'react';
import { navLinks } from "../constants";

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleNavClick = (e, link) => {
        e.preventDefault();

        const targetId = link.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate navbar height dynamically
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;

            // Add extra offset for better spacing (20px buffer)
            const offset = navbarHeight + 20;

            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        } else {
            // Fallback: scroll to top if element not found
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    Bawer | YLZ
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a
                                    href={link}
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contact"
                    className="contact-btn group"
                    onClick={(e) => handleNavClick(e, '#contact')}
                >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
}

export default NavBar;