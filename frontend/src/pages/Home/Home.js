import React from "react";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
                    <img src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s03/january_2021/6091/launch-teasers/6091-3x2-Women-3-simone-rocha-hm-designer-collaboration-2021.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" />
                    <p className="legend">Nowość</p>
                </div>
                <div>
                    <img src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s03/february_2021/1423a/1423A-3x2-make-every-occasion-special-2.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" />
                    <p className="legend">Nowość</p>
                </div>
                <div>
                    <img src="https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/ladies_s03/mars_2021/1103a/1103A-3x2-copy-2-spring-of-natural-innovations.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]" />
                    <p className="legend">Nowość</p>
                </div>
            </Carousel>
        </div>
        <div className='Home'></div>        
        </React.Fragment>
    );
}

export default Home;
