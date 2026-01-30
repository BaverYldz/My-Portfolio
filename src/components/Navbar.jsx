
import React, { useEffect, useState } from 'react';
import { navLinks } from "../constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);

            // Determine active section
            const sections = navLinks.map(nav => nav.link.substring(1));
            const allSections = ['hero', ...sections, 'contact'];

            // Find the current section being viewed
            // Check in reverse order to prefer lower sections if ranges overlap or for better "current" feel
            for (const sectionId of allSections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section top is near the top of viewport (considering navbar offset)
                    // or if the section covers a significant portion of the viewport
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(sectionId);
                        // Once we find the first one that fits (since we might want to iterate order), 
                        // actually iterating forward and checking active range is standard?
                        // If multiple overlap, the one "most" in view should win, 
                        // but normally sections are stacked.
                        // With rect.top <= 200, we find the section that has started or is well into view.
                        // But if we are at bottom, multiple might satisfy top <= 200.
                        // So checking simple range is safer if we know scrollY.
                        // But getBoundingClientRect is easier relative to viewport.
                    }
                }
            }

            // Re-implementation with window.scrollY for stability
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check if at bottom of page -> contact
            if (scrollY + viewportHeight >= documentHeight - 50) {
                setActiveSection('contact');
                return;
            }

            // Iterate and find which one we are in
            for (const sectionId of allSections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // Add an offset for navbar (approx 100px)
                    if (scrollY >= offsetTop - 150 && scrollY < offsetTop + offsetHeight - 150) {
                        setActiveSection(sectionId);
                        break; // Found the specific section
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        // Call once to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false); // Close mobile menu on click

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
        <header className="navbar">
            <div className={`inner ${scrolled ? 'scrolled' : ''}`}>
                <a
                    href="#hero"
                    className="logo"
                    onClick={(e) => handleNavClick(e, '#hero')}
                >
                    Bawer | Yildiz
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li
                                key={name}
                                className={activeSection === link.substring(1) ? 'active' : ''}
                            >
                                <a
                                    href={link}
                                    onClick={(e) => handleNavClick(e, link)}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button (Desktop) */}
                <a
                    href="#contact"
                    className="contact-btn"
                    onClick={(e) => handleNavClick(e, '#contact')}
                >
                    <div className="inner-btn">
                        <span>Contact me</span>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${isOpen ? 'open' : 'closed'} md:hidden`}>
                {navLinks.map(({ link, name }) => (
                    <a
                        key={name}
                        href={link}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`text-2xl font-bold transition-all duration-300 ${activeSection === link.substring(1) ? 'text-white scale-110' : 'text-white-50 hover:text-white hover:scale-110'}`}
                    >
                        {name}
                    </a>
                ))}
            </div>
        </header>
    );
}

export default NavBar;