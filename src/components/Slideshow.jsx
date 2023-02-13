import React, { useState } from 'react';
import useGetData from '../hooks/useGetData';
import '../styles/Slideshow.css';

function Slideshow() {

    const getData = useGetData()

    const [slideIndex, setSlideIndex] = useState(1);

    function plusSlides(n) {
        if (slideIndex < getData.length) {
            setSlideIndex(slideIndex + n);
        } if (slideIndex === getData.length) {
            setSlideIndex(1)
        }
    }

    function currentSlide(n) {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex - n);
        } if (slideIndex === 1) {
            setSlideIndex(getData.length)
        }
    }

    return (
        <div className="slideshow-container">
            {getData?.map((image, index) => (
                <div
                    key={index}
                    className={`slideshow-slide ${slideIndex === index + 1 ? 'active' : ''
                        }`}
                >
                    <img src={image.name} alt={`Slide ${index + 1}`} />
                    <h2 className='brand'>{image.brand}</h2>
                </div>
            ))}
            <a className="prev" onClick={() => currentSlide(1)}>
                &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
                &#10095;
            </a>

        </div>
    );
}

export default Slideshow;
