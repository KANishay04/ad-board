
import React from 'react';
import { AdProvider } from './AdContext';
import Board from './Board';
import AddAdForm from './AddAdForm';
import Slider from 'react-slick';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true, 
    centerPadding: '0px', 
  };
  
  return (
    <AdProvider>
      <div>
        <h1>Интерактивная доска объявлений</h1>
        <div className="slider-container"> {/* Создаем контейнер для слайдера */}
          <Slider {...settings}>
            <div>
              <img src="/img/images (1).jpg" alt="slide 1" />
            </div>
            <div>
              <img src="/img/images (4).jpg" alt="slide 2" />
            </div>
            <div>
              <img src="/img/images (3).jpg" alt="slide 3" />
            </div>
          </Slider>
        </div>
        <AddAdForm />
        <Board />
      </div>
    </AdProvider>
  );
};

export default App;
