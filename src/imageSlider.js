import React, { useRef } from 'react';


function ImageSlider() {
  const sliderRef = useRef(null); // Ref untuk mengakses elemen slider

  // Fungsi untuk menggulir ke gambar berikutnya
  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: window.innerWidth, // Geser sejauh lebar jendela browser
        behavior: 'smooth' // Animasikan pergeseran
      });
    }
  };

  return (
    <div className="w-full flex flex-row" ref={sliderRef}>
      <button className="prev" onClick={() => sliderRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })}>Previous</button>

      <button className="next" onClick={scrollNext}>Next</button>
    </div>
  );
}

export default ImageSlider;
