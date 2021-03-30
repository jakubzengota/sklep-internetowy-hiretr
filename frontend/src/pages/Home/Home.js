import React from "react";
import CarouselSlide from './CarouselSlide';
import './Home.css';
import { SLIDE_INFO } from './constants';

function Home() {
    const content = SLIDE_INFO[3];
    return (
        <React.Fragment>
            <div className='Home'>
            <CarouselSlide
                content={content}
            />
        </div>
            <img src='https://i.imgur.com/I5r4pqY.png' alt='homepagepic' style={{width: '100%'}}></img>
        </React.Fragment>
    );
}

export default Home;
