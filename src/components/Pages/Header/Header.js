import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Header.css';
import img1 from '../../../images/carusel/img1.jpg';
import img2 from '../../../images/carusel/img2.jpg';
import img3 from '../../../images/carusel/img3.jpg';


const Header = () => {
       
    return (
        <div>
            <Carousel className='img-slider'>
                <Carousel.Item>
                    <img className="d-block w-100 " src={img1} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className=''>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Second slide" />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Third slide" />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;