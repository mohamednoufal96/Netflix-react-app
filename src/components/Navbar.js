import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "../styles/Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" className="nav__logo" alt="Netflix logo" />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                className="nav__avatar"
                alt="Netflix logo"
            />
        </div>
    );
}

export default Navbar;
