import React from "react";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import one from './img/one.jpg';
import two from './img/two.jpg';
import three from './img/three.jpg';



function Home() {
    return (
        <React.Fragment>
        <div className='Home'>
         <Carousel
            showArrows={true}
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            >
                <div> 
                    <img  src={one} width="300" height="800"/>
                    <Link className="legend" to="/catalog/401" style={{ textDecoration: 'none' }}>Bluza Relaxed Fit</Link>
                </div>
                <div>
                    <img src={two} width="300" height="800"/>
                    <Link className="legend" to="/catalog/525" style={{ textDecoration: 'none' }}>Bluza z kapturem</Link>
                </div>
                <div>
                    <img src={three} width="300" height="800"/>
                    <Link className="legend" to="/catalog/526" style={{ textDecoration: 'none' }}>Bluza z kapturem i z nadrukiem</Link>
                </div>
            </Carousel>
        </div>
        <div className='Home'></div>        
        </React.Fragment>
    );
}

export default Home;
