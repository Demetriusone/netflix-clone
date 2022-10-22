import React, {useEffect, useState} from 'react';
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.addEventListener("scroll",transitionNavBar);
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className='nav__contents'>
                <img
                    className="nav__logo" src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                    alt='logo'/>
                <img
                    className="nav__avatar" src='https://banner2.cleanpng.com/20180531/wxl/kisspng-avatar-computer-icons-logo-photographer-5b102d1e728c13.7251972015277867824692.jpg'
                    alt='avatar'/>
            </div>
        </div>
    );
}

export default Nav;