import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Caffeine from './../../assets/caffeine.jpg';
import NoCaffeine from './../../assets/juice.jpg';
import './styles.scss'


const Directory = props => {
    return ( <div className = "directory" >
        <div className = "wrap" >

        <Carousel interval={1000} className = "img-size" >
        <Carousel.Item >
        <img className = "d-block"
        src = "https://mlv6ejvroukd.i.optimole.com/BQGoE9o-ve3lLPhl/w:2000/h:1009/q:auto/https://franklinandsons.co.uk/wp-content/uploads/2021/02/FRANKLIN-SONS-Homepage-Carousel-Banner-v5-A-scaled-1.jpg"
        alt = "First slide" />
        <Carousel.Caption >
        <h3> First slide label </h3> 
        <p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p> 
        </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item>
        <img className = "d-block"
        src = "https://www.ketelone.com/media/1784/carousel_drink.jpg?mode=crop&width=1600&height=900&quality=70"
        alt = "Second slide" />

        <Carousel.Caption>
        <h3> Second slide label </h3> 
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
         </Carousel.Caption>
          </Carousel.Item> 
          <Carousel.Item >
        <img className = "d-block"
        src = "https://pbs.twimg.com/media/E1R8YZCXIAg3s1Y.jpg"
        alt = "Third slide" />

        <Carousel.Caption >
        <h3 > Third slide label </h3> <
        p > Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> 
        </Carousel.Caption> 
        </Carousel.Item> <
        Carousel.Item >
        <img className = "d-block"
        src = "https://spiritsplatform.com.au/wp-content/uploads/2018/09/Tia-Carousel-1-1355x678.jpg"
        alt = "fourth slide" />

        <Carousel.Caption >
        <h3 > Third slide label </h3> 
        <p > Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> 
        </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item >
        <img className = "d-block"
        src = "https://mlv6ejvroukd.i.optimole.com/BQGoE9o-TQDPHlzA/w:2000/h:1009/q:auto/https://franklinandsons.co.uk/wp-content/uploads/2021/02/FRANKLIN-SONS-Homepage-Carousel-Banner-v5-C-scaled-1.jpg"
        alt = "Fifth slide" />

        <Carousel.Caption >
        <h3 > Third slide label </h3> 
        <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> 
        </Carousel.Caption> 
        </Carousel.Item> 
        </Carousel> {
            /* <a>
                          Cold Drinks
                             </a> */
        } 
        <div className = "item"
        style = {
            {
                backgroundImage: `url(${Caffeine})`
            }
        } >
        <a>
        Shop Caffeinated Drinks </a> 
        </div> 
        <div className = "item"
        style = {
            {
                backgroundImage: `url(${NoCaffeine})`
            }
        } >
        <a>
        Shop non Caffeined Drinks </a> 
        </div>

    

        </div> 
        </div>
    );
};


export default Directory;