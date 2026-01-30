import React from 'react'

const Button = ({ text, className, href }) => {
    const handleClick = (e) => {
        if (href?.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = window.innerHeight * 0.1; // Reduced offset for better positioning
                const top = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`${className ?? ''} cta-wrapper group`}>
            <div className="cta-button">
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" className="-rotate-90" />
                </div>
            </div>
        </a>
    )
}

export default Button