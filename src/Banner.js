import React from 'react';
import "./Banner.css"
function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://t4.ftcdn.net/jpg/03/71/56/17/360_F_371561715_LVI4qVJ2hyWMDXdqJNGdktggEzjQuC15.jpg")`
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    Movie Name
                </h1>
                <div className='banner__buttons'>
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                    <h1 className='bannner__description'>
                        This is a test description
                    </h1>
                </div>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    );
}

export default Banner;