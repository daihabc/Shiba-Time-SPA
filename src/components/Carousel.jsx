import { useState } from 'react';
import '../styles/carousel.css';

function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = slides.length - 1;
  const nextIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;
  const prevIndex = activeIndex === 0 ? maxIndex : activeIndex - 1;

  const goToNext = () => {
    setActiveIndex(nextIndex);
  };

  const goToPrev = () => {
    setActiveIndex(prevIndex);
  };

  const goToFirst = () => {
    setActiveIndex(0);
  };

  const goToSecond = () => {
    setActiveIndex(1);
  };

  const goToThird = () => {
    setActiveIndex(2);
  };

  const goToFourth = () => {
    setActiveIndex(3);
  };

  const goToFifth = () => {
    setActiveIndex(4);
  };

  const slideList = slides.map((slide, index) => {
    const classes = ['carousel__slide'];

    if (index === activeIndex) {
      classes.push('carousel__slide--active');
    }

    return (
      <li
        key={slide.src}
        className={classes.join(' ')}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className="carousel__img"
        />
      </li>
    );
  });

  return (
    <div className="carousel" role="region">
      <a
        href="#previous-botton"
        className="skip__link" tabIndex="1">
        skip to pictures
      </a>
      <div className="carousel__title">Welcome to Shiba Time!</div>

      <button
        className="carousel__control carousel__control--previous"
        onClick={goToPrev}
        id="previous-botton"
      >
        &lt;
      </button>
      <div className="carousel__content">
        <ul className="carousel__slide__container">
          {slideList}
        </ul>
      </div>
      <button
        className="carousel__control carousel__control--next"
        onClick={goToNext}
      >
        &gt;
      </button>
      <div className="carousel__filler"></div>
      <div className="carousel__indicators">
        <button
          onClick={goToFirst} className={`carousel__dot ${activeIndex === 0 ? 'carousel__dot__active' : ''} `} ></button>
        <button
          onClick={goToSecond} className={`carousel__dot ${activeIndex === 1 ? 'carousel__dot__active' : ''} `} ></button>
        <button
          onClick={goToThird} className={`carousel__dot ${activeIndex === 2 ? 'carousel__dot__active' : ''} `} ></button>
        <button
          onClick={goToFourth} className={`carousel__dot ${activeIndex === 3 ? 'carousel__dot__active' : ''} `} ></button>
        <button
          onClick={goToFifth} className={`carousel__dot ${activeIndex === 4 ? 'carousel__dot__active' : ''} `} ></button>
      </div>
    </div>
  );
}
export default Carousel;
