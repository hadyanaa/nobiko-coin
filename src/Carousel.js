import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import scroll1 from './assets/images/scroll1.png';
import scroll2 from './assets/images/scroll2.png';
import scroll3 from './assets/images/scroll3.png';
import scroll4 from './assets/images/scroll4.png';

const Carousel = () => {
   return (
      <CarouselProvider
         naturalSlideWidth={200}
         naturalSlideHeight={220}
         totalSlides={4}
      >

         <Slider>
            <Slide index={0}>
               <img src={scroll1} alt="Gambar 1" />
            </Slide>
            <Slide index={1}>
               <img src={scroll2} alt="Gambar 2" />
            </Slide>
            <Slide index={2}>
               <img src={scroll3} alt="Gambar 3" />
            </Slide>
            <Slide index={2}>
               <img src={scroll4} alt="Gambar 4" />
            </Slide>
         </Slider>
         <ButtonBack className='prev'>&#10094;</ButtonBack>
         <ButtonNext className='next'>&#10095;</ButtonNext>
      </CarouselProvider>
   );
};
export default Carousel;