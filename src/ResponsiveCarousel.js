import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import scroll1 from './assets/images/scroll1.png';
import scroll2 from './assets/images/scroll2.png';
import scroll3 from './assets/images/scroll3.png';
import scroll4 from './assets/images/scroll4.png';

const CarouselPage = () => {
   return (
      <Carousel centerMode infiniteLoop dynamicHeight showIndicators={false} showThumbs={false}>
         <div>
            <img src={scroll1} alt="Gambar 1" />
         </div>
         <div>
            <img src={scroll2} alt="Gambar 2" />
         </div>
         <div>
            <img src={scroll3} alt="Gambar 3" />
         </div>
         <div>
            <img src={scroll4} alt="Gambar 4" />
         </div>
      </Carousel>
   );
};
export default CarouselPage