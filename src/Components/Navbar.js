import React from "react";

const Navbar = () => {
    const scrollToSection = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const top = section.offsetTop;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <nav>
            <div className="nav-logo-container">JOURNEYLAND</div>
            <div className="navbar-links-container">
                <a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a>
                <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
                <a href="#features" onClick={(e) => scrollToSection(e, "features")}>Features</a>
            </div>
            <div className="navbar-menu-container"></div>
        </nav>
    );
};

export default Navbar;
