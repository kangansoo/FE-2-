import {React,useState} from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import imageData from "../components/imgdata";


export default function Main() {

  const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
  </div>
  ));

const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (

    <div>
      메인페이지

      <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={1000}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          thumbWidth={80}
          width={'50%'}
          className="w-[200px] lg:hidden">
          {renderSlides}
        </Carousel>
    </div>
  );
};